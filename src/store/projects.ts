import { defineStore } from 'pinia'
export const useProjectsStore = defineStore({
	id: 'projects-store',
	state: () => ({
		projects: [
			{
				name: 'Pi-Control',
				projectName: 'pi-control',
				url: 'https://github.com/borsTiHD/pi-control',
				topics: ['vue', 'nuxt', 'nodejs', 'socket.io', 'express', 'xterm', 'bcryptjs', 'jwt', 'swagger', 'vuetify', 'pwa'],
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
				introduction: 'Pi-Control helps with gathering information, as well as to simplify controlling your raspberry pi.<br>The project is based on the Vue.js framework and uses Nuxt.js for the frontend and Socket.io in combination with Express (REST Api) for the backend. It is open source and can be found on GitHub.',
				description: [
					'Pi-Control helps with gathering information, as well as to simplify controlling your raspberry pi.',
					'The project is based on the Vue.js framework and uses Nuxt.js for the frontend and Socket.io in combination with Express (REST Api) for the backend. It is open source and can be found on GitHub.',
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
				topics: ['electron', 'vue', 'nuxt', 'vuetify', 'axios', 'express', 'ssh2', 'xterm'],
				preview: '/img/projects/autofan/15-Masscall-Darkmode.jpg',
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
				introduction: 'AutoFAN is a large-scale desktop application based on Electron. It is a monitoring and management system for network devices such as DSLAM/MSAN/OLT/BNGs and is used within the Service Management Center by Deutsche Telekom AG.',
				description: [
					'AutoFAN is a large-scale desktop application based on Electron. It is a monitoring and management system for network devices such as DSLAM/MSAN/OLT/BNGs and is used within the Service Management Center by Deutsche Telekom AG.',
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
				topics: ['php', 'mysql', 'oracle', 'bootstrap', 'jquery', 'datatables.net'],
				preview: '/img/no_image.jpg',
				images: [],
				introduction: 'Description is coming soon.',
				description: 'Description is coming soon.'
			},
			{
				name: 'Diablo 2 Runewords Companion 😈',
				projectName: 'diablo2-runewords-companion',
				url: 'https://github.com/borsTiHD/diablo2-runewords-companion',
				topics: ['vue', 'nuxt', 'vuetify'],
				preview: '/img/no_image.jpg',
				images: [],
				introduction: 'This is a small companion App for Diablo 2 Resurrected. It was designed to help with building runewords, as well as get information about all runes.',
				description: 'Description is coming soon.'
			},
			{
				name: 'Meme Stonks 🚀',
				projectName: 'meme-stonks',
				url: 'https://github.com/borsTiHD/meme-stonks',
				topics: ['vue', 'nuxt', 'vuetify', 'axios', 'chart.js', 'idb'],
				preview: '/img/no_image.jpg',
				images: [],
				introduction: 'Description is coming soon.',
				description: 'Description is coming soon.'
			},
			{
				name: 'Homepage: borstihd.de',
				projectName: 'borsti-hp',
				url: 'https://github.com/borsTiHD/borsti-hp',
				topics: ['vue3', 'nuxt3', 'typescript', 'tailwindcss', 'pinia'],
				preview: '/img/no_image.jpg',
				images: [],
				introduction: 'Description is coming soon.',
				description: 'Description is coming soon.'
			},
			{
				name: 'Host Alive',
				projectName: 'host-alive',
				url: 'https://github.com/borsTiHD/host-alive',
				topics: ['nodejs', 'net-ping', 'pushover-notifications'],
				preview: '/img/no_image.jpg',
				images: [],
				introduction: 'Small project for pinging a host/url with a few options.',
				description: 'Description is coming soon.'
			}
		],
		projectsTestData: [...Array(10).keys()].map((i) => ({
			name: `Project ${i + 1}`,
			projectName: `project-${i + 1}`,
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
		getProjectByName: (state) => (name) => state.projects.find((project) => project.projectName === name)
	}
})
