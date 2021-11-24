import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('testimg.jpg')                                               # image.png 로드
cv2.imshow('image', img)                                                    # 타이틀바 이름을 image로 하여 이미지를 띄움
img = cv2.resize(img, None, fx=1/2, fy=1/2, interpolation=cv2.INTER_AREA)   # image.png를 절반으로 줄이기
cv2.imshow('image', img)      

cv2.waitKey(0)                                                              # 대기시간(ms), 0일 경우 아무키나 누르게되면 다음줄 실행 
cv2.destroyAllWindows()                                                     # 모든 윈도우 닫기