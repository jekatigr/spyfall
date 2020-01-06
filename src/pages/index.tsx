import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { StoreProvider } from 'store';
import prefixedAsset from 'utils/assetPrefix';

const App = dynamic(() => import('components/App'), { ssr: false });

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
