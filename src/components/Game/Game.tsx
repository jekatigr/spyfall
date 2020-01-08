import * as React from 'react';

import Navigation from 'components/common/Navigation/Navigation';
import RolesDistribution from 'components/Game/RolesDistribution/RolesDistribution';
import Round from 'components/Game/Round/Round';
import IdentifySpies from 'components/Game/IdentifySpies/IdentifySpies';
import Results from 'components/Game/Results/Results';

import { useStore } from 'store';
import { GAME_PHASES } from 'store/reducers/game';

const Game: React.FunctionComponent = () => {
    const {
        state: {
            game: { phase },
        },
    } = useStore();

    let body;
    switch (phase) {
        case GAME_PHASES.ROLES_DISTRIBUTION:
            body = <RolesDistribution />;
            break;
        case GAME_PHASES.QUESTIONS:
            body = <Round phase="QUESTIONS" />;
            break;
        case GAME_PHASES.DISCUSSION:
            body = <Round phase="DISCUSSION" />;
            break;
        case GAME_PHASES.IDENTIFY_SPIES:
            body = <IdentifySpies />;
            break;
        case GAME_PHASES.RESULTS:
            body = <Results />;
            break;
        default:
        // console.error('TODO');
    }

    return (
        <>
            <Navigation type="menu" />
            {body}
        </>
    );
};

export default Game;
