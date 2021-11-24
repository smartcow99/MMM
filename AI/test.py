import cv2
import numpy as np
from matplotlib import pyplot as plt
import sys

print("\n\n-------------------1-------------------")
img = cv2.imread('../AI/testimg.jpg')                                               # image.png 로드
print("\n\n-------------------2-------------------")
img = cv2.resize(img, None, fx=1/2, fy=1/2, interpolation=cv2.INTER_AREA)   # image.png를 절반으로 줄이기
print("\n\n-------------------3-------------------")
cv2.imwrite('test.jpg',img)
