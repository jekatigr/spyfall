import * as React from 'react';

import RolesDistribution from 'components/Game/RolesDistribution/RolesDistribution';
import Round from 'components/Game/Round/Round';

import { useStore } from '../../store';
import { GAME_STATES } from '../../store/reducers/game';

const Game: React.FunctionComponent = () => {
    const {
        state: {
            game: { gameState },
        },
    } = useStore();

    let body;
    switch (gameState) {
        case GAME_STATES.ROLES_DISTRIBUTION:
            body = <RolesDistribution />;
            break;
        case GAME_STATES.ROUND:
            body = <Round type="ROUND" />;
            break;
        case GAME_STATES.DISCUSSION:
            body = <Round type="DISCUSSION" />;
            break;
        case GAME_STATES.IDENTIFY_SPIES:
            body = <> Идентефикация </>;
            break;
        case GAME_STATES.RESULTS:
            body = <> Результаты </>;
            break;
        default:
        // console.error('TODO');
    }

    return <div className="app-container">{body}</div>;
};

export default Game;
