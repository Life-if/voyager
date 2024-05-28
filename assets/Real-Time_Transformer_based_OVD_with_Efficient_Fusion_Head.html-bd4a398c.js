const e=JSON.parse('{"key":"v-36628e1d","path":"/blog/paper/detection/Real-Time_Transformer_based_OVD_with_Efficient_Fusion_Head.html","title":"Real-time Transformer-based Open-Vocabulary Detection with Efficient Fusion Head","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Real-time Transformer-based Open-Vocabulary Detection with Efficient Fusion Head","shortTitle":"OmDet-Turbo（OVD）","date":"2024-04-01T00:00:00.000Z","description":"通过集成语言模态，基于端到端 transformer 的检测器（DETR）在封闭集和开放词汇目标检测（OVD）任务中表现出了卓越的性能。然而，它们苛刻的计算要求阻碍了它们在实时目标检测（OD）场景中的实际应用。在本文中，我们仔细研究了 OVDEval 基准测试中两个领先模型 OmDet 和 Grounding-DINO 的局限性，并设计了 OmDet-Turbo 模型。这种新颖的基于 transformer 的实时 OVD 模型具有创新的高效融合头 (EFH) 模块，旨在缓解 OmDet 和 Grounding-DINO 中观察到的瓶颈。值得注意的是，OmDet-Turbo-Base 通过应用 TensorRT 和语言缓存技术实现了 100.2 帧/秒 (FPS)。值得注意的是，在 COCO 和 LVIS 数据集上的零样本场景中，OmDet-Turbo 实现的性能水平几乎与当前最先进的监督模型相当。此外，它还为 ODinW 和 OVDEval 建立了新的最先进基准，AP 分别为 30.1，NMS-AP 为 26.86。 OmDet-Turbo 在工业应用中的实用性体现在其在基准数据集上的卓越性能和卓越的推理速度，使其成为实时物体检测任务的一个令人信服的选择。","index":true,"icon":"python","category":["python","语法基础"],"tag":["阅读记录"],"timeline":true,"isOriginal":true,"star":false,"article":true,"head":[["meta",{"property":"og:url","content":"https:// https://life-if-forever.gitee.io/voyager/voyager/blog/paper/detection/Real-Time_Transformer_based_OVD_with_Efficient_Fusion_Head.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Real-time Transformer-based Open-Vocabulary Detection with Efficient Fusion Head"}],["meta",{"property":"og:description","content":"通过集成语言模态，基于端到端 transformer 的检测器（DETR）在封闭集和开放词汇目标检测（OVD）任务中表现出了卓越的性能。然而，它们苛刻的计算要求阻碍了它们在实时目标检测（OD）场景中的实际应用。在本文中，我们仔细研究了 OVDEval 基准测试中两个领先模型 OmDet 和 Grounding-DINO 的局限性，并设计了 OmDet-Turbo 模型。这种新颖的基于 transformer 的实时 OVD 模型具有创新的高效融合头 (EFH) 模块，旨在缓解 OmDet 和 Grounding-DINO 中观察到的瓶颈。值得注意的是，OmDet-Turbo-Base 通过应用 TensorRT 和语言缓存技术实现了 100.2 帧/秒 (FPS)。值得注意的是，在 COCO 和 LVIS 数据集上的零样本场景中，OmDet-Turbo 实现的性能水平几乎与当前最先进的监督模型相当。此外，它还为 ODinW 和 OVDEval 建立了新的最先进基准，AP 分别为 30.1，NMS-AP 为 26.86。 OmDet-Turbo 在工业应用中的实用性体现在其在基准数据集上的卓越性能和卓越的推理速度，使其成为实时物体检测任务的一个令人信服的选择。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-28T13:13:46.000Z"}],["meta",{"property":"article:author","content":"Voyager"}],["meta",{"property":"article:tag","content":"阅读记录"}],["meta",{"property":"article:published_time","content":"2024-04-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-28T13:13:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Real-time Transformer-based Open-Vocabulary Detection with Efficient Fusion Head\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-28T13:13:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Voyager\\",\\"url\\":\\"https://life-if-forever.gitee.io/voyager\\"}]}"]]},"headers":[{"level":2,"title":"文章摘要","slug":"文章摘要","link":"#文章摘要","children":[]},{"level":2,"title":"主要工作","slug":"主要工作","link":"#主要工作","children":[]},{"level":2,"title":"论文十问","slug":"论文十问","link":"#论文十问","children":[{"level":3,"title":"1. 论文试图解决什么问题","slug":"_1-论文试图解决什么问题","link":"#_1-论文试图解决什么问题","children":[]},{"level":3,"title":"2. 这是否是一个新的问题","slug":"_2-这是否是一个新的问题","link":"#_2-这是否是一个新的问题","children":[]},{"level":3,"title":"3. 这篇文章想要验证一个怎样的科学假设","slug":"_3-这篇文章想要验证一个怎样的科学假设","link":"#_3-这篇文章想要验证一个怎样的科学假设","children":[]},{"level":3,"title":"4. 有哪些相关研究？如何归类？","slug":"_4-有哪些相关研究-如何归类","link":"#_4-有哪些相关研究-如何归类","children":[]},{"level":3,"title":"5. 论文中的解决方案关键是什么？","slug":"_5-论文中的解决方案关键是什么","link":"#_5-论文中的解决方案关键是什么","children":[]},{"level":3,"title":"6. 实验如何设计的？","slug":"_6-实验如何设计的","link":"#_6-实验如何设计的","children":[]},{"level":3,"title":"7. 用于定量评估的数据集是什么？代码有没有开源？","slug":"_7-用于定量评估的数据集是什么-代码有没有开源","link":"#_7-用于定量评估的数据集是什么-代码有没有开源","children":[]},{"level":3,"title":"8. 论文的实验结果是否支持了其假设？","slug":"_8-论文的实验结果是否支持了其假设","link":"#_8-论文的实验结果是否支持了其假设","children":[]},{"level":3,"title":"9. 这篇论文有什么贡献？","slug":"_9-这篇论文有什么贡献","link":"#_9-这篇论文有什么贡献","children":[]},{"level":3,"title":"10. 下一步的深入研究方向和工作？","slug":"_10-下一步的深入研究方向和工作","link":"#_10-下一步的深入研究方向和工作","children":[]}]}],"git":{"createdTime":1716902026000,"updatedTime":1716902026000,"contributors":[{"name":"Voyager","email":"1241512309@qq.com","commits":1}]},"readingTime":{"minutes":11.64,"words":3493},"filePathRelative":"blog/paper/detection/Real-Time_Transformer_based_OVD_with_Efficient_Fusion_Head.md","localizedDate":"2024年4月1日","excerpt":"<h2> 文章摘要</h2>\\n<p>通过集成语言模态，基于端到端 transformer 的检测器（DETR）在封闭集和开放词汇目标检测（OVD）任务中表现出了卓越的性能。然而，它们苛刻的计算要求阻碍了它们在实时目标检测（OD）场景中的实际应用。在本文中，我们仔细研究了 OVDEval 基准测试中两个领先模型 OmDet 和 Grounding-DINO 的局限性，并设计了 OmDet-Turbo 模型。这种新颖的基于 transformer 的实时 OVD 模型具有创新的高效融合头 (EFH) 模块，旨在缓解 OmDet 和 Grounding-DINO 中观察到的瓶颈。值得注意的是，OmDet-Turbo-Base 通过应用 TensorRT 和语言缓存技术实现了 100.2 帧/秒 (FPS)。值得注意的是，在 COCO 和 LVIS 数据集上的零样本场景中，OmDet-Turbo 实现的性能水平几乎与当前最先进的监督模型相当。此外，它还为 ODinW 和 OVDEval 建立了新的最先进基准，AP 分别为 30.1，NMS-AP 为 26.86。 OmDet-Turbo 在工业应用中的实用性体现在其在基准数据集上的卓越性能和卓越的推理速度，使其成为实时物体检测任务的一个令人信服的选择。</p>"}');export{e as data};
