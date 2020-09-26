import * as React from 'react';

import Navigation from 'components/common/Navigation/Navigation';
import RolesDistribution from 'components/Game/RolesDistribution/RolesDistribution';
import Questions from 'components/Game/Questions/Questions';
import Discussion from 'components/Game/Discussion/Discussion';
import IdentifySpies from 'components/Game/IdentifySpies/IdentifySpies';
import Results from 'components/Game/Results/Results';
import getMenuItems from 'utils/getMenuItems';

import { useStore } from 'store';
import { GAME_PHASES } from 'store/reducers/game';

const Game: React.FC = () => {
    const {
        state: {
            game: { phase },
        },
        dispatch,
    } = useStore();

    let body;
    switch (phase) {
        case GAME_PHASES.ROLES_DISTRIBUTION:
            body = <RolesDistribution />;
            break;
        case GAME_PHASES.QUESTIONS:
            body = <Questions />;
            break;
        case GAME_PHASES.DISCUSSION:
            body = <Discussion />;
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
            <Navigation type="menu" menuItems={getMenuItems(dispatch)} />
            {body}
        </>
    );
};

export default Game;
