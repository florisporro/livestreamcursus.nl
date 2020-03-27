module.exports = {
	siteName: "Gridsome",

	plugins: [
		{
			use: "gridsome-plugin-tailwindcss",
			options: {
				tailwindConfig: "./tailwind.config.js",
				purgeConfig: {},
				presetEnvConfig: {},
				shouldPurge: true,
				shouldImport: true,
				shouldTimeTravel: true,
				shouldPurgeUnusedKeyframes: true
			}
		},
		{
			use: "gridsome-source-static-meta",
			options: {
				path: "settings/*.json"
			}
		},
		{
			use: "gridsome-plugin-pug",
			options: {
				pug: {
					/* Options for `pug-plain-loader` */
				},
				pugLoader: {
					/* Options for `pug-loader` */
				}
			}
		}
	],
	chainWebpack: config => {
		config.resolve.alias.set("@modules", "@/resources/js/modules");
		config.resolve.alias.set("@utilities", "@/resources/js/utilities");
	}
};
