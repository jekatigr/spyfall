import * as React from 'react';
import Head from 'next/head';
import App from 'components/App';

import prefixedAsset from 'utils/assetPrefix';
import { StoreProvider } from 'store';

const IndexPage: React.FunctionComponent = () => (
    <>
        <Head>
            <title>Spyfall Game</title>
            <link rel="manifest" href={prefixedAsset('manifest.json')} />
        </Head>
        <StoreProvider>
            <App />
        </StoreProvider>
    </>
);

export default IndexPage;
