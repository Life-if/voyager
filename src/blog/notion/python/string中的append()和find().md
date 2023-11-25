这个问题是我在刷洛谷的题的时候用到的，这里做一下复习

### 题目描述

你需要开发一款文字处理软件。最开始时输入一个字符串（不超过 100 个字符）作为初始文档。可以认为文档开头是第 0 个字符。需要支持以下操作：

- `1 str`：后接插入，在文档后面插入字符串 str，并输出文档的字符串。
- `2 a b`：截取文档部分，只保留文档中从第 a 个字符起 b 个字符，并输出文档的字符串。
- `3 a str`：插入片段，在文档中第 a 个字符前面插入字符串 str，并输出文档的字符串。
- `4 str`：查找子串，查找字符串 str 在文档中最先的位置并输出；如果找不到输出 -1。

为了简化问题，规定初始的文档和每次操作中的 str 都不含有空格或换行。最多会有 q(q\le100)*q*(*q*≤100) 次操作。

### 输入

```
4
ILove
1 Luogu
2 5 5
3 3 guGugu
4 gu
```

### 输出

```
ILoveLuogu
Luogu
LuoguGugugu
3
```

### 我的代码

```c++
#include<iostream>
#include<stdio.h>
#include<string>
#include<algorithm>
using namespace std;
int main() {
	int n, k = 0, a, b, d, tt;
	string s, tmp, * t;
	cin >> d >> s;
	t = new string[d];
	for (int i = 0; i < d; i++) {
		cin >> n;
		switch (n) {
		case 1:
			tmp = "";
			cin >> tmp;
			s += tmp;
			t[k++] = s;
			break;
		case 2:
			cin >> a >> b;
			tmp = "";
			for (int j = 0; j < b; j++) {
				tmp += s[a + j];
			}
			s = tmp;
			t[k++] = tmp;
			break;
		case 3:
			tmp = "";
			cin >> a >> tmp;
			for (int j = 0; j < a; j++) {
				t[k] += s[j];
			}
			t[k] += tmp;
			t[k].append(s, a , s.size() - a+1);
			s = t[k];
			k++;
			break;
		case 4:
			tmp = "";
			cin >> tmp;
			tt = ((s.find(tmp) == string::npos) ? -1 : s.find(tmp));
			t[k++] = to_string(tt);
			break;
		}
	}
	int i;
	for ( i = 0; i < k-1; i++) {
		cout << t[i] << endl;
	}
	cout << t[i];
	return 0;
}
```

### 函数说明

+ append()

    常见的函数原型如下：

    ```
    basic_string &append( const basic_string &str );
    basic_string &append( const char *str );
    basic_string &append( const basic_string &str, size_type index, size_type len );
    basic_string &append( const char *str, size_type num );
    basic_string &append( size_type num, char ch );
    basic_string &append( input_iterator start, input_iterator end );
    ```

    append函数常用的三个功能：

    - 直接添加另一个完整的字符串:如str1.append(str2);
    - 添加另一个字符串的某一段子串:如str1.append(str2, 11, 7); 在字符串的末尾添加str的子串,子串以index索引开始，长度为len
    - 添加几个相同的字符:如str1.append(5, ‘.’);注意,个数在前字符在后.上面的代码意思为在str1后面添加5个"."

+ find()

    string中find()返回值是字母或子串在母串中的位置（下标记录），如果没有找到，那么会返回一个特别的标记npos。（返回值是string类型的一个值，可以理解为NULL，使用的时候一般是```string::npos```）

    以此类推，还有

    ```s.find_first_of(flag)```   返回子串出现在母串中的首次出现的位置

    ```s.find_last_of(flag)```  返回子串出现在母串中最后一次出现的位置

    ```s.find("b",5)  	``` 在s 中的下标查找某一给定位置后的子串的位置( 从字符串s 下标5开始，查找字符串b ,返回b)

    

    

    