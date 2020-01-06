const isProd = process.env.NODE_ENV === 'production';

console.log("NODE ENV: " + process.env.NODE_ENV);

module.exports = {
	exportTrailingSlash: true,
	assetPrefix: isProd ? '/speffer' : '',
	exportPathMap: function() {
		return {
			'/': { page: '/' }
		};
	}
};