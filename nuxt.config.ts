// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ["~/assets/sass/app.sass"],
	pages: true,
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			titleTemplate: "%s | Powerline Group",
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/favicon-64x64.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/favicon-16x16.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/apple-touch-icon-180x180.png",
				},
				{
					rel: "mask-icon",
					href: "http://92.205.130.62:5000/images/icons/mask-icon.svg",
					color: "#32393C",
				},
				{
					rel: "icon",
					sizes: "192x192",
					href: "http://92.205.130.62:5000/images/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					href: "http://92.205.130.62:5000/images/android-chrome-512x512.png",
				},
			],
			meta: [
				{ name: "theme-color", content: "#32393C" },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "author", content: "MyMonty Europe" },
				{ name: "og:site_name", content: "MyMonty Europe" },
				{ name: "og:image:alt", content: "MyMonty Europe" },
				{ name: "og:image:width", content: "1200" },
				{ name: "og:image:height", content: "630" },
				{ name: "mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
				{ name: "robots", content: "index, follow" },
			],
		},
	},
	googleFonts: {
		families: {
			'Albert Sans': '400..700'
		}
	},
	modules: ['@nuxtjs/google-fonts', "@nuxtjs/tailwindcss", "nuxt-swiper"]
})