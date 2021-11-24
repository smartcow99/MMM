import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('testimg.jpg')                                               # image.png 로드
img = cv2.resize(img, None, fx=1/2, fy=1/2, interpolation=cv2.INTER_AREA)   # image.png를 절반으로 줄이기
