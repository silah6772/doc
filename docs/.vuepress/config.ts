import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    title: 'Sh Documentation',
    dest: 'public',
    description: 'This is my first VuePress site',
    lang: 'en-US',
    theme: defaultTheme({
        navbar: [
            {
                text: 'Get started',
                link: '/guide',
            },
        ],
        sidebar: {
            '/guide':[
                {
                    text:'Introduction',
                    // collapsible: false,
                    children: [
                        "/guide/",
                        "/guide/installation"
                    ]
                },
                {
                    text:'Components',
                    collapsible: false,
                    children: [
                        '/guide/components',
                        '/guide/components/shform',
                        '/guide/components/shtabs',
                        '/guide/components/shdynamictabs',
                        '/guide/components/shmodal',
                        '/guide/components/shcanvas',
                        '/guide/components/shtable'
                    ]
                },
                {
                    text: 'Helpers',
                    collapsible: false,
                    children: [
                        '/guide/helpers',
                        '/guide/helpers/shuser',
                        '/guide/helpers/shapi',
                        '/guide/helpers/shrepo'
                    ]
                }
            ]
        }    }),
})
