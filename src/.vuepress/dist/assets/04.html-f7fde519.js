import{_ as t,o as d,c as e,f as o}from"./app-6c152e92.js";const r={},c=o('<p>文件读取是 Python 文件中一个基础且常见的操作，这里不过多赘述。</p><h2 id="_2-4-1-文件打开模式描述串" tabindex="-1"><a class="header-anchor" href="#_2-4-1-文件打开模式描述串" aria-hidden="true">#</a> 2.4.1 文件打开模式描述串</h2><p>常见文件打开模式描述串如下所示：</p><table><thead><tr><th>模式</th><th>说明</th></tr></thead><tbody><tr><td>r</td><td>按读模式打开，是默认方式，可以不写</td></tr><tr><td>w</td><td>按写模式打开，文件不存在时创建新文件，存在时清除已有内容</td></tr><tr><td>x</td><td>排他性地创建文件，如果所指文件已存在报 osError 错误</td></tr><tr><td>a</td><td>按附加方式打开，在已有内容之后写。文件不存在时创建新文件</td></tr><tr><td>+</td><td>更新文件，不单独出现。r+表示保留原文件内容，从头开始读写:w+表示清除E有内容:x+与w+类似，但排他性地创建文件:a+与 w+类似，但不清除已有内容从最后开始读写</td></tr><tr><td>rb</td><td>按二进制读模式打开，是默认方式，可以不写</td></tr><tr><td>wb</td><td>按二进制写模式打开，文件不存在时创建新文件，存在时清除已有内容</td></tr><tr><td>ab</td><td>按二进制附加方式打开，在已有内容之后写。文件不存在时创建新文件</td></tr></tbody></table><h2 id="_2-4-2-文件输入输出相关函数" tabindex="-1"><a class="header-anchor" href="#_2-4-2-文件输入输出相关函数" aria-hidden="true">#</a> 2.4.2 文件输入输出相关函数</h2><p>常见文件输入输出函数如下：</p><table><thead><tr><th>函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td>f.read(n)</td><td style="text-align:left;">要求从文件读入全部字符，若 <code>n</code> 有赋值则读取前 <code>n</code> 个字符，字符不足时读完剩下内容</td></tr><tr><td>f.readline(n)</td><td style="text-align:left;">要求从文件的光标处读入一行字符，若 <code>n</code> 有赋值则读取前 <code>n</code> 个字符，字符不足时读完剩下内容</td></tr><tr><td>f.tell()</td><td style="text-align:left;">返回一个数值，表示文件的当时操作位置。</td></tr><tr><td>f.seek(offset,whence)</td><td style="text-align:left;">设置当前位置。<br><br>第二个参数默认时，<code>offset</code> 可以是 0 或 <code>SEEK SET</code> (两者效果相同)，或以前由 <code>tell()</code> 得到的值，把当前位置设到以文件头为基点的 <code>offset</code> 处(其他值的效果无定义)。<br><br>第二个参数可以是：<br>1. <code>SEEK CUR</code>或 <code>1</code>，这时 <code>offset</code> 只能是 <code>0</code>，相当于空操作;<br>2. <code>SEEK END</code> 或 <code>2</code>，这时 <code>offset</code> 只能是 <code>0</code>，要求把操作位置设到文件尾。</td></tr></tbody></table><p>Python 把文本读文件对象也看作可迭代对象，因此该过程也可以看作一种生成式读取方法。</p><h2 id="_2-4-3-常见-os-操作" tabindex="-1"><a class="header-anchor" href="#_2-4-3-常见-os-操作" aria-hidden="true">#</a> 2.4.3 常见 os 操作</h2><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>mkdir(path)</td><td>创建由 path 描述的目录。path 是简单名时在当前目录下创建目录:对一般文件路径字符串，要求指定位置已存在。</td></tr><tr><td>mkdirs(path)</td><td>创建任意深层的一系列目录，缺少中间目录时函数将依次创建。</td></tr><tr><td>chdir(path)</td><td>将当前目录转到 path 指定的目录。</td></tr><tr><td>chdir(path)</td><td>将当前目录转到 path 指定的目录。</td></tr><tr><td>listdir(path)</td><td>返回一个表，其中包含 path 说明的目录里的所有文件和目录名，用一组字符串表示。默认路径.表示当前目录。</td></tr><tr><td>remove(path)</td><td>删除 path 指定的文件。</td></tr><tr><td>rmdir(path)</td><td>删除 path 指定的目录。</td></tr><tr><td>scandir(path)</td><td>用于遍历一个目录下的所有目录和文件，该函数返回一个选代器，通过它得到的每个项是一个文件或目录。</td></tr><tr><td>path.isfile(file_path)</td><td>检查当前路径目标是否是文件</td></tr></tbody></table><h2 id="_2-4-4-文件的缓存与冲刷" tabindex="-1"><a class="header-anchor" href="#_2-4-4-文件的缓存与冲刷" aria-hidden="true">#</a> 2.4.4 文件的缓存与冲刷</h2><p>文本输入输出默认采用<strong>缓冲方式</strong>，open 打开文件时建立一个<strong>缓冲存储区</strong>（缓存）作为程序和文件之间的中介。输入操作从缓冲区读取，缓冲区内容用完时自动从文件搬一批数据到缓冲区;程序产生的输出存入缓冲区，缓冲区装满时自动写入文件。</p><p>缓冲式输入输出可以缓解内外存速度和使用方式的差异，提高程序性能。</p><p>调用<code>close</code>关闭文件时，解释器将把当时还在缓冲区里的数据写入文件。如果程序正常结束，解释器也会关闭当时仍处于打开状态的所有文件，保证输出都实际写入文件。如果程序非正常结束，当时未关闭的文件的内容完整性就没有保证了。这里也提供了<strong>冲刷</strong>操作，调用<code>f.flush()</code>把当时<code>f</code>的缓冲区里的数据写入文件。打开文件时可以通过<code>open</code>的参数指定缓冲方式，简单情况下采用默认的常规缓冲方式。</p><blockquote><p>Python 文档标准函数 open 的使用形式是:<br><code>open(file，mode=&#39;r&#39;, buffering=-1, encoding=None, errors=None,newline=None, closefd=True, opener=None)</code><br> 除文件名参数<code>file</code>外，其他参数都有默认值：<code>buffering</code>要求一个整数指定缓冲策略，<code>-1</code>表示采用默认策略；<code>encoding</code>说明编码规则，只用于正文模式；<code>errors</code>说明编出错时的处理，比较复杂，可用<code>&quot;ignore&quot;</code>要求忽略错误，但在未能正确解码时可能得到乱码；<code>newline</code>说明把什么字符看作换行，<code>None</code>表示交由 Python 解释器处，通常都能做好。最后两个参数涉及一些细节，请查看标准库手册。</p></blockquote><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>按二进制模式打开文件，就应按二进制文件使用。后面会介绍的实现持久性的<code>pockle</code>包在工作中使用二进制文件，有关操作由其函数处理。自己操作二进制文件的技术细节较多。</p><p>常规需要大都可以借助<code>pickle</code>等程序包完成。</p></div>',16),a=[c];function n(h,i){return d(),e("div",null,a)}const s=t(r,[["render",n],["__file","04.html.vue"]]);export{s as default};