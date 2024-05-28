import{_ as l,r as a,o as i,c as o,a as t,b as e,e as r,f as n}from"./app-c8122758.js";const d={},c=t("h2",{id:"_1-2-1-python-命名规范",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-2-1-python-命名规范","aria-hidden":"true"},"#"),e(" 1.2.1 Python 命名规范")],-1),p=t("p",null,[e("一般来说，Python支持的变量名是一组字母（或者英文下划线 "),t("code",null,"_"),e("）开头的字符串。")],-1),u=t("p",null,[e("但是一般来说，为了有一个良好的命名习惯，一般需要有一定的规律。这里按照 "),t("strong",null,"《谷歌开源风格指南》"),e(" 给出一些经常使用的总结性规范建议。")],-1),g={class:"hint-container info"},h=t("p",{class:"hint-container-title"},"相关信息",-1),y={href:"https://zh-google-styleguide.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},x=n('<h3 id="a-导入" tabindex="-1"><a class="header-anchor" href="#a-导入" aria-hidden="true">#</a> a. 导入</h3><ul><li><p>在 <code>import</code> 语句的时候，只导入包和模块，不要导入函数和类</p></li><li><p>导入包的时候禁止使用相对包名</p></li><li><p>对这些规定例外的包是：</p><ol><li><p>用于静态分析和检查的模块:</p><ol><li><code>typing</code> 模块</li><li><code>collections.abc</code> 模块</li><li><code>typing_extensions</code> 模块</li></ol></li><li><p><code>six.moves</code> 模块中的重定向</p></li></ol></li></ul><h3 id="b-异常检测" tabindex="-1"><a class="header-anchor" href="#b-异常检测" aria-hidden="true">#</a> b. 异常检测</h3><ul><li><strong>优先使用合适的内置异常类。</strong> 比如, 用 ValueError 表示前置条件错误 (例如给必须为正数的参数传入了负值). 不要使用 assert 语句来验证公开API的参数值. 应该用 assert 来保证内部正确性, 不应该用 assert 来纠正参数或表示意外情况. 若要用异常来表示意外情况, 应该用 raise. 例如:</li></ul><p>正确</p>',5),k=t("div",{class:"language-python line-numbers-mode","data-ext":"py"},[t("pre",{python:"",class:"language-python"},[t("code",null,[t("span",{class:"token keyword"},"def"),e(),t("span",{class:"token function"},"connect_to_next_port"),t("span",{class:"token punctuation"},"("),e("self"),t("span",{class:"token punctuation"},","),e(" minimum"),t("span",{class:"token punctuation"},":"),e(),t("span",{class:"token builtin"},"int"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"-"),t("span",{class:"token operator"},">"),e(),t("span",{class:"token builtin"},"int"),t("span",{class:"token punctuation"},":"),e(`
    `),t("span",{class:"token triple-quoted-string string"},`"""连接到下一个可用的端口.

    Args:
    minimum: 一个大于等于 1024 的端口号.

    Returns:
    新的最小端口.

    Raises:
    ConnectionError: 没有可用的端口.
    """`),e(`
    `),t("span",{class:"token keyword"},"if"),e(" minimum "),t("span",{class:"token operator"},"<"),e(),t("span",{class:"token number"},"1024"),t("span",{class:"token punctuation"},":"),e(`
        `),t("span",{class:"token comment"},"# 注意这里抛出 ValueError 的情况没有在文档里说明，因为 API 的"),e(`
        `),t("span",{class:"token comment"},"# 错误用法应该是未定义行为."),e(`
        `),t("span",{class:"token keyword"},"raise"),e(" ValueError"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string-interpolation"},[t("span",{class:"token string"},"f'最小端口号至少为 1024，不能是 "),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),e("minimum"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},".'")]),t("span",{class:"token punctuation"},")"),e(`
    port `),t("span",{class:"token operator"},"="),e(" self"),t("span",{class:"token punctuation"},"."),e("_find_next_open_port"),t("span",{class:"token punctuation"},"("),e("minimum"),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token keyword"},"if"),e(" port "),t("span",{class:"token keyword"},"is"),e(),t("span",{class:"token boolean"},"None"),t("span",{class:"token punctuation"},":"),e(`
        `),t("span",{class:"token keyword"},"raise"),e(" ConnectionError"),t("span",{class:"token punctuation"},"("),e(`
            `),t("span",{class:"token string-interpolation"},[t("span",{class:"token string"},"f'未能通过 "),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),e("minimum"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"}," 或更高的端口号连接到服务.'")]),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token keyword"},"assert"),e(" port "),t("span",{class:"token operator"},">="),e(" minimum"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token punctuation"},"("),e(`
        `),t("span",{class:"token string-interpolation"},[t("span",{class:"token string"},"f'意外的端口号 "),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),e("port"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},", 端口号不应小于 "),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),e("minimum"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},".'")]),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token keyword"},"return"),e(` port
`)])]),t("div",{class:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{class:"highlight-line"}," "),t("br"),t("br"),t("div",{class:"highlight-line"}," "),t("div",{class:"highlight-line"}," "),t("div",{class:"highlight-line"}," "),t("div",{class:"highlight-line"}," "),t("br")]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),_=t("p",null,"错误",-1),b=t("div",{class:"language-python line-numbers-mode","data-ext":"py"},[t("pre",{python:"",class:"language-python"},[t("code",null,[t("span",{class:"token keyword"},"def"),e(),t("span",{class:"token function"},"connect_to_next_port"),t("span",{class:"token punctuation"},"("),e("self"),t("span",{class:"token punctuation"},","),e(" minimum"),t("span",{class:"token punctuation"},":"),e(),t("span",{class:"token builtin"},"int"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"-"),t("span",{class:"token operator"},">"),e(),t("span",{class:"token builtin"},"int"),t("span",{class:"token punctuation"},":"),e(`
    `),t("span",{class:"token triple-quoted-string string"},`"""连接到下一个可用的端口.

    Args:
    minimum: 一个大于等于 1024 的端口号.

    Returns:
    新的最小端口.
    """`),e(`
    `),t("span",{class:"token keyword"},"assert"),e(" minimum "),t("span",{class:"token operator"},">="),e(),t("span",{class:"token number"},"1024"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},"'最小端口号至少为 1024.'"),e(`
    port `),t("span",{class:"token operator"},"="),e(" self"),t("span",{class:"token punctuation"},"."),e("_find_next_open_port"),t("span",{class:"token punctuation"},"("),e("minimum"),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token keyword"},"assert"),e(" port "),t("span",{class:"token keyword"},"is"),e(),t("span",{class:"token keyword"},"not"),e(),t("span",{class:"token boolean"},"None"),e(`
    `),t("span",{class:"token keyword"},"return"),e(` port
`)])]),t("div",{class:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{class:"highlight-line"}," "),t("br"),t("div",{class:"highlight-line"}," "),t("br")]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),m=n('<ul><li><strong>最小化 try/except 代码块中的代码量</strong>。 try 的范围越大, 就越容易把你没想到的那些能抛出异常的代码囊括在内. 这样的话, try/except 代码块就掩盖了真正的错误。</li><li><strong>用 <code>finally</code> 表示无论异常与否都应执行的代码</strong>。 这种写法常用于清理资源, 例如关闭文件。</li></ul><h3 id="c-变量及函数命名" tabindex="-1"><a class="header-anchor" href="#c-变量及函数命名" aria-hidden="true">#</a> c. 变量及函数命名</h3><ul><li><p><strong>设计的所有模块必须是可导入的。</strong> 比如，文件的主功能 <code>main()</code> 必须设计成模块，而对于需要执行的部分可以使用 <code>if __name__ == &#39;__main__&#39;</code></p></li><li><p><strong>命名规范</strong></p></li></ul><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:left;">公有</th><th style="text-align:left;">内部</th></tr></thead><tbody><tr><td style="text-align:center;">包</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">模块</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;">下划线+小写下划线</td></tr><tr><td style="text-align:center;">类</td><td style="text-align:left;">大驼峰</td><td style="text-align:left;">下划线+大驼峰</td></tr><tr><td style="text-align:center;">异常</td><td style="text-align:left;">大驼峰</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">函数</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;">下划线+小写下划线</td></tr><tr><td style="text-align:center;">全局常量/类常量</td><td style="text-align:left;">大写下划线</td><td style="text-align:left;">下划线+大写下划线</td></tr><tr><td style="text-align:center;">全局变量/类变量</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;">下划线+小写下划线</td></tr><tr><td style="text-align:center;">实例变量</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;">下划线+小写下划线 (受保护)</td></tr><tr><td style="text-align:center;">方法名</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;">下划线+小写下划线 (受保护)</td></tr><tr><td style="text-align:center;">函数参数/方法参数</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">局部变量</td><td style="text-align:left;">小写下划线</td><td style="text-align:left;"></td></tr></tbody></table><p><em>例如：</em></p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:left;">公有</th><th style="text-align:left;">内部</th></tr></thead><tbody><tr><td style="text-align:center;">包</td><td style="text-align:left;"><code>lower_with_under</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">模块</td><td style="text-align:left;"><code>lower_with_under</code></td><td style="text-align:left;"><code>_lower_with_under</code></td></tr><tr><td style="text-align:center;">类</td><td style="text-align:left;"><code>CapWords</code></td><td style="text-align:left;"><code>_CapWords</code></td></tr><tr><td style="text-align:center;">异常</td><td style="text-align:left;"><code>CapWords</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">函数</td><td style="text-align:left;"><code>lower_with_under()</code></td><td style="text-align:left;"><code>_lower_with_under()</code></td></tr><tr><td style="text-align:center;">全局常量/类常量</td><td style="text-align:left;"><code>CAPS_WITH_UNDER</code></td><td style="text-align:left;"><code>_CAPS_WITH_UNDER</code></td></tr><tr><td style="text-align:center;">全局变量/类变量</td><td style="text-align:left;"><code>lower_with_under</code></td><td style="text-align:left;"><code>_lower_with_under</code></td></tr><tr><td style="text-align:center;">实例变量</td><td style="text-align:left;"><code>lower_with_under</code></td><td style="text-align:left;"><code>_lower_with_under</code></td></tr><tr><td style="text-align:center;">方法名</td><td style="text-align:left;"><code>lower_with_under()</code></td><td style="text-align:left;"><code>_lower_with_under()</code></td></tr><tr><td style="text-align:center;">函数参数/方法参数</td><td style="text-align:left;"><code>lower_with_under</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">局部变量</td><td style="text-align:left;"><code>lower_with_under</code></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="_1-2-2-常见拓展运算符" tabindex="-1"><a class="header-anchor" href="#_1-2-2-常见拓展运算符" aria-hidden="true">#</a> 1.2.2 常见拓展运算符</h2><table><thead><tr><th style="text-align:center;"><code>+=</code></th><th style="text-align:center;"><code>-=</code></th><th style="text-align:center;"><code>*=</code></th><th style="text-align:center;"><code>/=</code></th><th style="text-align:center;"><code>//=</code></th><th style="text-align:center;"><code>%=</code></th><th style="text-align:center;"><code>**=</code></th></tr></thead><tbody><tr><td style="text-align:center;">增量</td><td style="text-align:center;">减量</td><td style="text-align:center;">加倍</td><td style="text-align:center;">除</td><td style="text-align:center;">整除</td><td style="text-align:center;">余数</td><td style="text-align:center;">乘幂</td></tr></tbody></table><br><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这些操作都是<strong>原地更新</strong>，直接修改赋值号左侧变量</p></div>',10);function f(v,w){const s=a("ExternalLinkIcon");return i(),o("div",null,[c,p,u,t("div",g,[h,t("p",null,[e("参考链接如下："),t("a",y,[e("谷歌开源规范"),r(s)])])]),x,k,_,b,m])}const C=l(d,[["render",f],["__file","02.html.vue"]]);export{C as default};
