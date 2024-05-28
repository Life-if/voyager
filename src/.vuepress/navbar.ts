import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "期刊论文",
    icon: "install",
    prefix: "/blog/paper/",
    children: [
      { text: "图像分类", icon: "autumn", link: "classfication/" },
      { text: "目标检测", icon: "ability", link: "detection/" },
      { text: "目标跟踪", icon: "ability", link: "track/" },
      { text: "视觉大模型", icon: "ability", link: "LLMs/" },
    ],
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/notion/",
    children: [
      {
        text: "Linux操作系统",
        icon: "linux",
        link: "2",
      },
      {
        text: "Leecode题解",
        icon: "note",
        link: "/leecode/",
      },
      {
        text: "深度学习",
        icon: "note",
        link: "/deep_learning/",
      },
      {
        text: "语言基础",
        // icon: "coding",
        prefix: "/blog/",
        children: [
          { text: "Cpp", icon: "suffix-cpp", link: "1" },
          { text: "python", icon: "python", link: "/python/" },
          { text: "java", icon: "java", link: "3" },
        ]
      },
    ],
  },
  { text: "关于我", icon: "profile", link: "/demo/" },
]);
