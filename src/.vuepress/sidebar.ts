import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/blog/notion/":[    
    {
    text: "博客文章",
    icon: "note",
    prefix: "",
    collapsible: true,
    children: [
      {
        text: "C++",
        icon: "note",
        prefix: "Cpp/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Python",
        icon: "note",
        prefix: "python/",
        children: "structure",
        collapsible: true,
      },
    ],
  }],
  "/blog/notion/python/python_book/":[
    {
      text: "程序员学python",
      icon: "note",
      prefix: "",
      children: "structure",
      collapsible: false
    },
  ]
});
