import * as React from 'react';

import { StoreContext, APP_STATES } from 'Store';

import Settings from 'components/Settings/Settings';
import Game from 'components/Game/Game';

const App: React.FunctionComponent = () => {
    const { state: { appState } } = React.useContext(StoreContext);

    let body;
    switch (appState) {
        case APP_STATES.SETTINGS:
            body = <Settings />;
            break;
        case APP_STATES.GAME:
            body = <Game />;
            break;
        default:
            // console.error('TODO');
    }

    return (
        <div>
            {body}
        </div>
    );
};

export default App;
