import{_ as e,o as t,c as a,f as s}from"./app-a2c27636.js";const r={},n=s(`<h2 id="如何拯救你变红的c盘" tabindex="-1"><a class="header-anchor" href="#如何拯救你变红的c盘" aria-hidden="true">#</a> 如何拯救你变红的C盘</h2><h4 id="方法一-转移文件" tabindex="-1"><a class="header-anchor" href="#方法一-转移文件" aria-hidden="true">#</a> 方法一：转移文件</h4><p>调整你的系统文件位置</p><p>依次打开：计算机-&gt;查看-&gt;选项-&gt;取消隐藏操作系统文件</p><p>你会发现两个非常大的文件</p><p>![img](file:///D://my_program/img/1.png)</p><p><strong>pagefile.sys</strong> :当内存不够用的时候就会用到这个，<strong>不能删除</strong>，但是可以<u>转移到其他地方</u>,方法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>控制面板→系统→高级系统设置→性能→高级→虚拟内存→C盘设置成无分页文件→在其他盘设置“系统管理的大小”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>hiberfile.sys</strong>：这个是使用的电脑的<code>休眠</code>功能（区别于<code>睡眠</code>）的时候会用到，但是只要不是长时间不关机基本上就用不到，所以可以关闭这个功能</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WIN+r-&gt;打开cmd-&gt;输入命令 powercfg.exe -h off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>但是关闭了这个功能，WIN10的快速开机就没法用了，所以谨慎决定</strong></p><p>不过下面这个软件挺好用的。可以可视化C盘所占的资源大小。</p>`,12),d=[n];function i(c,o){return t(),a("div",null,d)}const p=e(r,[["render",i],["__file","如何拯救你变红的C盘.html.vue"]]);export{p as default};
