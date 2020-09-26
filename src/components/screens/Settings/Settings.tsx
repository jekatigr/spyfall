import * as React from 'react';

import ProgressBar from 'components/common/ProgressBar/ProgressBar';
import PlayersList from 'components/screens/Settings/PlayersList/PlayersList';
import Spies from 'components/screens/Settings/Spies/Spies';
import Locations from 'components/screens/Settings/Locations/Locations';
import TimeSettings from 'components/screens/Settings/TimeSettings/TimeSettings';

import { useStore } from 'store';
import { SETTINGS_SCREENS } from 'store/screen/constants';

const PROGRESS_BAR_STEPS = {
    [SETTINGS_SCREENS.PLAYERS]: 1,
    [SETTINGS_SCREENS.SPIES]: 2,
    [SETTINGS_SCREENS.TIME]: 3,
    [SETTINGS_SCREENS.LOCATIONS]: 4,
};

const Settings: React.FC = () => {
    const {
        state: {
            screen: { settings },
        },
    } = useStore();

    const isPlayersScreen = React.useMemo(() => settings === SETTINGS_SCREENS.PLAYERS, [settings]);
    const isSpiesScreen = React.useMemo(() => settings === SETTINGS_SCREENS.SPIES, [settings]);
    const isTimeScreen = React.useMemo(() => settings === SETTINGS_SCREENS.TIME, [settings]);
    const isLocationsScreen = React.useMemo(() => settings === SETTINGS_SCREENS.LOCATIONS, [settings]);

    return (
        <>
            <ProgressBar dotsCount={4} step={PROGRESS_BAR_STEPS[settings]} />
            {isPlayersScreen && <PlayersList />}
            {isSpiesScreen && <Spies />}
            {isTimeScreen && <TimeSettings />}
            {isLocationsScreen && <Locations />}
        </>
    );
};

export default Settings;
