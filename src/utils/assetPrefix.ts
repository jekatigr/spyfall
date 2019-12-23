const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

export default (assetPath: string): string => `${assetPrefix}/${assetPath}`;
