import{_ as e,o as s,c as t,f as n}from"./app-745f9f7a.js";const a={},o=n(`<h2 id="_2-2-1-可变类型与不可变类型" tabindex="-1"><a class="header-anchor" href="#_2-2-1-可变类型与不可变类型" aria-hidden="true">#</a> 2.2.1 可变类型与不可变类型</h2><p><strong>可变（mutable）</strong> 和 <strong>不可变（immutable）</strong> 是对于所有数据类型都有意义的一种性质。</p><p>Python 标准数值类型（<code>int</code>、<code>float</code>、<code>complex</code>）和逻辑类型都是不可变类型，已有对象不能修改。组合类型中，<code>tuple</code> 和 <code>str</code> 对象都是不可变类型，<code>list</code> 和 <code>dict</code>以及 <code>set</code> 都是可变类型。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>dict</code> 的 <code>key</code> 必须是不可变对象。相对于 <code>list</code>，<code>dict</code> 有以下几个特点：</p><ul><li>查找和插入速度快，不会随着 <code>key</code> 的增加而增加。</li><li>需要大量内存，内存浪费多。</li></ul></div><h2 id="_2-2-2-序列类型的操作" tabindex="-1"><a class="header-anchor" href="#_2-2-2-序列类型的操作" aria-hidden="true">#</a> 2.2.2 序列类型的操作</h2><p><strong>序列</strong>不是 Python 中的类型，而是指涵盖共同性质的一些类型，即：可以被下标访问，顺序排列多个元素。</p><h3 id="a-标准函数" tabindex="-1"><a class="header-anchor" href="#a-标准函数" aria-hidden="true">#</a> a. 标准函数</h3><p>可用于序列（可迭代对象，iterable）或迭代器（iterator）的标准函数有（常用）：</p><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td><code>all(iterable)</code></td><td>当 <code>iterable</code> 中所有元素都是真时返回 <code>True</code>，否则返回 <code>False</code></td></tr><tr><td><code>any(iterable)</code></td><td>当 <code>iterable</code> 中有元素为真时返回<code>True</code>，否则返回 <code>False</code></td></tr><tr><td><code>enumerate(iterable,start=0)</code></td><td>返回一个迭代器(与 <code>map</code> 类似)，它枚举出一些二元组，每个组的第一个元素是序号，第二个元素是 <code>iterable</code> 的对应元素，默序号从 <code>0</code> 开始，可用 <code>start</code> 指定起始序号</td></tr><tr><td><code>len(iterable)</code></td><td>求出 <code>iterable</code> 的长度</td></tr><tr><td><code>max(iterable[,key,default])</code> <br><code>max(argl,arg2,*args[, key])</code></td><td>求 <code>iterable</code> 中(或两个或更多实参 <code>args</code> 中)的最大值。可通过 <code>key</code> 提供一个单参数函数，要求将该函数作用于 <code>iterable</code> 的元素，此 <code>max</code> 返回函数值最大的元素。还可为 <code>iterable</code> 空的情况提供一个 <code>default</code> 值。如果序列中存在多个最大值，函数返回第一个最大值</td></tr><tr><td><code>min(iterable [,key,default])</code><br><code>min(argl,arg2,*argsl, key])</code></td><td>与 <code>max</code> 类似，但是求最小值而不是最大值</td></tr><tr><td><code>next (iterator, default])</code></td><td>返回 <mark>iterator</mark> 的下一元素。已无元素但调用提供了 <code>default</code> 就返回该值，否则报 <code>StopIteration</code></td></tr><tr><td><code>reversed(seq)</code></td><td>得到一个迭代器，按逆序给出 <code>seq</code> 的元素。这里的 <code>seq</code> 必须是序列</td></tr><tr><td><code>sorted (iterablel[, key[, reverse]])</code></td><td>返回对 <code>iterable</code> 中元素排序的表。可以通过 <code>key</code> 提供一个单参数函数，要求按该函数作用于元素的值排序。默认为按递增排序，可以用 <code>reverse=True</code> 要求按递减排序</td></tr><tr><td><code>sum(iterable[,start])</code></td><td>按顺序对 <code>iterable</code> 的元素求和。默认初值为<code>0</code>，可以通过 <code>start</code> 提供初值</td></tr><tr><td><code>zip (*iterables)</code></td><td>以任意多个可迭代对象为参数，返回一个迭代器。该迭代器枚举出些元组，其元素是各参数相应位置的那组元素。用完最短可迭代对象时迭代器结束。只有一个可迭代对象时迭代器给出单元素元组。<code>zip()</code>返回空迭代器</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>标准函数 <code>range(m,n,d)</code> 可以看作一种元素值为整数的不变序列。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>list</code> 类型只是<strong>可迭代对象</strong>，不是<strong>迭代器</strong>。</p><p>生成器表达式和 <code>tuple</code> 并不是一类。前者属于 <code>&lt;class &#39;generator&#39;&gt;</code>。</p><p>注意这里的函数是「生成」还是「修改」</p></div><h3 id="b-用于所有序列的操作" tabindex="-1"><a class="header-anchor" href="#b-用于所有序列的操作" aria-hidden="true">#</a> b. 用于所有序列的操作</h3><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>x in s</code></td><td>序列 s 有元素等于（<mark>特指 == 比较操作</mark>）对象 x 则结果为<code>True</code>，否则为 <code>False</code></td></tr><tr><td><code>x not in s</code></td><td>序列 s 有元素等于（<mark>特指 == 比较操作</mark>）对象 x 则结果为<code>False</code>，否则为<code>True</code></td></tr><tr><td><code>s + t</code></td><td>序列 s 和序列 t 的顺序拼接序列。<mark>二者类型要相同</mark></td></tr><tr><td><code>s * n</code>或<code>n * s</code></td><td>序列 s 的 n 个拷贝的顺序拼接。（若 n 小于 0 都当作 0，得到空序列）</td></tr><tr><td><code>s.index(x[,i[,j]])</code></td><td>对象 x 在序列 s 里首次出现的下标。i 是指开始检索的位置，j 是指结束检索的位置。（<mark>检索范围为左闭右开 [i,j)，i 和 j 不会检查是否越界</mark>）</td></tr><tr><td><code>s.count(x)</code></td><td>对象 x 在序列 s 里出现的次数。</td></tr></tbody></table><h3 id="c-用于可变序列的操作" tabindex="-1"><a class="header-anchor" href="#c-用于可变序列的操作" aria-hidden="true">#</a> c. 用于可变序列的操作</h3><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>s[i:j]=t</code></td><td>用可迭代对象 t 的内容替代 s 从 i 到 j 的切片。<mark>对 t 和 s 的类型不做一致要求，t 内元素数量不做要求。越界未必报错</mark></td></tr><tr><td><code>s[i:j:k]=t</code></td><td>作用与 <code>s[i:j]=t</code> 类似，<mark>做这个操作时要求t的元素个数正好合适</mark>操作中的i、j、k 可省略，表示用默认值。<code>k=1</code>要求等同于<code>s[i:j]=t</code>，即不需要数量一致。</td></tr><tr><td><code>del s[i]</code><br><code>del s[i:j]</code><br><code>del s[i:j:k]</code></td><td>从表中删除元素。越界会报错。</td></tr><tr><td>s.append(x)</td><td>把 x 加在序列最后(同 <code>s[len(s):len(s)]=[x]</code>)</td></tr><tr><td><code>s.clear()</code></td><td>清除 s 的所有元素 (同 <code>dels[:]</code> )</td></tr><tr><td><code>s.copy()</code></td><td>创建一个 s 的拷贝(同 <code>s[:]</code>)</td></tr><tr><td><code>s.extend(t)</code></td><td>用 t 的内容扩展 s (同 <code>s[len(s) : en(s)]= t</code>)，同样对 t 的类型没有一致性要求</td></tr><tr><td><code>s.insert(i，x)</code></td><td>把 x 插入 s 里的位置i(同 <code>s[i:i]=[x]</code> )</td></tr><tr><td><code>s.pop ()</code> , <code>s.pop (i)</code></td><td>取 s 里下标 i (默认为最后)的元素并将其从 s 删除</td></tr><tr><td><code>s.remove(x)</code></td><td>删除 s 里第一个满足 s[i]==x 的元素，找不到元素报 <code>ValueError</code> 错;</td></tr><tr><td><code>s.reverse()</code></td><td>反转 s 里的所有元素(前后元素的位置倒置)</td></tr></tbody></table><p>其中有一些操作的特殊的可能性，用代码的形式展示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">v</span>
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d
<span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;3&#39;</span>, <span class="token string">&#39;4&#39;</span>, <span class="token string">&#39;5&#39;</span>, <span class="token string">&#39;6&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> v<span class="token punctuation">[</span><span class="token number">3</span>:1<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> v<span class="token punctuation">[</span><span class="token number">3</span>:1<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span><span class="token number">1</span>:5<span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">v</span>
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;3&#39;</span>, <span class="token string">&#39;4&#39;</span>, <span class="token string">&#39;5&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> v<span class="token punctuation">[</span><span class="token number">1</span>:2<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;s&#39;</span><span class="token builtin class-name">:</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">v</span>
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token string">&#39;s&#39;</span>, <span class="token number">3</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;3&#39;</span>, <span class="token string">&#39;4&#39;</span>, <span class="token string">&#39;5&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> v<span class="token punctuation">[</span><span class="token number">3</span>:1000<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1.2</span>,33<span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">v</span>
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token string">&#39;s&#39;</span>, <span class="token number">3</span>, <span class="token number">1.2</span>, <span class="token number">33</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="d-表操作" tabindex="-1"><a class="header-anchor" href="#d-表操作" aria-hidden="true">#</a> d. 表操作</h3><p>对表的操作除了上面的操作还有一种排序的方法：<code>listxxx.sort([key])</code>。默认按照从小到大排序（使用<code>&lt;</code>比较方法）。若需要让其按照从大到小排序（使用<code>not &lt;</code>比较方法），设置为 <code>listxxx.sort(reverse=True)</code>。</p><p>对比标准函数，其有如下区别：</p><ul><li><p>标准函数 <code>sort()</code> 可用于任意可迭代对象，结果是表，其中包含参数的所有元素并排序。因此 <code>sorted(list1)</code> 得到表 <code>list1</code> 的排序拷贝(<strong>是一个新表</strong>)，<code>list1</code>不变。<code>list1.sort()</code>则<strong>直接调整</strong> <code>list1</code> 里的元素，使之按顺序重排。</p></li><li><p>标准序列反转函数 <code>reversed</code> 可用于各种序列对象，<strong>返回一个迭代器(不是序列)</strong>，可以用在 <code>for</code> 头部等处。<code>reversed(list1)</code>得到表 <code>list1</code> 的反向选代器，<code>list1</code>不变，用在 <code>for</code> 语句头部时将从后向前枚举 list1 的元素。而 <code>listl.reverse()</code><strong>直接调整</strong> <code>list1</code> 里元素的位置，实现表中元素的反转。</p></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>列表<code>list1</code>深拷贝的三种方式：</strong></p><ol><li><code>list1[:]</code>（同 <code>copy</code>）</li><li><code>list1.copy()</code>（这里注意还有拷贝深度的问题，即 <code>copy()</code> 子对象不会深拷贝）</li><li><code>list1.deepcopy()</code></li></ol></div><h2 id="_2-2-2-描述式" tabindex="-1"><a class="header-anchor" href="#_2-2-2-描述式" aria-hidden="true">#</a> 2.2.2 描述式</h2><p><strong>描述式</strong> 指的是用于描述元素生成有规律的式子。比如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果将这个式子套在方括号<code>[]</code>里，就可以被称为<strong>表描述式</strong>。如果套在圆括号<code>()</code>里是<strong>生成器表达式</strong>，得到的是生成器对象。</p><p>对于描述式的作用域，个人理解为可以将其看作一个函数来分析即可。</p><h2 id="_2-2-3-bytes-类型和-bytearray-类型" tabindex="-1"><a class="header-anchor" href="#_2-2-3-bytes-类型和-bytearray-类型" aria-hidden="true">#</a> 2.2.3 <code>bytes</code> 类型和 <code>bytearray</code> 类型</h2><p><code>bytes</code> 是 Python 标准类型，称为（<strong>字节串</strong>）。该类型是「不可变类型」。<code>bytes</code> 字面量与 <code>str</code> 字面量的形式类似，但要加前缀 <code>b</code>或 <code>B</code>。</p><p>在字节串字面量里可以出现英文大小写字母、数字、空格和一些常用符号，编码值不超过 127 。一些控制字符和编码从 128 到 255 的字符需要用换意序列表示。比如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bl <span class="token operator">=</span> <span class="token string">b&#39;this IS a bytes&#39;</span>
b2 <span class="token operator">=</span> <span class="token string">B&quot;Bejing is the capital of China.\\n&quot;</span>
b3 <span class="token operator">=</span> <span class="token triple-quoted-string string">b&quot;&quot;&quot;!You can write multi-line bytes too,
using this form.
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong><code>bytes</code> 和 <code>str</code> 区别</strong>： <code>str</code> 的元素是一般 Unicode 字符，而 <code>bytes</code> 的元素只能是 0 到 255。</p></div><p>另一个标准类型是字节数组类型 <code>bytearray</code>。它是「可变类型」，元素与 <code>bytes</code> 一样。<strong><code>bytearray</code> 对象没有字面量描述形式，只能通过类型名创建</strong>。例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bl <span class="token operator">=</span> <span class="token string">b&#39;this IS a bytes&#39;</span>

ba2 <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span>bl<span class="token punctuation">)</span>  <span class="token comment">#基于字节串创建字节数组</span>
<span class="token comment"># bytearray(b&#39;this IS a bytes&#39;)</span>

ba3 <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># 创建包含 10个字节的字节数组，填充零字符</span>
<span class="token comment"># bytearray(b&#39;x001x00\\x00\\x00\\x001x00\\x00\\x00\\x00\\x00&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>bytes</code> 和 <code>bytearray</code> 都支持的不变操作与 <code>str</code> 类似，包括各种切片、检查等。<code>bytes</code> 还支持各种不变序列操作: <code>bytearray</code> 还支持可变序列类型的操作，可以做元素赋值、子串替换等。注意，<code>bytes</code> 和 <code>bytearray</code> 的元素是小整数(取值 0 到 255)，用字符或超范围的整数给元素赋值时都将报错。</p>`,35),d=[o];function c(r,p){return s(),t("div",null,d)}const l=e(a,[["render",c],["__file","02.html.vue"]]);export{l as default};