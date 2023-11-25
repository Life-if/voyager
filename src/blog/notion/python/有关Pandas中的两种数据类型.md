### **有关Pandas中的两种数据类型**

#### **series**

##### 定义

​	一维数组，只允许存储相同的数据类型。

##### **特性**

​	可以设定Index，也可以像访问Numpy数组或字典一样来访问Series元素，不可以像字典一样对没有的index进行添加

##### 示例程序

```python
import numpy as np
import pandas as pd
myarray=np.array([1,2,3])
index=['a','b','c']
myseries=pd.Series(myarray,index=index)
print(myseries)
print(myseries[0])
print(myseries['b'])
print(myseries)
```

#### DateFrame

##### 特性

​	可以指定行列标签的二维数组，且可以实现提取列元素

##### 示意程序

```python
import numpy as np
import pandas as pd
myarray=np.array([[1,2,3],[1,2,4],[2,3,4],[3,4,5]])
r=['a','b','c']
c=['c1','c2','c3','c4']
mydataframe=pd.DataFrame(data=myarray,index=c,columns=r)
print(mydataframe)
print(mydataframe['a'])
```

