import{_ as i,o as e,c as n,f as l}from"./app-6c152e92.js";const s={},d=l(`<p>对等ISP之间可以用对等链路（peering link),也可以用IXP，老师讲IXP本身就是一个高速网络。那为什么不直接全部使用IXP或者直接用对等链路连接？</p><p>从知乎找到的答案是这样的</p><div class="language-作者：蚊子好大人 line-numbers-mode" data-ext="作者：蚊子好大人"><pre class="language-作者：蚊子好大人"><code>链接：https://www.zhihu.com/question/37797078/answer/118132258
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

1. 教科书上的内容真心非常旧了， 目前全球范围内大约有小800个IXP， 并且在飞速增长中。 
2. IXP的作用就是消化本地交换的流量， 根据80/20原则， 本地流量交换要远大于远距离交换流量。 IXP主要是将本地CP、SP的资源放在一个本地BGP网络里面， 通过实现本地流量交换，减少transit带宽的费用，也就是三大运营商的带宽费用。
3. 你看到的IXP并不是真正的IXP， 基本上名存实亡。 目前BAT公司都有自己的BGP接入平台， 勉强可以说成事实上的IXP， 但其实也只是各自为战， 并非真正的IXP。 现在国内唯一认真在做专业IXP的只有蓝汛的CHN-IX。 小道消息称目前蓝汛的财务非常糟糕， 和高层资源IXP方向倾斜有很大的关系， 目前和AMSIX有有战略合作关系。 AMSIX是全球最大的IXP交换中心， 所以技术上应该没瓶颈。 别的所谓的IXP， 呵呵...
4. 教科书上讲，“使因特网上的数据流量分布更加合理，同时也减少了分组转发的迟延时间，降低了分组转发的费用” 通俗的理解是， 
a. 根据80/20原则让本地交换的流量在本地交换， 跨越三大运营商以及小运营商之间的壁障。
b. 交换延迟时间，必须的， IXP的网络基本上在一个二层网络里面， 所以延迟时间非常小， 基本上只有光信号传递的损耗以及路由设备包转发的损耗。 而传统网络会受到运营商之间路由策略影响，基本上都会绕路。 如果接入IX， 部分资源的用户体验是极好的。
c. 降低费用第二条已经讲过了， IXP基本上只收端口费， 和三大运营商出口流量费用比较起来差的多了。 并且， IXP节点之间也有传输， 这样很容易实现跨区域间的传输互联， 现在一般都是通过公网mpls vpn服务来实现的。
所以， 上述几条也算是回答了题主的问题。 而网友说的中国国情真心有道理。

1 虽然国家层面上提倡网络加速， 三大运营商不作为。 ---- 很容易理解， IXP的实现是和三大运营商抢带宽， 所以， 当前国情下举步维艰。不过据笔者海外多年工作经验来看， 一个IXP 接口一般能省下大约1/3-1/5的总出口流量费用。国内同仁还需努力。
2  跟GFW没有任何关系，严格来说IXP仅具有本地意义。 如果勉强要扯上关系的话， 就是未来IXP之间的物理传输有可能会穿透GFW。 目前没有任何一个组织的IXP进入中国， 不存在这样的顾虑。
3 国内SP, CP的网络从业者的技术素养，虽然国内现在CCIE, HCIE越来越多， 但是大部分网络工作者在OSPF， ISIS， 静态路由的水平上， 最多IBGP， SP的网络工程师至多加上MPLS VPN,  划一下vrf。而IXP的核心是ebgp的路由交换。不过作为在国内的新生事物，技术并不是门槛。

总结一下， 仍需广大小SP，CP们团建一致， 支持国内IXP的演进， 推翻三座大山，加速中国网络。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对其中的术语解释</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>80/20原则:在任何一组东西中，最重bai要的du只占其中一小部分，约20%，其余80%尽管是多数，却是次要的。
CP SP:内容提供商（百度） 带宽服务商（移动）
BAT公司：百度 腾讯 阿里巴巴
二级网络：七层网络中，物理层，数据链路层和网络层是低三层网络，其余四层是高三层网络，其中二层网络指的就是数据链路层，三层网络指的就是网络层，这两者使我们需要重点理解的地方。
BGP：边界网关协议（BGP）是运行于 TCP 上的一种自治系统的路由协议。 BGP 是唯一一个用来处理像因特网大小的网络的协议，也是唯一能够妥善处理好不相关路由域间的多路连接的协议。 BGP 构建在 EGP 的经验之上。 BGP 系统的主要功能是和其他的 BGP 系统交换网络可达信息。网络可达信息包括列出的自治系统（AS）的信息。这些信息有效地构造了 AS 互联的拓扑图并由此清除了路由环路，同时在 AS 级别上可实施策略决策。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结来说就是：</p><ol><li>IXP可以实现本地资源互换，节约流量，自然是不全部用对等链路</li><li>流量收费，建立IXP会对SP的利益造成损害，尽管可以节约CP的成本</li><li>CP之间的决策</li></ol>`,7),_=[d];function P(a,v){return e(),n("div",null,_)}const c=i(s,[["render",P],["__file","对等ISP之间可以用对等链路（peering link)_也可以用IXP，老师讲IXP本身就是一个高速网络。那为什么不直接全部使用IXP或者直接用对等链路连接？.html.vue"]]);export{c as default};
