const path = require('path');
const withLess = require('@zeit/next-less');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(withLess({
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
    assetPrefix: process.env.ASSET_PREFIX || '',
    env: {
        ASSET_PREFIX: process.env.ASSET_PREFIX || '',
    },
}));
