const path = require('path');
const withOffline = require('next-offline');
const withLess = require('@zeit/next-less');

const nextConfig = {
    webpack(config, options) {
        config.resolve = {
            ...config.resolve,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            modules: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'public'),
                'node_modules'
            ],
        };
        return config;
    },
    publicPath: process.env.ASSET_PREFIX || '',
    assetPrefix: process.env.ASSET_PREFIX || '',
    // workboxOpts: {
    //     globDirectory: '.',
    //     globPatterns: ['./(public|src)/**/*.*']
    // }
    registerSwPrefix: '/spyfall',
    scope: '/spyfall/'
    // workboxOpts: {
    //     swDest: 'static/service-worker.js',
    // },
    // experimental: {
    //     async rewrites() {
    //         return [
    //             {
    //                 source: '/service-worker.js',
    //                 destination: '/_next/static/service-worker.js',
    //             },
    //         ]
    //     },
    // },
};

module.exports = withOffline(withLess(nextConfig));

