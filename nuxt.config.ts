import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    runtimeConfig: {
        // The private keys which are only available within server-side
        TWITTER_KEY: process.env.TWITTER_KEY || '',
        TWITTER_SECRET: process.env.TWITTER_SECRET || '',
        // Keys within public, will be also exposed to the client-side
        public: {
            publicKey: '123'
        }
    },
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: ''
    },
    vite: {
        plugins: [
            eslintPlugin()
        ]
    }
})
