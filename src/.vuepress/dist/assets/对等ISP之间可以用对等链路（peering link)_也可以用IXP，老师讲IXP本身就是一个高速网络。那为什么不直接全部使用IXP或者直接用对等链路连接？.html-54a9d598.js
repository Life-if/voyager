const e=JSON.parse('{"key":"v-e14e30ba","path":"/blog/notion/network/%E5%AF%B9%E7%AD%89ISP%E4%B9%8B%E9%97%B4%E5%8F%AF%E4%BB%A5%E7%94%A8%E5%AF%B9%E7%AD%89%E9%93%BE%E8%B7%AF%EF%BC%88peering%20link)_%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8IXP%EF%BC%8C%E8%80%81%E5%B8%88%E8%AE%B2IXP%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E9%AB%98%E9%80%9F%E7%BD%91%E7%BB%9C%E3%80%82%E9%82%A3%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%9B%B4%E6%8E%A5%E5%85%A8%E9%83%A8%E4%BD%BF%E7%94%A8IXP%E6%88%96%E8%80%85%E7%9B%B4%E6%8E%A5%E7%94%A8%E5%AF%B9%E7%AD%89%E9%93%BE%E8%B7%AF%E8%BF%9E%E6%8E%A5%EF%BC%9F.html","title":"","lang":"zh-CN","frontmatter":{"description":"对等ISP之间可以用对等链路（peering link),也可以用IXP，老师讲IXP本身就是一个高速网络。那为什么不直接全部使用IXP或者直接用对等链路连接？ 从知乎找到的答案是这样的 链接：https://www.zhihu.com/question/37797078/answer/118132258 来源：知乎 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 1. 教科书上的内容真心非常旧了， 目前全球范围内大约有小800个IXP， 并且在飞速增长中。 2. IXP的作用就是消化本地交换的流量， 根据80/20原则， 本地流量交换要远大于远距离交换流量。 IXP主要是将本地CP、SP的资源放在一个本地BGP网络里面， 通过实现本地流量交换，减少transit带宽的费用，也就是三大运营商的带宽费用。 3. 你看到的IXP并不是真正的IXP， 基本上名存实亡。 目前BAT公司都有自己的BGP接入平台， 勉强可以说成事实上的IXP， 但其实也只是各自为战， 并非真正的IXP。 现在国内唯一认真在做专业IXP的只有蓝汛的CHN-IX。 小道消息称目前蓝汛的财务非常糟糕， 和高层资源IXP方向倾斜有很大的关系， 目前和AMSIX有有战略合作关系。 AMSIX是全球最大的IXP交换中心， 所以技术上应该没瓶颈。 别的所谓的IXP， 呵呵... 4. 教科书上讲，“使因特网上的数据流量分布更加合理，同时也减少了分组转发的迟延时间，降低了分组转发的费用” 通俗的理解是， a. 根据80/20原则让本地交换的流量在本地交换， 跨越三大运营商以及小运营商之间的壁障。 b. 交换延迟时间，必须的， IXP的网络基本上在一个二层网络里面， 所以延迟时间非常小， 基本上只有光信号传递的损耗以及路由设备包转发的损耗。 而传统网络会受到运营商之间路由策略影响，基本上都会绕路。 如果接入IX， 部分资源的用户体验是极好的。 c. 降低费用第二条已经讲过了， IXP基本上只收端口费， 和三大运营商出口流量费用比较起来差的多了。 并且， IXP节点之间也有传输， 这样很容易实现跨区域间的传输互联， 现在一般都是通过公网mpls vpn服务来实现的。 所以， 上述几条也算是回答了题主的问题。 而网友说的中国国情真心有道理。 1 虽然国家层面上提倡网络加速， 三大运营商不作为。 ---- 很容易理解， IXP的实现是和三大运营商抢带宽， 所以， 当前国情下举步维艰。不过据笔者海外多年工作经验来看， 一个IXP 接口一般能省下大约1/3-1/5的总出口流量费用。国内同仁还需努力。 2 跟GFW没有任何关系，严格来说IXP仅具有本地意义。 如果勉强要扯上关系的话， 就是未来IXP之间的物理传输有可能会穿透GFW。 目前没有任何一个组织的IXP进入中国， 不存在这样的顾虑。 3 国内SP, CP的网络从业者的技术素养，虽然国内现在CCIE, HCIE越来越多， 但是大部分网络工作者在OSPF， ISIS， 静态路由的水平上， 最多IBGP， SP的网络工程师至多加上MPLS VPN, 划一下vrf。而IXP的核心是ebgp的路由交换。不过作为在国内的新生事物，技术并不是门槛。 总结一下， 仍需广大小SP，CP们团建一致， 支持国内IXP的演进， 推翻三座大山，加速中国网络。","head":[["meta",{"property":"og:url","content":"https:// https://life-if-forever.gitee.io/voyager/voyager/blog/notion/network/%E5%AF%B9%E7%AD%89ISP%E4%B9%8B%E9%97%B4%E5%8F%AF%E4%BB%A5%E7%94%A8%E5%AF%B9%E7%AD%89%E9%93%BE%E8%B7%AF%EF%BC%88peering%20link)_%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8IXP%EF%BC%8C%E8%80%81%E5%B8%88%E8%AE%B2IXP%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E9%AB%98%E9%80%9F%E7%BD%91%E7%BB%9C%E3%80%82%E9%82%A3%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%9B%B4%E6%8E%A5%E5%85%A8%E9%83%A8%E4%BD%BF%E7%94%A8IXP%E6%88%96%E8%80%85%E7%9B%B4%E6%8E%A5%E7%94%A8%E5%AF%B9%E7%AD%89%E9%93%BE%E8%B7%AF%E8%BF%9E%E6%8E%A5%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:description","content":"对等ISP之间可以用对等链路（peering link),也可以用IXP，老师讲IXP本身就是一个高速网络。那为什么不直接全部使用IXP或者直接用对等链路连接？ 从知乎找到的答案是这样的 链接：https://www.zhihu.com/question/37797078/answer/118132258 来源：知乎 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 1. 教科书上的内容真心非常旧了， 目前全球范围内大约有小800个IXP， 并且在飞速增长中。 2. IXP的作用就是消化本地交换的流量， 根据80/20原则， 本地流量交换要远大于远距离交换流量。 IXP主要是将本地CP、SP的资源放在一个本地BGP网络里面， 通过实现本地流量交换，减少transit带宽的费用，也就是三大运营商的带宽费用。 3. 你看到的IXP并不是真正的IXP， 基本上名存实亡。 目前BAT公司都有自己的BGP接入平台， 勉强可以说成事实上的IXP， 但其实也只是各自为战， 并非真正的IXP。 现在国内唯一认真在做专业IXP的只有蓝汛的CHN-IX。 小道消息称目前蓝汛的财务非常糟糕， 和高层资源IXP方向倾斜有很大的关系， 目前和AMSIX有有战略合作关系。 AMSIX是全球最大的IXP交换中心， 所以技术上应该没瓶颈。 别的所谓的IXP， 呵呵... 4. 教科书上讲，“使因特网上的数据流量分布更加合理，同时也减少了分组转发的迟延时间，降低了分组转发的费用” 通俗的理解是， a. 根据80/20原则让本地交换的流量在本地交换， 跨越三大运营商以及小运营商之间的壁障。 b. 交换延迟时间，必须的， IXP的网络基本上在一个二层网络里面， 所以延迟时间非常小， 基本上只有光信号传递的损耗以及路由设备包转发的损耗。 而传统网络会受到运营商之间路由策略影响，基本上都会绕路。 如果接入IX， 部分资源的用户体验是极好的。 c. 降低费用第二条已经讲过了， IXP基本上只收端口费， 和三大运营商出口流量费用比较起来差的多了。 并且， IXP节点之间也有传输， 这样很容易实现跨区域间的传输互联， 现在一般都是通过公网mpls vpn服务来实现的。 所以， 上述几条也算是回答了题主的问题。 而网友说的中国国情真心有道理。 1 虽然国家层面上提倡网络加速， 三大运营商不作为。 ---- 很容易理解， IXP的实现是和三大运营商抢带宽， 所以， 当前国情下举步维艰。不过据笔者海外多年工作经验来看， 一个IXP 接口一般能省下大约1/3-1/5的总出口流量费用。国内同仁还需努力。 2 跟GFW没有任何关系，严格来说IXP仅具有本地意义。 如果勉强要扯上关系的话， 就是未来IXP之间的物理传输有可能会穿透GFW。 目前没有任何一个组织的IXP进入中国， 不存在这样的顾虑。 3 国内SP, CP的网络从业者的技术素养，虽然国内现在CCIE, HCIE越来越多， 但是大部分网络工作者在OSPF， ISIS， 静态路由的水平上， 最多IBGP， SP的网络工程师至多加上MPLS VPN, 划一下vrf。而IXP的核心是ebgp的路由交换。不过作为在国内的新生事物，技术并不是门槛。 总结一下， 仍需广大小SP，CP们团建一致， 支持国内IXP的演进， 推翻三座大山，加速中国网络。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Voyager"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Voyager\\",\\"url\\":\\"https://life-if-forever.gitee.io/voyager\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.7,"words":1409},"filePathRelative":"blog/notion/network/对等ISP之间可以用对等链路（peering link),也可以用IXP，老师讲IXP本身就是一个高速网络。那为什么不直接全部使用IXP或者直接用对等链路连接？.md","excerpt":"<p>对等ISP之间可以用对等链路（peering link),也可以用IXP，老师讲IXP本身就是一个高速网络。那为什么不直接全部使用IXP或者直接用对等链路连接？</p>\\n<p>从知乎找到的答案是这样的</p>\\n<div class=\\"language-作者：蚊子好大人 line-numbers-mode\\" data-ext=\\"作者：蚊子好大人\\"><pre class=\\"language-作者：蚊子好大人\\"><code>链接：https://www.zhihu.com/question/37797078/answer/118132258\\n来源：知乎\\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\n\\n1. 教科书上的内容真心非常旧了， 目前全球范围内大约有小800个IXP， 并且在飞速增长中。 \\n2. IXP的作用就是消化本地交换的流量， 根据80/20原则， 本地流量交换要远大于远距离交换流量。 IXP主要是将本地CP、SP的资源放在一个本地BGP网络里面， 通过实现本地流量交换，减少transit带宽的费用，也就是三大运营商的带宽费用。\\n3. 你看到的IXP并不是真正的IXP， 基本上名存实亡。 目前BAT公司都有自己的BGP接入平台， 勉强可以说成事实上的IXP， 但其实也只是各自为战， 并非真正的IXP。 现在国内唯一认真在做专业IXP的只有蓝汛的CHN-IX。 小道消息称目前蓝汛的财务非常糟糕， 和高层资源IXP方向倾斜有很大的关系， 目前和AMSIX有有战略合作关系。 AMSIX是全球最大的IXP交换中心， 所以技术上应该没瓶颈。 别的所谓的IXP， 呵呵...\\n4. 教科书上讲，“使因特网上的数据流量分布更加合理，同时也减少了分组转发的迟延时间，降低了分组转发的费用” 通俗的理解是， \\na. 根据80/20原则让本地交换的流量在本地交换， 跨越三大运营商以及小运营商之间的壁障。\\nb. 交换延迟时间，必须的， IXP的网络基本上在一个二层网络里面， 所以延迟时间非常小， 基本上只有光信号传递的损耗以及路由设备包转发的损耗。 而传统网络会受到运营商之间路由策略影响，基本上都会绕路。 如果接入IX， 部分资源的用户体验是极好的。\\nc. 降低费用第二条已经讲过了， IXP基本上只收端口费， 和三大运营商出口流量费用比较起来差的多了。 并且， IXP节点之间也有传输， 这样很容易实现跨区域间的传输互联， 现在一般都是通过公网mpls vpn服务来实现的。\\n所以， 上述几条也算是回答了题主的问题。 而网友说的中国国情真心有道理。\\n\\n1 虽然国家层面上提倡网络加速， 三大运营商不作为。 ---- 很容易理解， IXP的实现是和三大运营商抢带宽， 所以， 当前国情下举步维艰。不过据笔者海外多年工作经验来看， 一个IXP 接口一般能省下大约1/3-1/5的总出口流量费用。国内同仁还需努力。\\n2  跟GFW没有任何关系，严格来说IXP仅具有本地意义。 如果勉强要扯上关系的话， 就是未来IXP之间的物理传输有可能会穿透GFW。 目前没有任何一个组织的IXP进入中国， 不存在这样的顾虑。\\n3 国内SP, CP的网络从业者的技术素养，虽然国内现在CCIE, HCIE越来越多， 但是大部分网络工作者在OSPF， ISIS， 静态路由的水平上， 最多IBGP， SP的网络工程师至多加上MPLS VPN,  划一下vrf。而IXP的核心是ebgp的路由交换。不过作为在国内的新生事物，技术并不是门槛。\\n\\n总结一下， 仍需广大小SP，CP们团建一致， 支持国内IXP的演进， 推翻三座大山，加速中国网络。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
