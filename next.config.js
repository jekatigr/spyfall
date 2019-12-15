const path = require('path');
const withLess = require('@zeit/next-less');

module.exports = withLess({
    webpack(config, options) {
        config.resolve = {
            ...config.resolve,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules'
            ],
        };
        return config;
    },
    assetPrefix: process.env.ASSET_PREFIX,
});
