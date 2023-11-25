import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "期刊论文",
    icon: "install",
    prefix: "/posts/apple/",
    children: [
      { text: "经典论文", icon: "autumn", link: "1" },
      { text: "追新论文", icon: "ability", link: "2" },
    ],
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "banana/",
    children: [
      {
        text: "Linux操作系统",
        icon: "linux",
        link: "2",
      },
      {
        text: "Leecode刷题记录",
        icon: "note",
        link: "2",
      },
      {
        text: "语言基础",
        // icon: "coding",
        prefix: "apple/",
        children: [
          { text: "Cpp", icon: "suffix-cpp", link: "1" },
          { text: "python", icon: "python", link: "2" },
          { text: "java", icon: "java", link: "3" },
          { text: "pytorch", icon: "pytorch", link: "4" },
        ]
      },
    ],
  },
  { text: "关于我", icon: "profile", link: "/demo/" },
]);
