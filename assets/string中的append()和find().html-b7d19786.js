import{_ as i,o as n,c as e,f as t}from"./app-c8122758.js";const s={},d=t(`<p>这个问题是我在刷洛谷的题的时候用到的，这里做一下复习</p><h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h3><p>你需要开发一款文字处理软件。最开始时输入一个字符串（不超过 100 个字符）作为初始文档。可以认为文档开头是第 0 个字符。需要支持以下操作：</p><ul><li><code>1 str</code>：后接插入，在文档后面插入字符串 str，并输出文档的字符串。</li><li><code>2 a b</code>：截取文档部分，只保留文档中从第 a 个字符起 b 个字符，并输出文档的字符串。</li><li><code>3 a str</code>：插入片段，在文档中第 a 个字符前面插入字符串 str，并输出文档的字符串。</li><li><code>4 str</code>：查找子串，查找字符串 str 在文档中最先的位置并输出；如果找不到输出 -1。</li></ul><p>为了简化问题，规定初始的文档和每次操作中的 str 都不含有空格或换行。最多会有 q(q\\le100)<em>q</em>(<em>q</em>≤100) 次操作。</p><h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4
ILove
1 Luogu
2 5 5
3 3 guGugu
4 gu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ILoveLuogu
Luogu
LuoguGugugu
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
#include&lt;stdio.h&gt;
#include&lt;string&gt;
#include&lt;algorithm&gt;
using namespace std;
int main() {
	int n, k = 0, a, b, d, tt;
	string s, tmp, * t;
	cin &gt;&gt; d &gt;&gt; s;
	t = new string[d];
	for (int i = 0; i &lt; d; i++) {
		cin &gt;&gt; n;
		switch (n) {
		case 1:
			tmp = &quot;&quot;;
			cin &gt;&gt; tmp;
			s += tmp;
			t[k++] = s;
			break;
		case 2:
			cin &gt;&gt; a &gt;&gt; b;
			tmp = &quot;&quot;;
			for (int j = 0; j &lt; b; j++) {
				tmp += s[a + j];
			}
			s = tmp;
			t[k++] = tmp;
			break;
		case 3:
			tmp = &quot;&quot;;
			cin &gt;&gt; a &gt;&gt; tmp;
			for (int j = 0; j &lt; a; j++) {
				t[k] += s[j];
			}
			t[k] += tmp;
			t[k].append(s, a , s.size() - a+1);
			s = t[k];
			k++;
			break;
		case 4:
			tmp = &quot;&quot;;
			cin &gt;&gt; tmp;
			tt = ((s.find(tmp) == string::npos) ? -1 : s.find(tmp));
			t[k++] = to_string(tt);
			break;
		}
	}
	int i;
	for ( i = 0; i &lt; k-1; i++) {
		cout &lt;&lt; t[i] &lt;&lt; endl;
	}
	cout &lt;&lt; t[i];
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数说明" tabindex="-1"><a class="header-anchor" href="#函数说明" aria-hidden="true">#</a> 函数说明</h3><ul><li><p>append()</p><p>常见的函数原型如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>basic_string &amp;append( const basic_string &amp;str );
basic_string &amp;append( const char *str );
basic_string &amp;append( const basic_string &amp;str, size_type index, size_type len );
basic_string &amp;append( const char *str, size_type num );
basic_string &amp;append( size_type num, char ch );
basic_string &amp;append( input_iterator start, input_iterator end );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>append函数常用的三个功能：</p><ul><li>直接添加另一个完整的字符串:如str1.append(str2);</li><li>添加另一个字符串的某一段子串:如str1.append(str2, 11, 7); 在字符串的末尾添加str的子串,子串以index索引开始，长度为len</li><li>添加几个相同的字符:如str1.append(5, ‘.’);注意,个数在前字符在后.上面的代码意思为在str1后面添加5个&quot;.&quot;</li></ul></li><li><p>find()</p><p>string中find()返回值是字母或子串在母串中的位置（下标记录），如果没有找到，那么会返回一个特别的标记npos。（返回值是string类型的一个值，可以理解为NULL，使用的时候一般是<code>string::npos</code>）</p><p>以此类推，还有</p><p><code>s.find_first_of(flag)</code> 返回子串出现在母串中的首次出现的位置</p><p><code>s.find_last_of(flag)</code> 返回子串出现在母串中最后一次出现的位置</p><p><code>s.find(&quot;b&quot;,5) </code> 在s 中的下标查找某一给定位置后的子串的位置( 从字符串s 下标5开始，查找字符串b ,返回b)</p></li></ul>`,13),l=[d];function a(r,c){return n(),e("div",null,l)}const u=i(s,[["render",a],["__file","string中的append()和find().html.vue"]]);export{u as default};
