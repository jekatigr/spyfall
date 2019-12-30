import * as React from 'react';

import Button from 'components/common/Button/Button';

import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_PLAYERS_LIST } from 'store/reducers/settings/settings';
import { SET_APP_STATE_TO_RULES, SET_APP_STATE_TO_SETTINGS } from 'store/reducers/app';

const StartScreen: React.FunctionComponent = () => {
    const { dispatch } = useStore();

    const handlePlayClick = (): void => {
        dispatch(SET_APP_STATE_TO_SETTINGS);
        dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST);
    };

    return (
        <>
            <img src={prefixedAsset('logo.svg')} />
            <div className="container__bottom-buttons-block">
                <Button type="action" onClick={handlePlayClick}>
                    Играть
                </Button>
                <Button type="additional" onClick={(): void => dispatch(SET_APP_STATE_TO_RULES)}>
                    Правила игры
                </Button>
            </div>
        </>
    );
};

export default StartScreen;
