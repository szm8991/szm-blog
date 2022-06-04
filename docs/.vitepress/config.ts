import { defineConfig } from 'vitepress';
import { nav } from './config/nav';
import { sidebar } from './config/sidebar';
const config = defineConfig({
  title: 'Szm',
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/68761971?s=48&v=4' }],
  ],
  description: 'Szm,Szm1998,szm,博客,blog,前端,frontend,javascript,node,git,vue3,vite,读书随笔',
  base: '/szm-blog/',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/68761971?s=48&v=4',
    nav,
    sidebar,
  },
});

export default config;
