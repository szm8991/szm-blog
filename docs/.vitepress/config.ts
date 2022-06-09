import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebarDocs, sidebarArticles } from './config/sidebar'
const config = defineConfig({
  lang: 'zh-cn',
  title: '小铭🌛',
  description: 'szm,博客,blog,前端,frontend,javascript,node,git,vue3,vite,读书随笔',
  base: '/szm-blog/',
  appearance: true,
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/68761971?s=48&v=4',
    siteTitle: 'Hello World',
    nav: nav(),
    sidebar: {
      '/docs/': sidebarDocs(),
      '/articles/': sidebarArticles(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/szm8991/' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present VitePress & ZheMing Song',
    },
  },
})

export default config
