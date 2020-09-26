import * as React from 'react';

import StartScreen from 'components/StartScreen/StartScreen';
import Rules from 'components/Rules/Rules';
import Settings from 'components/Settings/Settings';
import RolesDistribution from 'components/RolesDistribution/RolesDistribution';
import Questions from 'components/Questions/Questions';
import Discussion from 'components/Discussion/Discussion';
import IdentifySpies from 'components/IdentifySpies/IdentifySpies';
import Results from 'components/Results/Results';

import { useStore } from 'store';
import { SCREENS } from 'store/screen/constants';

import './App.less';

const App: React.FC = () => {
    const {
        state: {
            screen: { current },
        },
    } = useStore();

    let body;
    switch (current) {
        case SCREENS.START_SCREEN:
            body = <StartScreen />;
            break;
        case SCREENS.RULES:
            body = <Rules />;
            break;
        case SCREENS.SETTINGS:
            body = <Settings />;
            break;
        case SCREENS.ROLES_DISTRIBUTION:
            body = <RolesDistribution />;
            break;
        case SCREENS.QUESTIONS:
            body = <Questions />;
            break;
        case SCREENS.DISCUSSION:
            body = <Discussion />;
            break;
        case SCREENS.IDENTIFY_SPIES:
            body = <IdentifySpies />;
            break;
        case SCREENS.RESULTS:
            body = <Results />;
            break;
        default:
            body = <StartScreen />;
            break;
    }

    return <div className="app-container">{body}</div>;
};

export default App;
