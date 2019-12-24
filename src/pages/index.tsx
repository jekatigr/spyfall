import * as React from 'react';
import Head from 'next/head';
import App from 'components/App';

import prefixedAsset from 'utils/assetPrefix';
import { Store } from 'store';

const IndexPage: React.FunctionComponent = () => (
    <>
        <Head>
            <title>Spyfall Game</title>
            <link rel="manifest" href={prefixedAsset('manifest.json')} />
        </Head>
        <Store>
            <App />
        </Store>
    </>
);

export default IndexPage;
