'''
    pip install opencv-python keras tensorflow pillow matplotlib sklearn
    
    21.11.15 미팅
    Ycrcb 추가 요구
    
'''
import os
import cv2
import numpy as np

from keras.models import load_model
import tensorflow.keras
from sklearn.cluster import KMeans

from PIL import Image, ImageOps
import matplotlib.image as mpimg
from matplotlib import pyplot as plt

# 18호, 19호, 20호, 21호, 22호, 23호, 24호
faceColor_RGB=((253,224,205),(249,214,197),(245,204,189),(241,194,181),(237,184,173),(233,174,165),(229,164,157))
maxRGB=(254,230,220)
minRGB=(215,155,145)

result=[]
answer=('Heart','Oblong','Oval','Round','Square')
scaling_factor=0.1

modelDir='model/'
# imgDir='img/'

# 원본 이미지
def getImg(imgLink):
    # 원본 이미지 읽기
    coloredImg = cv2.imread(imgLink)
    frame = cv2.resize(coloredImg, dsize=(720,960),fx=scaling_factor,fy=scaling_factor, interpolation=cv2.INTER_LINEAR)

    return frame

def centroid_histogram(clt):
    numLabels = np.arange(0, len(np.unique(clt.labels_)) + 1)
    (hist, _) = np.histogram(clt.labels_, bins=numLabels)
    
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

def do_cropImg(img):
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

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

def get_image_RGB(image, k = 3):
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = image.reshape((image.shape[0] * image.shape[1], 3))
    
    clt = KMeans(n_clusters = k)
    clt.fit(image)

    hist = centroid_histogram(clt)
    
    # 해당 값 중 가장 비율이 큰 값을 찾는다
    img_index=hist.index(max(hist))
    my_color=clt.cluster_centers_[img_index].tolist()
    
    myFace_color=check_RGB(my_color)
    
    return myFace_color

def face_model(myImg,model):
    color_coverted = cv2.cvtColor(myImg, cv2.COLOR_BGR2RGB)
    pil_image=Image.fromarray(color_coverted)

    # Load the model / 학습 모델을 불러온다
    print(model)
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
    
    # myText=answer[res_index]+' : '+str('{:.3f}'.format(res_score))
    
    return answer[res_index],'{:.3f}'.format(res_score)
            
       
''' 메인 함수 '''
img_name='images.jpg'       
     
myImg=getImg(img_name)
myImg=do_cropImg(myImg)

# 얼굴형 분석
face,face_rate=face_model(myImg,'keras_model_16.h5')

# 얼굴 피부 색상 분석
faceColor=get_image_RGB(myImg, k = 3)

if faceColor =='error':
    print('얼굴형은 ',face,'(',face_rate,')이고, 피부색상 타입은 검출하지 못했습니다.')
else :
    print('얼굴형은 ',face,'(',face_rate,')이고, 피부색상 타입은 [',faceColor,']호 입니다.')
    
cv2.imshow('result',myImg)
cv2.waitKey(0)
cv2.destroyAllWindows()