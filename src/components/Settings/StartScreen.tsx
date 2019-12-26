import * as React from 'react';

import './Settings.less';

import { storeContext } from 'store';

import { SET_SETTINGS_STATE_TO_PLAYERS, SET_SETTINGS_STATE_RULES } from 'store/reducers/settings';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const StartScreen: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    return (
        <div className="container">
            <div>
                <img src={`${assetPrefix}/logo.svg`} />
                <div className="container__bottom-buttons-block">
                    <button
                        type="button"
                        className="button button_action"
                        onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS })}
                    >
                        Играть
                    </button>
                    <button
                        type="button"
                        className="button button_additional"
                        onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_RULES })}
                    >
                        Правила игры
                    </button>
                    <button type="button" className="button button_additional">
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
