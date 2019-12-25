import * as React from 'react';

import { storeContext } from 'store';
import { APP_STATES } from 'store/reducers/app';

import Settings from 'components/Settings/Settings';
import Game from 'components/Game/Game';

const App: React.FunctionComponent = () => {
    const { state: { app: { appState } } } = React.useContext(storeContext);

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
