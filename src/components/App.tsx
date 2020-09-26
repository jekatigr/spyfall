import * as React from 'react';

import Navigation from 'components/common/Navigation/Navigation';
import StartScreen from 'components/StartScreen/StartScreen';
import Rules from 'components/Rules/Rules';
import Settings from 'components/Settings/Settings';
import PlayerProfile from 'components/Settings/PlayerProfile/PlayerProfile';
import BasicLocations from 'components/Settings/BasicLocations/BasicLocations';
import CustomLocations from 'components/Settings/CustomLocations/CustomLocations';
import RolesDistribution from 'components/RolesDistribution/RolesDistribution';
import Questions from 'components/Questions/Questions';
import Discussion from 'components/Discussion/Discussion';
import IdentifySpies from 'components/IdentifySpies/IdentifySpies';
import Results from 'components/Results/Results';
import getMenuItems from 'utils/getMenuItems';

import { useStore } from 'store';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { setScreen, setSettingsScreen } from 'store/screen/actions';

import './App.less';

const SCREENS_WITH_BACK_BUTTON = [
    SCREENS.RULES,
    SCREENS.PLAYER_PROFILE,
    SCREENS.BASIC_LOCATIONS,
    SCREENS.CUSTOM_LOCATIONS,
];

const App: React.FC = () => {
    const {
        state: {
            screen: { current },
        },
        dispatch,
    } = useStore();

    const hasMenu = React.useMemo(() => current !== SCREENS.START_SCREEN, [current]);
    const hasSandwich = React.useMemo(() => hasMenu && !SCREENS_WITH_BACK_BUTTON.includes(current), [current]);
    const hasBackButton = React.useMemo(() => hasMenu && SCREENS_WITH_BACK_BUTTON.includes(current), [current]);

    const isStartScreen = React.useMemo(() => current === SCREENS.START_SCREEN, [current]);
    const isRulesScreen = React.useMemo(() => current === SCREENS.RULES, [current]);
    const isSettingsScreen = React.useMemo(() => current === SCREENS.SETTINGS, [current]);
    const isPlayerProfileScreen = React.useMemo(() => current === SCREENS.PLAYER_PROFILE, [current]);
    const isBasicLocationsScreen = React.useMemo(() => current === SCREENS.BASIC_LOCATIONS, [current]);
    const isCustomLocationsScreen = React.useMemo(() => current === SCREENS.CUSTOM_LOCATIONS, [current]);
    const isRolesDistributionScreen = React.useMemo(() => current === SCREENS.ROLES_DISTRIBUTION, [current]);
    const isQuestionsScreen = React.useMemo(() => current === SCREENS.QUESTIONS, [current]);
    const isDiscussionScreen = React.useMemo(() => current === SCREENS.DISCUSSION, [current]);
    const isIdentifySpiesScreen = React.useMemo(() => current === SCREENS.IDENTIFY_SPIES, [current]);
    const isResultsScreen = React.useMemo(() => current === SCREENS.RESULTS, [current]);

    const backButtonAction = React.useMemo(() => {
        if (isRulesScreen) {
            return setScreen(SCREENS.START_SCREEN);
        }

        if (isPlayerProfileScreen) {
            return setSettingsScreen(SETTINGS_SCREENS.PLAYERS);
        }

        if (isBasicLocationsScreen || isCustomLocationsScreen) {
            return setSettingsScreen(SETTINGS_SCREENS.LOCATIONS);
        }

        return null;
    }, [isRulesScreen, isPlayerProfileScreen, isBasicLocationsScreen, isCustomLocationsScreen]);

    const handleBackClick = React.useCallback(() => {
        dispatch(backButtonAction);
    }, [dispatch, backButtonAction]);

    return (
        <div className="app-container">
            {hasSandwich && <Navigation menuItems={getMenuItems(dispatch)} />}
            {hasBackButton && <Navigation type="back" onClick={handleBackClick} />}
            {isStartScreen && <StartScreen />}
            {isRulesScreen && <Rules />}
            {isSettingsScreen && <Settings />}
            {isPlayerProfileScreen && <PlayerProfile />}
            {isBasicLocationsScreen && <BasicLocations />}
            {isCustomLocationsScreen && <CustomLocations />}
            {isRolesDistributionScreen && <RolesDistribution />}
            {isQuestionsScreen && <Questions />}
            {isDiscussionScreen && <Discussion />}
            {isIdentifySpiesScreen && <IdentifySpies />}
            {isResultsScreen && <Results />}
        </div>
    );
};

export default App;
