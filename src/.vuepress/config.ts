import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/voyager/",

  lang: "zh-CN",
  title: "博客演示",
  description: 
  "这里是Voyager的学习小站，和大家分享我的学习心得和生活",

  theme,

  head:[
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com',crossorigin:"" }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap' }],
  ],

  alias:{
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",)
  },
  
  // Enable it with pwa
  // shouldPrefetch: false,
});
