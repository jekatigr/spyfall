import * as React from 'react';

import ProgressBar from 'components/common/ProgressBar/ProgressBar';
import Players from 'components/Settings/Players/Players';
import Spies from 'components/Settings/Spies/Spies';
import Locations from 'components/Settings/Locations/Locations';
import TimeSettings from 'components/Settings/TimeSettings/TimeSettings';

import { storeContext } from 'store';
import { SETTINGS_STATES } from 'store/reducers/settings';

import './Settings.less';

const Settings: React.FunctionComponent = () => {
    const {
        state: {
            settings: { settingsState },
        },
    } = React.useContext(storeContext);

    let body;
    let showProgressBar = true;
    let progressBarStep = 0;
    switch (settingsState) {
        case SETTINGS_STATES.PLAYERS:
            progressBarStep = 1;
            body = <Players />;
            break;
        case SETTINGS_STATES.SPIES:
            progressBarStep = 2;
            body = <Spies />;
            break;
        case SETTINGS_STATES.LOCATIONS:
            progressBarStep = 3;
            body = <Locations />;
            break;
        case SETTINGS_STATES.TIME_SETTINGS:
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
