from koalanlp.Util import initialize, finalize
from koalanlp.proc import Tagger
from koalanlp import API

initialize(OKT='LATEST')

tagger = Tagger(API.OKT)

text = input("분석할 문장을 입력하세요>> ").strip()
sentences = tagger(text)

# 임의의 사전은 우리가 전처리로 추가 하면 될듯

print("===== result =====")
for i, sent in enumerate(sentences):

    print("( ",end='')
    for word in sent:
        for morph in word:
            if str(morph.getTag()) == 'NNG' and len(morph.getSurface())>1 :
                print("%s" % (morph.getSurface()), end=', ')
    
    print(")")

finalize()