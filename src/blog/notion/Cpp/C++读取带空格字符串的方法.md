### 1. cin

cin是C++中最常用的输入语句，当遇到空格或者回车键即停止。

```c++
#include<iostream>
#include<stdio.h>
#include<string>
#include<algorithm>
using namespace std;

int main() {
	string s="";
    cin>>s;
    cout<<s;
    return 0;
}
```

结果如下：



### 2. gets()

C语言中的函数，可以无限读取，以回车结束读取，在C++中运行会产生bug，首字符自动丢弃

```c
#include <iostream>
#include <cstdio>
using namespace std;
int main()
{
   chara[50];
   cin>>a;
   gets(a);
   cout<<a<<endl;
   return0;
}
```



### 3.  getline()

若定义变量为string类型，则要考虑getline()函数。用法如下：

```
#include <iostream>
#include <string>
using namespace std;
int main()
{
   stringa;
   getline(cin,a);
   cout<<a<<endl;
   return0;
}
```

结果：



#### 4.  cin.get() cin.getline()

cin.get()函数可以接收空格，遇回车结束输入。必须是char类型的。

cin.getline()函数可以同cin.get()函数类似，也可接收空格，遇回车结束输入。必须是char类型的。

```c++
#include <iostream>
using namespace std;
int main()
{
   chara[50];
   cin.get(a,50);
   cout<<a<<endl;
   return0;
}
```

```c++
#include <iostream>
using namespace std;
int main()
{
   chara[50];
   cin.getline(a,50);
   cout<<a<<endl;
   return0;
}
```

结果：

