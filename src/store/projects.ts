import { defineStore } from 'pinia'
export const useProjectsStore = defineStore({
    id: 'projects-store',
    state: () => ({
        projects: [
            {
                name: 'Pi-Control',
                projectName: 'pi-control',
                updates: false,
                url: 'https://github.com/borsTiHD/pi-control',
                topics: ['vue', 'nuxt', 'nodejs', 'socket.io', 'express', 'xterm', 'bcryptjs', 'jwt', 'swagger', 'pwa'],
                preview: 'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/mockup.png',
                images: [
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/mockup.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Desktop/dashboard2.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Desktop/about.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Desktop/processes.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Desktop/scripts.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Desktop/scripts2.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Desktop/terminal.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Mobile/dashboard_mobile.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Mobile/dashboard2_mobile.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Mobile/scripts_mobile.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Tablet/dashboard_skin_tablet.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Tablet/dashboard_tablet.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Tablet/terminal_keyboard_vertical_tablet.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Swagger/Pi-Control-Swagger-1.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Swagger/Pi-Control-Swagger-2.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Swagger/Pi-Control-Swagger-3.png',
                    'https://raw.githubusercontent.com/borsTiHD/pi-control/main/screenshots/Swagger/Pi-Control-Swagger-4.png'
                ],
                introduction: 'Pi-Control helps with gathering state and hardware information, as well as to simplify controlling your raspberry pi from any device.',
                description: [
                    'Pi-Control helps with gathering state and hardware information, as well as to simplify controlling your raspberry pi from any device.',
                    'The project is based on the Vue.js framework and uses Nuxt.js for the frontend and Socket.io in combination with Express (REST API) for the backend. It is open source and can be found on GitHub.',
                    '<br>',
                    'It comes with a shell script (one-step automated install) that completely handles the installation and update processes for the user. The script sets up a service on demand, which can start or stop the app on the server, making the app extremely easy to use.',
                    '<br>',
                    'After installation, the user only has to call the server via a URL and can use all features. For the first use, a local account must be set up. This account protects the entire app. Authentication is done via JSON Web Tokens (JWTs) and uses passport. The authentication protects the entire backend and includes the REST Api, as well as the communication via websockets. In the development environment, the entire REST api is documented via Swagger and can be tested via it.',
                    '<br>',
                    'The app is fully responsive and can be used on any device. It is optimized for mobile devices and tablets.',
                    'A PWA app can be installed on mobile devices if desired.',
                    '<br>',
                    'If you want to learn more, check out the readme on GitHub, or read up on the wiki pages.'
                ]
            },
            {
                name: 'AutoFAN',
                projectName: 'autofan',
                updates: false,
                url: '',
                topics: ['electron', 'vue', 'nuxt', 'vuetify', 'axios', 'express', 'ssh2', 'xterm'],
                preview: '/img/projects/autofan/1-Home-NoSidebar.jpg',
                images: [
                    '/img/projects/autofan/1-Home-NoSidebar.jpg',
                    '/img/projects/autofan/2-Masscall-NoSidebar-B.jpg',
                    '/img/projects/autofan/3-BNG-NoSidebar.jpg',
                    '/img/projects/autofan/4-Alarme-NoSidebar.jpg',
                    '/img/projects/autofan/5-Tickets-NoSidebar.jpg',
                    '/img/projects/autofan/6-Linecards-NoSidebar.jpg',
                    '/img/projects/autofan/7-Linecards2-NoSidebar.jpg',
                    '/img/projects/autofan/8-WLAN-FKTO-NoSidebar.jpg',
                    '/img/projects/autofan/9-WLAN-ESA-APs-NoSidebar.jpg',
                    '/img/projects/autofan/10-Kalender-NoSidebar.jpg',
                    '/img/projects/autofan/11-Settings-NoSidebar.jpg',
                    '/img/projects/autofan/12-Home-Skin-Darkmode.jpg',
                    '/img/projects/autofan/13-Home-Blue-Theme.jpg',
                    '/img/projects/autofan/15-Masscall-Darkmode.jpg',
                    '/img/projects/autofan/16_autofan_v1.3.jpg',
                    '/img/projects/autofan/17_AutoFan_v2.jpg',
                    '/img/projects/autofan/18_autofan_v2.37.jpg'
                ],
                introduction: 'AutoFAN is a large-scale desktop application based on Electron. It is a monitoring and management system for network devices such as DSLAM/MSAN/OLT/BNGs and is used within a larger NOC (Network Operations Center).',
                description: [
                    'AutoFAN is a large-scale desktop application based on Electron. It is a monitoring and management system for network devices such as DSLAM/MSAN/OLT/BNGs and is used within a larger NOC (Network Operations Center).',
                    '<br>',
                    'The main idea behind building the app was to help colleagues combine many work steps into one application and reduce the time needed to check major incidents significantly. It combines many tools in one and the main task is to check network devices for reachability and customer impact. In addition, it has many other functions such as a parallel scanning of multiple devices, or integrated and automated cli access via ssh.',
                    '<br>',
                    'The underlying technology behind this is based on Electron and uses Vue/Nuxt for the frontend. It comes with an automatic update system via an internal server with the support of different channels (alpha/beta/stable) and uses a fully integrated GitLab Ci pipeline for automatic testing, building and deploying of the app.',
                    '<br>',
                    'Originally, the app was written with AutoIt and had only a fraction of the features it has now. Below in the gallery the last photos show how it once looked in the past and what it has evolved from.',
                    '<br>',
                    'The project is fully maintained by me and is in constant development to deliver more features and a better user experience.'
                ]
            },
            {
                name: 'TiMon',
                projectName: 'timon',
                updates: false,
                url: '',
                topics: ['php', 'mysql', 'oracle', 'bootstrap', 'jquery', 'ajax', 'datatables.net'],
                preview: '/img/projects/timon/1_Home.jpg',
                images: [
                    '/img/projects/timon/1_Home.jpg',
                    '/img/projects/timon/2_SLA.jpg',
                    '/img/projects/timon/3_SLA_Tickets.jpg',
                    '/img/projects/timon/4_SLA_Matrix.jpg',
                    '/img/projects/timon/5_Ticket_Auswertung.jpg',
                    '/img/projects/timon/6_Cluster_Auswertung.jpg',
                    '/img/projects/timon/7_Supervision.jpg',
                    '/img/projects/timon/8_Teams.jpg'
                ],
                introduction: 'TiMon comes from ticket monitoring. It is a web application for monitoring and analyzing tickets and has been used in a larger NOC (Network Operations Center) for many years.',
                description: [
                    'TiMon comes from ticket monitoring. It is a web application for monitoring and analyzing tickets and has been used in a larger NOC (Network Operations Center) for many years.',
                    '<br>',
                    'The main idea behind the development was to monitor the durations of all tickets and constantly generate reports on the Service Level Agreements (SLA). In addition to the runtime, further custom and dynamic evaluations can be created based on various criteria, such as the manufacturer of the network elements, different failure types, or many other possibilities.',
                    '<br>',
                    'It is used by a number of different teams operating in the same NOC. The individual evaluations are determined in real time and can be configured as desired. The ticket list can be accessed and analyzed in more detail for each evaluation created.',
                    '<br>',
                    'In addition to evaluation, the app also takes on the task of the supervision of tickets to be processed by the individual teams. In addition to various standard rules, custom rules can be defined for each team, according to which tickets are filtered and listed for further processing by the employee.',
                    '<br>',
                    'Since it is already a quite old app, the underlying technology behind it consists of PHP and uses MySQL, as well as an Oracle database and relies on a self-built Bootstrap template for the frontend. Most of the comfortable functions, as well as Ajax queries are realized with the help of jquery and vanilla javascript.',
                    '<br>',
                    'The project is completely maintained by me, however plans exist to rebuild the app from scratch using more modern technologies such as Vue 3.'
                ]
            },
            {
                name: 'Vue-Jack 🃏',
                projectName: 'vue-jack',
                updates: false,
                url: 'https://github.com/borsTiHD/vue-jack',
                topics: ['vue3', 'nuxt3', 'typescript', 'tailwindcss', 'pinia', 'vitest'],
                preview: '/img/projects/vue-jack/4_game3_win.png',
                images: [
                    '/img/projects/vue-jack/1_welcome.png',
                    '/img/projects/vue-jack/2_rules.png',
                    '/img/projects/vue-jack/3_newgame.png',
                    '/img/projects/vue-jack/4_game1.png',
                    '/img/projects/vue-jack/4_game2_win.png',
                    '/img/projects/vue-jack/4_game3_win.png',
                    '/img/projects/vue-jack/5_welcome_mobile.png',
                    '/img/projects/vue-jack/6_rules_mobile.png',
                    '/img/projects/vue-jack/7_newgame_mobile.png',
                    '/img/projects/vue-jack/8_game1_mobile.png',
                    '/img/projects/vue-jack/8_game2_mobile.png'
                ],
                introduction: 'It\'s a simple Blackjack clone written in Vue3/Nuxt3.',
                description: [
                    'It\'s a simple Blackjack clone written in Vue3/Nuxt3.',
                    '<br>',
                    'The design was created with Tailwind and was also optimized for mobile devices.',
                    '<br>',
                    'The game is based on the classic Blackjack rules and has a simple and intuitive interface. You play against the dealer. Your goal is to reach a higher card value than the dealer, but not to exceed 21. In addition, a betting system is integrated. You start with 500 credits and can bet a sum between 10-100 per round. Depending on how the round goes, you win or lose different amounts.',
                    '<br>',
                    'If you want to know more about the rules, you can find them in the rules section of the game.',
                    '<br>',
                    'You can find the project on GitHub and is open source. <a class="hover:text-primary underline underline-offset-2" href="https://vue-jack.vercel.app" target="_blank">Here</a> you can try the game for yourself.'
                ]
            },
            {
                name: 'Diablo 2 Runewords Companion 😈',
                projectName: 'diablo2-runewords-companion',
                updates: false,
                url: 'https://github.com/borsTiHD/diablo2-runewords-companion',
                topics: ['vue', 'nuxt', 'vuetify'],
                preview: '/img/projects/diablo2-runewords-companion/3_runewords_calcualted.png',
                images: [
                    '/img/projects/diablo2-runewords-companion/1_welcome.png',
                    '/img/projects/diablo2-runewords-companion/2_runewords_listing.png',
                    '/img/projects/diablo2-runewords-companion/3_runewords_calcualted.png',
                    '/img/projects/diablo2-runewords-companion/4_runewords_calcualted_with_rune_filters.png',
                    '/img/projects/diablo2-runewords-companion/4_runewords_calcualted_with_rune_filters_2.png',
                    '/img/projects/diablo2-runewords-companion/5_single_runeword.png',
                    '/img/projects/diablo2-runewords-companion/6_runes_listing.png',
                    '/img/projects/diablo2-runewords-companion/7_single_rune.png',
                    '/img/projects/diablo2-runewords-companion/8_gems_listing.png',
                    '/img/projects/diablo2-runewords-companion/9_single_gem.png',
                    '/img/projects/diablo2-runewords-companion/10_sidebar.png'
                ],
                introduction: 'This is a small companion app for the game <strong>Diablo 2 Resurrected</strong>. It was designed to help with building runewords, as well as get information about all runes.',
                description: [
                    'This is a small companion app for the game <strong>Diablo 2 Resurrected</strong>. It was designed to help with building runewords, as well as get information about all runes.',
                    '<br>',
                    'Using the search input, you can search for any rune, runeword, or gemstone listed in the game and get to a more detailed page with more information.',
                    '<br>',
                    'The centerpiece, however, is the runeword calculator. A runeword consists of a recipe of different runes. There, the user can enter all runes he owns in the game and also their quantity. The app then calculates which runewords are possible and can be built based on their recipes. To simplify the search, the app also has various filter options.',
                    '<br>',
                    'The app is written with Vue.js and uses the Nuxt.js framework for the frontend. It is a single page application without a backend.',
                    '<br>',
                    'You can find the project on GitHub and is open source. Besides, you can try out the app there.'
                ]
            },
            {
                name: 'Meme Stonks 🚀',
                projectName: 'meme-stonks',
                updates: false,
                url: 'https://github.com/borsTiHD/meme-stonks',
                topics: ['vue', 'nuxt', 'vuetify', 'axios', 'chart.js', 'idb'],
                preview: '/img/projects/meme-stonks/3_stock_apple.png',
                images: [
                    '/img/projects/meme-stonks/1_settings.png',
                    '/img/projects/meme-stonks/2_settings_exchanges.png',
                    '/img/projects/meme-stonks/3_stock_apple.png',
                    '/img/projects/meme-stonks/4_stock_apple_different_scales.png',
                    '/img/projects/meme-stonks/5_stock_microsoft.png',
                    '/img/projects/meme-stonks/6_stock_microsoft_different_scales.png',
                    '/img/projects/meme-stonks/7_stock_alphabet.png'
                ],
                introduction: 'Meme Stonks is a small app that allows you to track your favorite stocks.',
                description: [
                    'Meme Stonks is a small app that allows you to track your favorite stocks.',
                    '<br>',
                    'It uses the REST API from marketstack. In order for the app to work, either a free or a premium token must be stored in the settings. The token is then stored locally in the browser. Afterwards, the preferred exchange can be set and the app then fetches a list of available stocks.',
                    '<br>',
                    'Using the search at the top, you can search for stocks with an autocomplete. If a stock is selected, the data is retrieved via the API and listed in various charts. The charts can be set according to predefined times or, in the case of the large chart, also manually. You can also view the trend of the entire period in a percentage, or in an absolute amount.',
                    '<br>',
                    'The app is written with Vue.js and uses the Nuxt.js framework for the frontend. It is a single page application and unfortunately was never finished. To avoid too much load on the API, all data is stored in an IndexedDB with a detailed cache period within the browser.',
                    '<br>',
                    'You can find the project on GitHub and is open source.'
                ]
            },
            {
                name: 'Homepage: borstihd.de',
                projectName: 'borsti-hp',
                updates: true,
                url: 'https://github.com/borsTiHD/borsti-hp',
                topics: ['vue3', 'nuxt3', 'typescript', 'tailwindcss', 'daisyui', 'pinia'],
                preview: '/img/projects/borsti-hp/wallpaper.jpg',
                images: [
                    '/img/projects/borsti-hp/wallpaper.jpg',
                    '/img/projects/borsti-hp/1-borstihp-home-hero-view.png',
                    '/img/projects/borsti-hp/2-borstihp-home-about-me.png',
                    '/img/projects/borsti-hp/3-borstihp-projects.png',
                    '/img/projects/borsti-hp/4-borstihp-single-project.png'
                ],
                introduction: 'Well, this project is the page you are visiting right now. A portfolio to list some of my projects.',
                description: [
                    'Well, this project is the page you are visiting right now. A portfolio to list some of my projects and with links to various social media accounts.',
                    '<br>',
                    'I used this project to make my first steps with Vue 3 / Nuxt 3 and the composition api. I also built the design completely with Tailwind CSS.',
                    '<br>',
                    'By the way, the background is self-made and represents the bundled source code from the project Pi-Control and can be downloaded in full quality from my <a class="hover:text-primary underline underline-offset-2" href="https://www.deviantart.com/p3r0/art/Source-Code-Wallpaper-4k-912021763" target="_blank">Deviantart</a> page.',
                    '<br>',
                    'If you want to get in contact with me, you can do so via <a class="hover:text-primary underline underline-offset-2" href="https://www.linkedin.com/in/bastian-jakobs/" target="_blank">LinkedIn</a> or one of the other social media links in the footer.',
                    '<br>',
                    '<span class="badge">Update</span>',
                    'I made a total redesign of the page. The new version uses a combination of Tailwind + DaisyUI. You can see the old version in the image gallery below.'
                ]
            },
            {
                name: 'Host Alive',
                projectName: 'host-alive',
                updates: false,
                url: 'https://github.com/borsTiHD/host-alive',
                topics: ['nodejs', 'net-ping', 'pushover-notifications'],
                preview: '/img/projects/host-alive/2_continous.png',
                images: [
                    '/img/projects/host-alive/1_repeat-mode_with_report.png',
                    '/img/projects/host-alive/2_continous.png'
                ],
                introduction: 'This is a small Node.js project to ping a host/url with a few options and can be used to monitor a device or server.',
                description: [
                    'This is a small Node.js project to ping a host/url with a few options and can be used to monitor a device or server.',
                    '<br>',
                    'The project is written with Node.js and uses the net-ping library. The project also uses the pushover-notifications library for sending push notifications.',
                    '<br>',
                    'To start the app you first have to set a few settings in the .env variables. According to the example of the .env.example, the mode and the target is set there. HOST is the host to ping (it can be either an IP address or a url). REPEAT / CONTINOUS determines how often or whether pinging should be permanent. If a notification is to be sent in case of an unsuccessful ping, the pushover token can also be entered.',
                    '<br>',
                    'After that, the app can be launched as a console application. If a url was specified as the target, an attempt is first made to resolve the IP address. Now the pings are sent and the runtimes are displayed. If several pings in a row fail within a certain period, a notification will be sent to the user via Pushover with a report.',
                    '<br>',
                    'You can find the project on GitHub and is open source.'
                ]
            }
        ],
        projectsTestData: [...Array(10).keys()].map((i) => ({
            name: `Project ${i + 1}`,
            projectName: `project-${i + 1}`,
            updates: false,
            url: 'https://github.com/borsTiHD',
            topics: ['vue', 'nuxt', 'express', 'jws', 'socket.io'],
            preview: `https://picsum.photos/id/${i * 10}/860/860`,
            images: [...Array(10).keys()].map((x) => `https://picsum.photos/id/${i * 10 + x}/860/860`),
            introduction: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        }))
    }),
    getters: {
        getProjects: (state) => state.projects,
        getProjectByName: (state) => (name: string) => state.projects.find((project) => project.projectName === name)
    }
})
