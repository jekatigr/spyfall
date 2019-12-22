import * as React from 'react';
import Head from 'next/head';
import App from 'components/App';
// import prefixedAsset from 'utils/assetPrefix';

const IndexPage: React.FunctionComponent = () => (
    <>
        <Head>
            <title>Spyfall Game</title>
            <link rel="manifest" href="/spyfall/manifest.json" />
        </Head>
        <App />
    </>
);

export default IndexPage;
