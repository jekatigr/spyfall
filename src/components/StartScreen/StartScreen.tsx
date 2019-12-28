import * as React from 'react';

import Button from 'components/common/Button/Button';

import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_PLAYERS } from 'store/reducers/settings';
import { SET_APP_STATE_TO_RULES, SET_APP_STATE_TO_SETTINGS } from 'store/reducers/app';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const StartScreen: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    const handlePlayClick = (): void => {
        dispatch({ type: SET_APP_STATE_TO_SETTINGS });
        dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS });
    };

    return (
        <>
            <img src={`${assetPrefix}/logo.svg`} />
            <div className="container__bottom-buttons-block">
                <Button type="action" onClick={handlePlayClick}>
                    Играть
                </Button>
                <Button type="additional" onClick={(): void => dispatch({ type: SET_APP_STATE_TO_RULES })}>
                    Правила игры
                </Button>
            </div>
        </>
    );
};

export default StartScreen;
