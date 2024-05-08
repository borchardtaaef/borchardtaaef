import matplotlib.pyplot as plt
import numpy as np
label_names = ['AD', 'CN', 'EMCI', 'LMCI', 'SMC']
cm = confusion_matrix(y_test, y_pred)
 
# 绘制混淆矩阵图
fig, ax = plt.subplots()
im = ax.imshow(cm, interpolation='nearest', cmap=plt.cm.Blues)
ax.figure.colorbar(im, ax=ax)
ax.set(xticks=np.arange(cm.shape[1]),
       yticks=np.arange(cm.shape[0]),
       xticklabels=label_names, yticklabels=label_names,
       title='Confusion matrix',
       ylabel='True label',
       xlabel='Predicted label')

