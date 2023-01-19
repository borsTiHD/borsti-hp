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
                primary: '#FF2943', // #FF2943 - #EF233C
                'primary-light': '#D90429',
                secondary: '#EDF2F4',
                'bg-light': '#8D99AE',
                bg: '#2B2D42',
                'body-bg': '#202125',
                magenta: '#e20074'
            }
        }
    },
    plugins: []
}