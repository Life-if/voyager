import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
// 当前网站部署到的域名
  hostname: " https://life-if-forever.gitee.io/voyager",

// 文章显示的默认作者
  author: {
  name: "Voyager",
  url: "https://life-if-forever.gitee.io/voyager",
  },
// 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: "iconfont",

  // 网站图标
  logo: "assets/icon/mylogo.svg",
  navTitle:"Voyager",
  navbarAutoHide:"mobile",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,
  docsDir: "src",

    // 导航栏上的个人仓库地址
  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  // 自定义仓库链接文字-默认从repo中自动推断为"GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  // repoLabel: "Gitee",
  // 是否在导航栏内显示仓库链接-默认为true

  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search","Outlook"],
  },
  // 页面显示信息
  pageInfo: ["Author", "Date", "Category", "Word", "Tag", "ReadingTime"],

    // 路径导航
    breadcrumb: false,
    // 路径导航的图标显示
    breadcrumbIcon: true,

      // darkmode: "toggle",
  // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮-下滑300px后显示
  backToTop: true,
  // 纯净模式-禁用
  pure: false,
  // 桌面模式下是否打印
  print:false,
  // 显示页面的贡献者
  contributors: false,


  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "世事随如流水，算来一梦浮生",

  displayFooter: true,

  blog: {
   // 头像
    avatar: "assets/icon/head1.svg",
    // 名称
    name: "Voyager",
    // 是否是圆形头像
    roundAvatar: true,
    // 个人描述
    // description: "你是无意穿堂风 偏偏孤倨引山洪",
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 10,
    timeline: "Voyagerの时光轴✨✨",
    description: "一个还没就业的闷闷研究生",
    intro: "/intro.html",

    medias: {
      // BiliBili: "https://example.com",
      Email: "kx_voyager@outlook.com",
      Gitee: "https://gitee.com/life-if-forever",
      GitHub: "https://github.com/Life-if",
      // QQ: "https://example.com",
      // Wechat: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    
    blog: true,
    sitemap: false,
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://commit-blog-aeok3q7qh-life-ifs-projects.vercel.app/",
    },
    prismjs:{
        light:"ateliersulphurpool-light",
        dark:"dracula",
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},{ custom: true });
