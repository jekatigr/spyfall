import * as React from 'react';

import ProgressBar from 'components/common/ProgressBar/ProgressBar';
import PlayersList from 'components/Settings/PlayersList/PlayersList';
import PlayerProfile from 'components/Settings/PlayerProfile/PlayerProfile';
import Spies from 'components/Settings/Spies/Spies';
import Locations from 'components/Settings/Locations/Locations';
import TimeSettings from 'components/Settings/TimeSettings/TimeSettings';
import Navigation from 'components/common/Navigation/Navigation';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_PLAYERS_LIST, SETTINGS_PHASES } from 'store/reducers/settings/settings';

const Settings: React.FunctionComponent = () => {
    const {
        state: {
            settings: { phase },
        },
        dispatch,
    } = useStore();

    let body;
    let secondaryScreen = false;
    let progressBarStep = 0;
    switch (phase) {
        case SETTINGS_PHASES.PLAYERS_LIST:
            progressBarStep = 1;
            body = <PlayersList />;
            break;
        case SETTINGS_PHASES.PLAYER_PROFILE:
            secondaryScreen = true;
            body = <PlayerProfile />;
            break;
        case SETTINGS_PHASES.SPIES:
            progressBarStep = 2;
            body = <Spies />;
            break;
        case SETTINGS_PHASES.TIME_SETTINGS:
            progressBarStep = 3;
            body = <TimeSettings />;
            break;
        case SETTINGS_PHASES.LOCATIONS:
            progressBarStep = 4;
            body = <Locations />;
            break;
        default:
        // console.error('TODO');
    }

    return (
        <>
            {secondaryScreen ? (
                <Navigation type="back" onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST)} />
            ) : (
                <Navigation type="menu" />
            )}
            {!secondaryScreen ? <ProgressBar dotsCount={4} step={progressBarStep} /> : ''}
            {body}
        </>
    );
};

export default Settings;
