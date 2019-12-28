import * as React from 'react';

import Settings from 'components/Settings/Settings';
import Game from 'components/Game/Game';
import CardsSlider from 'components/Game/CardsSlider/CardsSlider';

import { storeContext } from 'store';

import { APP_STATES } from 'store/reducers/app';
import './App.less';

const cards = [
    {
        name: 'Игрок 1',
        isSpy: true,
    },
    {
        name: 'Игрок 2',
        isSpy: true,
    },
    {
        name: 'Игрок 3',
        isSpy: true,
    },
    {
        name: 'Игрок 4',
        isSpy: true,
    },
    {
        name: 'Игрок 5',
        isSpy: true,
    },
    {
        name: 'Игрок 6',
        isSpy: true,
    },
    {
        name: 'Игрок 7',
        isSpy: true,
    },
    {
        name: 'Игрок 8',
        isSpy: true,
    },
];

const App: React.FunctionComponent = () => {
    const {
        state: {
            app: { appState },
        },
    } = React.useContext(storeContext);

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
        <div className="app-container">
            <CardsSlider cards={cards} location="Москва" spies={cards.filter(s => s.isSpy).map(s => s.name)} />
            {body}
        </div>
    );
};

export default App;
