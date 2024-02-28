import{_ as e,o as i,c as n,f as t}from"./app-6c152e92.js";const s={},a=t(`<h2 id="有关浮点数的有趣问题" tabindex="-1"><a class="header-anchor" href="#有关浮点数的有趣问题" aria-hidden="true">#</a> 有关浮点数的有趣问题</h2><p>试着运行以下程序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
using namespace std;
int main() {
	double i;
	for (i = 0; i != 10; i += 0.1) {
		printf(&quot;%.1f\\n&quot;, i);
	}
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会发现结果和你想像的有一点点不同，结果是个无限循环。为什么会这样？实际是因为浮点数运算存在一定的误差，经过多次运算，1变成了0.999999999999999。所以为了解除这种影响一般要四舍五入，即floor(x+0.5) 。这个代码的处理方法，用int型进行循环在除10就行</p>`,4),d=[a];function l(r,c){return i(),n("div",null,d)}const u=e(s,[["render",l],["__file","有关浮点数的有趣问题.html.vue"]]);export{u as default};
