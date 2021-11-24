'''
    pip install opencv-python keras tensorflow pillow matplotlib sklearn

    21.11.24 update
    검출한 사진의 정확도를 올리기 위해 사진의 눈 정보를 확인해 작업 진행 판별
'''
import os
import sys
import cv2
import numpy as np

from keras.models import load_model
import tensorflow.keras
from sklearn.cluster import KMeans

from PIL import Image, ImageOps
import matplotlib.image as mpimg
from matplotlib import pyplot as plt

face_cascade = cv2.CascadeClassifier('../AI/haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('../AI/haarcascade_eye.xml')

# 18호, 19호, 20호, 21호, 22호, 23호, 24호
faceColor_RGB = ((230.505, 113.61518, 144.10642), 
                (222.527, 113.60277, 146.95467), 
                (214.549, 113.59036, 149.80292), 
                (206.571, 113.57796, 152.65116), 
                (198.593, 113.56555, 155.49941), 
                (190.615, 113.55314, 158.34766), 
                (182.637, 113.54073, 161.19591))

# Ycbcr 값 추가
maxRGB=(236.036, 118.9557, 140.86222)       # 제일 밝은 피부값
minRGB=(171.8, 112.8848, 158.9312)      # 제일 어두운 피부값

answer=('Heart','Oblong','Oval','Round','Square')
scaling_factor=0.1

modelDir='../AI/model/'
imgDir='public/testimg/'

# 원본 이미지
def getImg(imgLink):
    # 원본 이미지 읽기
    coloredImg = cv2.imread(imgLink)
    frame = cv2.resize(coloredImg, dsize=(720,960),fx=scaling_factor,fy=scaling_factor, interpolation=cv2.INTER_LINEAR)

    return frame

def centroid_histogram(clt):
    numLabels = np.arange(0, len(np.unique(clt.labels_)) + 1)
    (hist, _) = np.histogram(clt.labels_, bins=numLabels)
    
    hist = hist.astype("float")
    hist /= hist.sum()
    
    return hist.tolist()


def check_RGB(faceColor):
    res='-'
    resColor=[0,0,0]

    # 에러 체크
    if ((faceColor[0]>=maxRGB[0] and faceColor[1]>=maxRGB[1] and faceColor[2]>=maxRGB[2]) or (faceColor[0]<=minRGB[0] and faceColor[1]<=minRGB[1] and faceColor[2]<=minRGB[2])) :
        res='error'
    else :
        for arr_idx in range(3):
            num=0
            for idx in range(len(faceColor_RGB)):
                if faceColor[arr_idx]>=faceColor_RGB[idx][arr_idx]:
                    num=18+idx
                    break
            if num==0 :
                num=25
                
            resColor[arr_idx]=num
        res=str(round(sum(resColor)/len(resColor)))
            
    return res

# 얼굴형 분석을 위한 사진 자르기
def do_cropImg_v1(img):

    if len(img.shape)==2 :
        faces = face_cascade.detectMultiScale(img, 1.3,5)
    else :
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3,5)
    
    for (x,y,w,h) in faces:
        
        # 자른 이미지에 대해 다른 값이 나올 수 있으니 조절
        if y - int(h / 4)>=0 and x - int(w / 4)>=0:
            cropped = img[y - int(h / 4):y + h + int(h / 4), x - int(w / 4):x + w + int(w / 4)]
        elif y - int(h / 8)>=0 and x - int(w / 8)>=0:
            cropped = img[y - int(h / 8):y + h + int(h / 8), x - int(w / 8):x + w + int(w / 8)]
        elif y - int(h / 10)>=0 and x - int(w / 10)>=0:
            cropped = img[y - int(h / 10):y + h + int(h / 10), x - int(w / 10):x + w + int(w / 10)]
            
    return cropped

# 피부색 분석을 위한 사진 자르기
def do_cropImg_v2(img):

    if len(img.shape)==2 :
        faces = face_cascade.detectMultiScale(img, 1.3,5)
    else :
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3,5)
    
    for (x,y,w,h) in faces:
        n1=y + int(h/2) - 45
        n2=y + int(h/2) + 45
        n3=x + int(w/2) - 45
        n4=x + int(w/2) + 45
        
        cropped = img[n1:n2,n3:n4]
          
    return cropped

def get_image_YCBCR(image, k = 3):
    
    ''' 얼굴색을 식별할 사진으로 잘라내기 '''
    image = do_cropImg_v2(image)

    ''' 작업 진행 '''
    # image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
    image = image.reshape((image.shape[0] * image.shape[1], 3))
    
    clt = KMeans(n_clusters = k)
    clt.fit(image)

    hist = centroid_histogram(clt)
    
    resColor = np.array([0.0, 0.0, 0.0])
    # 해당 값 중 가장 비율이 큰 값을 찾는다
    for idx in range(k) :
        resColor += hist[idx] * clt.cluster_centers_[idx]
    
    myFace_color=check_RGB(resColor.tolist())
    
    return myFace_color

def face_model(myImg,model):
    color_coverted = cv2.cvtColor(myImg, cv2.COLOR_BGR2RGB)
    pil_image=Image.fromarray(color_coverted)

    # Load the model / 학습 모델을 불러온다
    model_filename = modelDir+model
    model = tensorflow.keras.models.load_model(model_filename)

    # Create the array of the right shape to feed into the keras model / keras 모델에 입력할 올바른 모양의 배열을 만듬
    # 배열에 넣을 수 있는 '길이' 또는 이미지 수는 모양 튜플의 첫 번째 위치(이 경우 1)에 의해 결정됩니다.
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    # TM2와 동일한 전략으로 이미지 크기를 224x224로 조정합니다. 이미지 크기를 224x224 이상으로 조정한 다음 중앙에서 자르기
    size = (224, 224)
    image = ImageOps.fit(pil_image, size, Image.ANTIALIAS)

    ''' 이미지 전처리 작업 '''
    # turn the image into a numpy array / 이미지를 numpy 배열로 변환
    image_array = np.asarray(image)
    # Normalize the image / 이미지 정규화
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
    # Load the image into the array / 이미지를 배열에 로드
    data[0] = normalized_image_array

    # run the inference
    prediction = model.predict(data)        # prediction에 전체의 acc 값이 들어감
    analyze_image = prediction[0].tolist()
    res_score=max(analyze_image)
    res_index=analyze_image.index(res_score)
    
    return answer[res_index],'{:.3f}'.format(res_score)
            
def checkEye(image) :
    res=0       # check eye position
    src_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(src_gray,1.1,3)

    for x, y, w, h in faces:
        face_gray = src_gray[y: y + h, x: x + w]
        eyes = eye_cascade.detectMultiScale(face_gray)
        
        for (ex, ey, ew, eh) in eyes:
            # 눈의 중심 좌표
            ctrX, ctrY = ex + ew//2,  ey + eh//2
            
            if ( ( h//3 ) <= ctrY and ctrY <= ( h*3//5 ) ) and ( ( w*1//5 ) <= ctrX and ctrX <= ( w*4//5 )):
                res+=1
                
    if res==2 :
        return True
    else :
        return False
    

''' 메인 함수 '''
img_name = sys.argv[1] 
# img_name='../AI/testimg.jpg'       
myImg=getImg(img_name)

if checkEye(myImg) :
    myImg=do_cropImg_v1(myImg)
    # 얼굴형 분석
    face,face_rate=face_model(myImg,'keras_model_16.h5')

    # 얼굴 피부 색상 분석
    faceColor=get_image_YCBCR(myImg)

    # 전달 인자 : face (얼굴형), faceColor (피부톤 호수)
    if faceColor =='error':
        print(face)
        print('피부 색상은 확인하지 못했습니다.')
    else :
        print(face)
        print(faceColor)
    
else :
    print('잘못된 사진 입니다. 다시 요청합니다.')