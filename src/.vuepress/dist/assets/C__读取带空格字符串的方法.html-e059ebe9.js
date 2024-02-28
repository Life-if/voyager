import{_ as n,o as e,c as s,f as i}from"./app-6c152e92.js";const a={},l=i(`<h3 id="_1-cin" tabindex="-1"><a class="header-anchor" href="#_1-cin" aria-hidden="true">#</a> 1. cin</h3><p>cin是C++中最常用的输入语句，当遇到空格或者回车键即停止。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
#include&lt;stdio.h&gt;
#include&lt;string&gt;
#include&lt;algorithm&gt;
using namespace std;

int main() {
	string s=&quot;&quot;;
    cin&gt;&gt;s;
    cout&lt;&lt;s;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><h3 id="_2-gets" tabindex="-1"><a class="header-anchor" href="#_2-gets" aria-hidden="true">#</a> 2. gets()</h3><p>C语言中的函数，可以无限读取，以回车结束读取，在C++中运行会产生bug，首字符自动丢弃</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdio&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   chara<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   cin<span class="token operator">&gt;&gt;</span>a<span class="token punctuation">;</span>
   <span class="token function">gets</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
   cout<span class="token operator">&lt;&lt;</span>a<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
   return0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-getline" tabindex="-1"><a class="header-anchor" href="#_3-getline" aria-hidden="true">#</a> 3. getline()</h3><p>若定义变量为string类型，则要考虑getline()函数。用法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
int main()
{
   stringa;
   getline(cin,a);
   cout&lt;&lt;a&lt;&lt;endl;
   return0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><h4 id="_4-cin-get-cin-getline" tabindex="-1"><a class="header-anchor" href="#_4-cin-get-cin-getline" aria-hidden="true">#</a> 4. cin.get() cin.getline()</h4><p>cin.get()函数可以接收空格，遇回车结束输入。必须是char类型的。</p><p>cin.getline()函数可以同cin.get()函数类似，也可接收空格，遇回车结束输入。必须是char类型的。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;
int main()
{
   chara[50];
   cin.get(a,50);
   cout&lt;&lt;a&lt;&lt;endl;
   return0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;
int main()
{
   chara[50];
   cin.getline(a,50);
   cout&lt;&lt;a&lt;&lt;endl;
   return0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>`,17),t=[l];function c(d,r){return e(),s("div",null,t)}const v=n(a,[["render",c],["__file","C__读取带空格字符串的方法.html.vue"]]);export{v as default};
