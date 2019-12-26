import * as React from 'react';

import './Settings.less';

import { storeContext } from 'store';

import { SETTINGS_STATES } from 'store/reducers/settings';

import ProgressBar from 'components/ProgressBar';
import Players from 'components/Settings/Players';
import StartScreen from 'components/Settings/StartScreen';
import Spies from 'components/Settings/Spies';
import Rules from 'components/Settings/Rules';
import Locations from 'components/Settings/Locations';
import ExtraSettings from 'components/Settings/ExtraSettings';

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
        case SETTINGS_STATES.START_SCREEN:
            showProgressBar = false;
            body = <StartScreen />;
            break;
        case SETTINGS_STATES.RULES:
            showProgressBar = false;
            body = <Rules />;
            break;
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
        case SETTINGS_STATES.EXTRA_SETTINGS:
            showProgressBar = false;
            body = <ExtraSettings />;
            break;
        default:
        // console.error('TODO');
    }

    return (
        <div>
            <div className="container">
                {showProgressBar ? <ProgressBar dotsCount={3} step={progressBarStep} /> : ''}
                {body}
            </div>
        </div>
    );
};

export default Settings;
