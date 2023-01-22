import { Config } from 'tailwindcss'

export default <Config> {
    content: [
        'app.vue'
        // Add all files that contain Tailwind classes
        // e.g. './modules/**/*.{vue,js,ts}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
                roboto: ['Roboto']
            },
            colors: {
                // https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557
                // https://coolors.co/palette/780000-c1121f-fdf0d5-003049-669bbc
                // https://coolors.co/palette/2b2d42-8d99ae-edf2f4-ef233c-d90429
                // primary: '#FF2943', // #FF2943 - #EF233C
                // 'primary-light': '#D90429',
                // secondary: '#EDF2F4',
                // 'bg-light': '#8D99AE',
                // bg: '#2B2D42',
                // 'body-bg': '#202125',
                magenta: '#e20074'
            },
            backgroundImage: {
                'dark-pattern': 'linear-gradient(to right bottom, rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.8)), url(\'~/assets/img/wallpaper.jpg\')',
                'light-pattern': 'linear-gradient(to right bottom, rgba(100, 100, 100, 0.8), rgba(200, 200, 200, 0.8)), url(\'~/assets/img/wallpaper.jpg\')',
                'sepia-pattern': 'linear-gradient(to right bottom, rgba(68, 35, 16, 0.8), rgba(210, 199, 149, 0.8)), url(\'~/assets/img/wallpaper.jpg\')',
                'sepia-dark-pattern': 'linear-gradient(to right bottom, rgba(68, 35, 16, 0.8), rgba(106, 54, 25, 0.8)), url(\'~/assets/img/wallpaper.jpg\')',
                'valentine-pattern': 'linear-gradient(to right bottom, rgba(178, 123, 154, 0.8), rgba(255, 175, 199, 0.8)), url(\'~/assets/img/wallpaper.jpg\')',
                'cyberpunk-pattern': 'linear-gradient(to right bottom, rgba(130, 121, 0, 0.8), rgba(239, 255, 0, 0.8)), url(\'~/assets/img/wallpaper.jpg\')'
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                'light': {
                    'primary': '#D90429',
                    'secondary': '#038e76',
                    'accent': '#f28c9b',
                    'neutral': '#212037',
                    'base-100': '#F3F3F6',
                    'info': '#5399EA',
                    'success': '#1FB26D',
                    'warning': '#EEB053',
                    'error': '#E4473F'
                }
            },
            {
                'dark': {
                    'primary': '#FF2943',
                    'primary-content': '#131616',
                    'secondary': '#d8ccff',
                    'accent': '#4e53ba',
                    'neutral': '#1b1d1d', // '#414558', // '#1C141F'
                    'base-100': '#212121', // '#282a36', // '#29293D'
                    'base-content': '#f8f8f2',
                    'info': '#378CD2',
                    'success': '#3EE5CC',
                    'warning': '#FBC165',
                    'error': '#F82A57'
                }
            },
            {
                'slime': {
                    'primary': '#54ea44',
                    'secondary': '#d8ccff',
                    'accent': '#4e53ba',
                    'neutral': '#1C141F',
                    'base-100': '#29293D',
                    'info': '#378CD2',
                    'success': '#3EE5CC',
                    'warning': '#FBC165',
                    'error': '#F82A57'
                }
            },
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter'
        ]
    }
}
