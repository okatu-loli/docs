import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "千石の知识库",
  description: "Talk is cheap. Show me the code.",
  head: [["link", { rel: "icon", href: "/book.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/okatu-loli' }
    ],

    aside: "left",

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 千石'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: 'Search'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
