const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	exportTrailingSlash: true,
	assetPrefix: isProd ? '/speffer' : '',
	exportPathMap: function() {
		return {
			'/': { page: '/' }
		};
	}
};