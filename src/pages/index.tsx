import * as React from 'react';
import App from 'components/App';
import { StoreContainer } from 'Store';

const IndexPage: React.FunctionComponent = () => (
    <StoreContainer>
        <App />
    </StoreContainer>
);

export default IndexPage;
