import * as React from 'react';
import Head from 'next/head';
import App from 'components/App';
import { StoreProvider } from 'store';
import prefixedAsset from 'utils/assetPrefix';

const IndexPage: React.FunctionComponent = () => (
    <>
        <Head>
            <title>Spyfall Game</title>
            <link rel="manifest" href={prefixedAsset('manifest.json')} />
            <link rel="icon" type="image/png" href={prefixedAsset('favicon.png')} />
        </Head>
        <StoreProvider>
            <App />
        </StoreProvider>
    </>
);

export default IndexPage;
