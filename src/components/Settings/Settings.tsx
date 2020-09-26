import * as React from 'react';

import ProgressBar from 'components/common/ProgressBar/ProgressBar';
import PlayersList from 'components/Settings/PlayersList/PlayersList';
import PlayerProfile from 'components/Settings/PlayerProfile/PlayerProfile';
import BasicLocations from 'components/Settings/BasicLocations/BasicLocations';
import CustomLocations from 'components/Settings/CustomLocations/CustomLocations';
import Spies from 'components/Settings/Spies/Spies';
import Locations from 'components/Settings/Locations/Locations';
import TimeSettings from 'components/Settings/TimeSettings/TimeSettings';
import Navigation from 'components/common/Navigation/Navigation';
import getMenuItems from 'utils/getMenuItems';

import { useStore } from 'store';
import { SETTINGS_SCREENS } from 'store/screen/constants';
import { setSettingsScreen } from 'store/screen/actions';

const Settings: React.FC = () => {
    const {
        state: {
            screen: { settings },
        },
        dispatch,
    } = useStore();

    let body;
    let secondaryScreen = false;
    let progressBarStep = 0;
    let backButtonAction;
    switch (settings) {
        case SETTINGS_SCREENS.PLAYERS:
            progressBarStep = 1;
            body = <PlayersList />;
            break;
        case SETTINGS_SCREENS.PLAYER_PROFILE:
            secondaryScreen = true;
            backButtonAction = setSettingsScreen(SETTINGS_SCREENS.PLAYERS);
            body = <PlayerProfile />;
            break;
        case SETTINGS_SCREENS.SPIES:
            progressBarStep = 2;
            body = <Spies />;
            break;
        case SETTINGS_SCREENS.TIME:
            progressBarStep = 3;
            body = <TimeSettings />;
            break;
        case SETTINGS_SCREENS.LOCATIONS:
            progressBarStep = 4;
            body = <Locations />;
            break;
        case SETTINGS_SCREENS.BASIC_LOCATIONS:
            secondaryScreen = true;
            backButtonAction = setSettingsScreen(SETTINGS_SCREENS.LOCATIONS);
            body = <BasicLocations />;
            break;
        case SETTINGS_SCREENS.CUSTOM_LOCATIONS:
            secondaryScreen = true;
            backButtonAction = setSettingsScreen(SETTINGS_SCREENS.LOCATIONS);
            body = <CustomLocations />;
            break;
        default:
            progressBarStep = 1;
            body = <PlayersList />;
            break;
    }

    return (
        <>
            {secondaryScreen ? (
                <Navigation type="back" onClick={(): void => dispatch(backButtonAction)} />
            ) : (
                <Navigation menuItems={getMenuItems(dispatch)} />
            )}
            {!secondaryScreen ? <ProgressBar dotsCount={4} step={progressBarStep} /> : ''}
            {body}
        </>
    );
};

export default Settings;
