const e=JSON.parse('{"key":"v-405effea","path":"/blog/book/python/python_book1/Chapter%2003/02.html","title":"3.2  程序的语义实现","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"3.2  程序的语义实现","shortTitle":"3.2  程序的语义实现","date":"2023-12-02T00:00:00.000Z","description":"讨论 python 程序的基本语义问题","index":true,"icon":"python","category":["python","语法基础"],"tag":["阅读记录"],"timeline":true,"isOriginal":true,"star":false,"article":true,"head":[["meta",{"property":"og:url","content":"https:// https://life-if-forever.gitee.io/voyager/voyager/blog/book/python/python_book1/Chapter%2003/02.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"3.2  程序的语义实现"}],["meta",{"property":"og:description","content":"讨论 python 程序的基本语义问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-28T13:13:46.000Z"}],["meta",{"property":"article:author","content":"Voyager"}],["meta",{"property":"article:tag","content":"阅读记录"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-28T13:13:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.2  程序的语义实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-28T13:13:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Voyager\\",\\"url\\":\\"https://life-if-forever.gitee.io/voyager\\"}]}"]]},"headers":[{"level":2,"title":"3.2.1 环境和状态","slug":"_3-2-1-环境和状态","link":"#_3-2-1-环境和状态","children":[{"level":3,"title":"a. 环境","slug":"a-环境","link":"#a-环境","children":[]},{"level":3,"title":"b. 状态","slug":"b-状态","link":"#b-状态","children":[]}]},{"level":2,"title":"3.2.2 程序执行中的环境和状态变化","slug":"_3-2-2-程序执行中的环境和状态变化","link":"#_3-2-2-程序执行中的环境和状态变化","children":[]}],"git":{"createdTime":1716902026000,"updatedTime":1716902026000,"contributors":[{"name":"Voyager","email":"1241512309@qq.com","commits":1}]},"readingTime":{"minutes":3.45,"words":1035},"filePathRelative":"blog/book/python/python_book1/Chapter 03/02.md","localizedDate":"2023年12月2日","excerpt":"<p>💣本节讨论的是 Python 的抽象模型，内容有点像编译原理，这里挑重点介绍一下。</p>\\n<h2> 3.2.1 环境和状态</h2>\\n<h3> a. 环境</h3>\\n<p>在启动 Python 解释器后，环境中就已经对标准函数名和标准类型名有了定义（比如：<code>True</code>、<code>float</code>、<code>id</code>等）。环境启动后就能找到它们和它们的关联值。</p>\\n<p>如果一个名字在 Python 解释器中没有赋值，也没有定义为函数名，则说这个名字<strong>无定义</strong>。但是一但满足了上面的几点之一就有了定义。这说明 Python 解释器时刻记得哪些名字有定义，这些信息记录在环境中，环境是程序运行的基础。</p>"}');export{e as data};
