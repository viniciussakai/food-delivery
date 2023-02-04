module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],

		plugins: [
			[
				require.resolve("babel-plugin-module-resolver"),
				{
					extensions: [
						".js",
						".jsx",
						".ts",
						".tsx",
						".android.js",
						".android.tsx",
						".ios.js",
						".ios.tsx",
					],
					root: ["."],

					alias: {
						"@components": "./src/src/components",
						"@screens": "./src/screens",
						"@utils": "./src/utils",
						"@hooks": "./src/hooks",
						"@assets": "./src/assets",
						"@types": "./src/types",
						"@routes": "./src/routes",
						"@config": "./src/config",
						"@services": "./src/services",
						"@styles": "./src/styles",
					},
				},
			],
		],
	};
};
