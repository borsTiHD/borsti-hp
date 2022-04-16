
const config = useRuntimeConfig()
export default defineEventHandler(() => {
	return {
		api: 'works',
		TWITTER_KEY: config.TWITTER_KEY,
		TWITTER_SECRET: config.TWITTER_SECRET
	}
})
