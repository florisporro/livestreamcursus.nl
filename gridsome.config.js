module.exports = {
	siteName: "livestreamcursus.nl",
	siteDescription:
		"Dé live spoedcursus voor livestreaming. Van matties, voor matties.",
	siteUrl: "https://livestreamcursus.nl/",
	plugins: [
		{
			use: "gridsome-plugin-tailwindcss",
			options: {
				tailwindConfig: "./tailwind.config.js",
				purgeConfig: {
					// whitelistPatterns: [ /bg-$/, /text-$/, /-enter$/, /-leave-to$/ ]
				},
				presetEnvConfig: {},
				shouldPurge: false,
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
