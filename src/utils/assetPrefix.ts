const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const assetPrefixUtil = (assetPath: string): string => `${assetPrefix}/${assetPath}`;

export default assetPrefixUtil;
