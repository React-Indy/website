/**
 * File for extending the default Next.js PostCSS configuration.
 * https://github.com/postcss/postcss
 */

module.exports = {
	plugins: [
		/**
		 * The default Next.js configuration. Required to add here because the
		 * default behavior is disabled when a custom configuration file is used.
		 * https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins
		 */
		"postcss-flexbugs-fixes",
		[
			"postcss-preset-env",
			{
				autoprefixer: {
					flexbox: "no-2009",
				},
				stage: 3,
				features: {
					"custom-properties": false,
				},
			},
		],

		/**
		 * Enables nesting selectors withing CSS module files.
		 * https://www.npmjs.com/package/postcss-nesting
		 */
		"postcss-nesting",

		/**
		 * Enables using `@import-glob` in `src/css/global.css`.
		 * https://www.npmjs.com/package/postcss-import-ext-glob
		 */
		"postcss-import-ext-glob",
		"postcss-import",
	],
};
