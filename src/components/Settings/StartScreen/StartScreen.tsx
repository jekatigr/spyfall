import * as React from 'react';

import Button from 'components/common/Button/Button';

import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_PLAYERS, SET_SETTINGS_STATE_RULES } from 'store/reducers/settings';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const StartScreen: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    return (
        <>
            <img src={`${assetPrefix}/logo.svg`} />
            <div className="container__bottom-buttons-block">
                <Button type="action" onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS })}>
                    Играть
                </Button>
                <Button type="additional" onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_RULES })}>
                    Правила игры
                </Button>
                <Button type="additional" onClick={(): void => {}}>
                    Выйти
                </Button>
            </div>
        </>
    );
};

export default StartScreen;
