import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { PopperShape } from "@moefy-canvas/theme-popper";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";

import {
  canvasPlugin,
  CanvasPluginType,
} from "./plugins/vuepress-plugin-canvas";
import { gradientCoverPlugin,GradientCoverOptions } from "./plugins/vuepress-plugin-gradient-cover";
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
      "./components/BlogHero.vue",),
    "@theme-hope/components/PageFooter": path.resolve(
      __dirname,
      "./components/PageFooter.vue"
    ),
  },

  plugins: [
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 2,
        numParticles: 20,
      },
    }),
    //  背景插件
    canvasPlugin({
      type: CanvasPluginType.Figure,
      ribbonOption: {
        zIndex: 1,
        alpha: 0.1,
        size: 100,
      },
    }),
    // 遮罩插件
    gradientCoverPlugin({}),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
