import * as React from 'react';

import Navigation, { MenuItem } from 'components/common/Navigation/Navigation';
import StartScreen from 'components/screens/StartScreen/StartScreen';
import Rules from 'components/screens/Rules/Rules';
import Settings from 'components/screens/Settings/Settings';
import PlayerProfile from 'components/screens/PlayerProfile/PlayerProfile';
import BasicLocations from 'components/screens/BasicLocations/BasicLocations';
import CustomLocations from 'components/screens/CustomLocations/CustomLocations';
import RolesDistribution from 'components/screens/RolesDistribution/RolesDistribution';
import Questions from 'components/screens/Questions/Questions';
import Discussion from 'components/screens/Discussion/Discussion';
import IdentifySpies from 'components/screens/IdentifySpies/IdentifySpies';
import Results from 'components/screens/Results/Results';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { setScreen, setSettingsScreen, setPreviousScreen } from 'store/screen/actions';

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
    const text = useI18n();

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

    const menuItems = React.useMemo(
        (): MenuItem[] => [
            {
                title: text('menu.new_game'),
                onClick: (): void => {
                    dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
                },
            },
            {
                title: text('menu.how_to_play'),
                onClick: (): void => {
                    dispatch(setScreen(SCREENS.RULES));
                },
            },
            {
                title: text('menu.exit'),
                onClick: (): void => {
                    dispatch(setScreen(SCREENS.START_SCREEN));
                },
            },
        ],
        [dispatch, text],
    );

    const handleBackClick = React.useCallback(() => {
        dispatch(setPreviousScreen());
    }, [dispatch]);

    return (
        <div className="app-container">
            {hasSandwich && <Navigation menuItems={menuItems} />}
            {hasBackButton && <Navigation type="back" onIconClick={handleBackClick} />}
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
