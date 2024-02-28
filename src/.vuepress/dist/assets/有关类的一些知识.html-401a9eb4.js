import{_ as n,o as s,c as a,f as t}from"./app-6c152e92.js";const e={},p=t(`<h3 id="有关类的一些知识" tabindex="-1"><a class="header-anchor" href="#有关类的一些知识" aria-hidden="true">#</a> 有关类的一些知识</h3><p>因为python 的类的情况比起C++简单了很多，这里就只说一下有些需要注意的事情</p><ul><li><p><strong>私有与公有成员</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>__init__  或者__xxx__  是系统特殊成员（前后两条下划线）
_xxx 是保护成员（前面一条下划线）
__xxx 是私有成员，不能通过实例来访问（前面两条下划线）
调用私有成员是要使用装饰器 @<span class="token builtin">property</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>装饰器</strong></p><ul><li><p>类方法 ( @classmethod )</p><p>Python中允许声明属于类本身的方法，即类方法。<em><strong>不对特定实例进行操作，不能访问对象的实例变量</strong></em>，第一个参数必须是类对象本身，<em><strong>通常为cls</strong></em>，但在调用时不需要也<em><strong>不用给该函数传值</strong></em></p></li><li><p>静态方法 （@staticmethod)</p><p>python 允许声明与类的对象实例无关的方法，称为静态方法，静态方法不对特定实例进行操作***，在静态方法中访问对象实例会导致错误****。<strong>可通过类名访问也可通过对象的实例化</strong>*</p></li></ul></li><li><p><strong>继承和多态</strong></p><p>在继承中，子类要在括号内声明父类，父类的定义在子类其前面。在初始化过程中，子类不会自动调用父类的<strong>init</strong></p></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">:</span>
    price <span class="token operator">=</span> <span class="token number">30000</span>  <span class="token comment"># 类变量</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__name <span class="token operator">=</span> name  <span class="token comment"># 成员私有变量</span>
        self<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">def</span> <span class="token function">setcolor</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>color <span class="token operator">=</span> color

    <span class="token comment"># 类方法</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">getPrice</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">.</span>price<span class="token punctuation">)</span>

    <span class="token comment"># 静态方法</span>
    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">setPrice</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Car<span class="token punctuation">.</span>price <span class="token operator">=</span> price

    <span class="token comment"># 私有</span>
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__name


<span class="token keyword">class</span> <span class="token class-name">ECar</span><span class="token punctuation">(</span>Car<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>battery_size <span class="token operator">=</span> <span class="token number">300</span>

    <span class="token keyword">def</span> <span class="token function">getEcar</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是电动车&#39;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;电容&#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>battery_size<span class="token punctuation">)</span><span class="token punctuation">)</span>


a<span class="token operator">=</span>Car<span class="token punctuation">(</span><span class="token string">&#39;宝马&#39;</span><span class="token punctuation">)</span>
b<span class="token operator">=</span>ECar<span class="token punctuation">(</span><span class="token string">&#39;奔驰&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 类方法</span>
a<span class="token punctuation">.</span>getPrice<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 静态方法</span>
b<span class="token punctuation">.</span>setPrice<span class="token punctuation">(</span><span class="token string">&#39;10000&#39;</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>getPrice<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>getPrice<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 私有</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
b<span class="token punctuation">.</span>getEcar<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","有关类的一些知识.html.vue"]]);export{r as default};
