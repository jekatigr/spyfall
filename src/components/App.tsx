import * as React from 'react';

import StartScreen from 'components/StartScreen/StartScreen';
import Rules from 'components/Rules/Rules';
import Settings from 'components/Settings/Settings';
import Game from 'components/Game/Game';

import { useStore } from 'store';
import { APP_STATES } from 'store/reducers/app';
import './App.less';

const App: React.FunctionComponent = () => {
    const {
        state: {
            app: { appState },
        },
    } = useStore();

    let body;
    switch (appState) {
        case APP_STATES.START_SCREEN:
            body = <StartScreen />;
            break;
        case APP_STATES.RULES:
            body = <Rules />;
            break;
        case APP_STATES.SETTINGS:
            body = <Settings />;
            break;
        case APP_STATES.GAME:
            body = <Game />;
            break;
        default:
        // console.error('TODO');
    }

    return <div className="app-container">{body}</div>;
};

export default App;
