import{_ as n,o as s,c as a,f as p}from"./app-a2c27636.js";const t={},e=p(`<h3 id="有关pandas中的两种数据类型" tabindex="-1"><a class="header-anchor" href="#有关pandas中的两种数据类型" aria-hidden="true">#</a> <strong>有关Pandas中的两种数据类型</strong></h3><h4 id="series" tabindex="-1"><a class="header-anchor" href="#series" aria-hidden="true">#</a> <strong>series</strong></h4><h5 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h5><p>​ 一维数组，只允许存储相同的数据类型。</p><h5 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> <strong>特性</strong></h5><p>​ 可以设定Index，也可以像访问Numpy数组或字典一样来访问Series元素，不可以像字典一样对没有的index进行添加</p><h5 id="示例程序" tabindex="-1"><a class="header-anchor" href="#示例程序" aria-hidden="true">#</a> 示例程序</h5><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
myarray<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
myseries<span class="token operator">=</span>pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span>myarray<span class="token punctuation">,</span>index<span class="token operator">=</span>index<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>myseries<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>myseries<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>myseries<span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>myseries<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dateframe" tabindex="-1"><a class="header-anchor" href="#dateframe" aria-hidden="true">#</a> DateFrame</h4><h5 id="特性-1" tabindex="-1"><a class="header-anchor" href="#特性-1" aria-hidden="true">#</a> 特性</h5><p>​ 可以指定行列标签的二维数组，且可以实现提取列元素</p><h5 id="示意程序" tabindex="-1"><a class="header-anchor" href="#示意程序" aria-hidden="true">#</a> 示意程序</h5><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
myarray<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
r<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
c<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;c1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c4&#39;</span><span class="token punctuation">]</span>
mydataframe<span class="token operator">=</span>pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>data<span class="token operator">=</span>myarray<span class="token punctuation">,</span>index<span class="token operator">=</span>c<span class="token punctuation">,</span>columns<span class="token operator">=</span>r<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mydataframe<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mydataframe<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(i,u){return s(),a("div",null,o)}const l=n(t,[["render",c],["__file","有关Pandas中的两种数据类型.html.vue"]]);export{l as default};
