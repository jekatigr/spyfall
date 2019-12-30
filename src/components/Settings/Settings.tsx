import * as React from 'react';

import ProgressBar from 'components/common/ProgressBar/ProgressBar';
import PlayersList from 'components/Settings/PlayersList/PlayersList';
import PlayerProfile from 'components/Settings/PlayerProfile/PlayerProfile';
import Spies from 'components/Settings/Spies/Spies';
import Locations from 'components/Settings/Locations/Locations';
import TimeSettings from 'components/Settings/TimeSettings/TimeSettings';

import { useStore } from 'store';
import { SETTINGS_PHASES } from 'store/reducers/settings/settings';

import './Settings.less';

const Settings: React.FunctionComponent = () => {
    const {
        state: {
            settings: { phase },
        },
    } = useStore();

    let body;
    let showProgressBar = true;
    let progressBarStep = 0;
    switch (phase) {
        case SETTINGS_PHASES.PLAYERS_LIST:
            progressBarStep = 1;
            body = <PlayersList />;
            break;
        case SETTINGS_PHASES.PLAYER_PROFILE:
            showProgressBar = false;
            body = <PlayerProfile />;
            break;
        case SETTINGS_PHASES.SPIES:
            progressBarStep = 2;
            body = <Spies />;
            break;
        case SETTINGS_PHASES.LOCATIONS:
            progressBarStep = 3;
            body = <Locations />;
            break;
        case SETTINGS_PHASES.TIME_SETTINGS:
            showProgressBar = false;
            body = <TimeSettings />;
            break;
        default:
        // console.error('TODO');
    }

    return (
        <>
            {showProgressBar ? <ProgressBar dotsCount={3} step={progressBarStep} /> : ''}
            {body}
        </>
    );
};

export default Settings;
