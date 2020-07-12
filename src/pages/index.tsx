import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { StoreProvider } from 'store';
import prefixedAsset from 'utils/assetPrefix';

const App = dynamic(() => import('components/App'), { ssr: false });

const IndexPage: React.FC = () => (
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
