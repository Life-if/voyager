import{_ as c,r as a,o as i,c as l,a as n,b as s,e,w as u,f as t}from"./app-745f9f7a.js";const r={},d=n("p",null,[s("本节讨论的是"),n("strong",null,"生成器函数"),s("得到的"),n("strong",null,"生成器对象"),s("，以及一个称为"),n("strong",null,"闭包"),s("的编程技术。")],-1),k=n("h2",{id:"_3-3-1-生成器函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-3-1-生成器函数","aria-hidden":"true"},"#"),s(" 3.3.1 生成器函数")],-1),v=n("code",null,"for ",-1),m=n("code",null,"range",-1),b=t(`<h3 id="a-定义生成器函数" tabindex="-1"><a class="header-anchor" href="#a-定义生成器函数" aria-hidden="true">#</a> a. 定义生成器函数</h3><p>生成器函数的定义和函数定义基本相同，其关键形式为：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">yield</span> 表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>作为生成器对象，最重要的是其 yield 的值而不是返回值。此外，完全可以用一个生成器函数创建多个生成器对象，这些对象相互无关，各自迭代。下面是一个例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> read floats<span class="token punctuation">(</span>fname<span class="token punctuation">)</span><span class="token punctuation">:</span>
  infile <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span>
  <span class="token keyword">for</span> line <span class="token keyword">in</span> infile<span class="token punctuation">:</span>
    <span class="token keyword">for</span> s <span class="token keyword">in</span> line<span class="token punctuation">,</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">yield</span> <span class="token builtin">float</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
  infile<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>3.6 生成器yield 语句的扩展形式</mark></p><p><mark>:送出所有的值之后生成器对象会发出一个信号，该怎么处理?这个问题涉及 3.4 节介绍的异常，</mark></p><h3 id="b-生成器函数的语义基础" tabindex="-1"><a class="header-anchor" href="#b-生成器函数的语义基础" aria-hidden="true">#</a> b. 生成器函数的语义基础</h3><p>与函数执行不同的是，生成器对象暂停时还能维护其代码执行状态(下次被唤醒时从哪个位置继续执行)的信息。</p><p>新建的生成器对象将从函数的初始状态开始执行，当<code>for</code>语句(或描述式)向它要求一个值，或对它调用<code>next</code>时，生成器对象就被唤醒执行到下一个<code>yield</code>语句，送出一个值后再次休眠，等待着被再次唤醒，并这样重复下去直至结束。</p><p>可见，生成器对象是一种定义<strong>数据抽象</strong>的机制。数据抽象包括两个部分：一个部分是生成器对象的内部状态是封装的，外部无法直接访问和操作；另一个部分是它们有自己的内部状态和(由生成器函数定义描述的)活动方式。</p><h3 id="c-无穷生成器" tabindex="-1"><a class="header-anchor" href="#c-无穷生成器" aria-hidden="true">#</a> c. 无穷生成器</h3><p>程序中也可能需要能产生出任意多个值的生成器，称为<strong>无穷生成器</strong>。</p><p>Python 允许生成器函数产生“有用的”无穷生成器。可以任意次地将<code>next</code>作用于这种生成器，得到任意多个结果。</p><p>下面是一个例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">circular</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span><span class="token punctuation">:</span>
  i<span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> seq<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    i<span class="token operator">=</span><span class="token punctuation">(</span>i <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token builtin">len</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span>

<span class="token comment"># 参数 seq 可以是元组或者表，也可以是字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-2-闭包" tabindex="-1"><a class="header-anchor" href="#_3-3-2-闭包" aria-hidden="true">#</a> 3.3.2 闭包</h2>`,17),h={href:"https://zhuanlan.zhihu.com/p/453787908",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>出于种种原因，我们有时候需要在函数外部得到函数内的局部变量。但是，由于 Python 中作用域的搜索顺序（&quot;链式作用域&quot;结构（chain scope）：子对象会一级一级地向上寻找所有父对象的变量），这一点通常是无法实现的。</p><p>但是有一种方法可以实现该需求，那就是在函数的内部，再定义一个函数。从一个函数返回局部函数的技术称为<strong>闭包</strong>技术。（有些地方也叫<strong>工厂函数（factory function）</strong>）下面是一个例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">read_floats</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    nlist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    infile <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span>
    crt<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">def</span> <span class="token function">next_float</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> nlist<span class="token punctuation">,</span>crt
        <span class="token keyword">if</span> crt<span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nlist<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 一行已经用完</span>
            line <span class="token operator">=</span> infile<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> line<span class="token punctuation">:</span>
                <span class="token comment">#line是空串，整个文件已经处理完</span>
                infile<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">None</span>
            nlist <span class="token operator">=</span>line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
            crt<span class="token operator">=</span><span class="token number">0</span>
        crt <span class="token operator">+=</span><span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token builtin">float</span><span class="token punctuation">(</span>nlist<span class="token punctuation">[</span>crt <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># 返回局部定义的函数对象</span>
    <span class="token keyword">return</span> next_float
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其调用如下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>next_number <span class="token operator">=</span> read_floats<span class="token punctuation">(</span><span class="token string">&quot;datafile.dat&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>next_number<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>维基百科的定义中已经提到的它的两个用处：① 可以读取函数内部的变量，②让这些变量的值始终保持在内存中。</p><h3 id="a-使用注意点" tabindex="-1"><a class="header-anchor" href="#a-使用注意点" aria-hidden="true">#</a> a. 使用注意点</h3><ol><li><p><strong>内存消耗</strong><br> 由于闭包会使得函数中的变量都被保存在内存中，会增加内存消耗，所以不能滥用闭包，否则会造成程序的性能问题，<strong>可能导致内存泄露</strong>。解决方法是，<strong>在退出函数之前，将不使用的局部变量全部删除。</strong></p></li><li><p>闭包无法改变外部函数局部变量指向的内存地址<br> 这点很好理解，即局部变量改变不能影响全局变量，除非加<code>nonlocal</code>。</p></li><li><p>💥❗❗<strong>返回闭包时，返回函数不要引用任何循环变量，或者后续在外部发生变化的变量</strong><br> 看一个例子：</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    fs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> i<span class="token operator">*</span>i
        fs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">return</span> fs

f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3 <span class="token operator">=</span> count<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 期望 1 4 9 实际 9 9 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里出现问题是因为：在向列表中添加<code>func</code>的时候，<code>i</code>的值没有固定到<code>f</code>的实例对象中，而仅是将<strong>计算流程</strong>固定到了实例对象中。（换句话说，如果里面写的是<code>a=i*i</code>来存储一样没用）。等到了调用<code>f1()</code>、<code>f2()</code>、<code>f3()</code>的时候才去取<code>i</code>的值，这时候循环已经结束，<code>i</code>的值是3，所以结果都是9。</p><h3 id="b-底层理解" tabindex="-1"><a class="header-anchor" href="#b-底层理解" aria-hidden="true">#</a> b. 底层理解</h3><p>我们这里分别分析上面给出的两个例子。</p><p>对于文件循环读数据的那个例子，有</p>`,13);function y(g,_){const p=a("RouterLink"),o=a("ExternalLinkIcon");return i(),l("div",null,[d,k,n("p",null,[s("迭代器是一种非常有用的计算结构，也是 Python 语言里的一个核心概念，指一类具有某些特定功能的对象。"),v,s("循环语句依赖于迭代器的概念，一些标准的语言机制可以用于产生选代器，如"),m,s("函数生成迭代器对象。迭代器部分信息可详见："),e(p,{to:"/blog/notion/python/python_book/Chapter%2002/01.html"},{default:u(()=>[s(" 📖2.1.2 可迭代对象部分")]),_:1})]),b,n("blockquote",null,[n("p",null,[s("该部分参考了大佬 @风影忍着 的链接："),n("a",h,[s("https://zhuanlan.zhihu.com/p/453787908"),e(o)])])]),f])}const x=c(r,[["render",y],["__file","03.html.vue"]]);export{x as default};