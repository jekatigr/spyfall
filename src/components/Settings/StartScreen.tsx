import * as React from 'react';

import './Settings.less';

import {
    storeContext, SET_SETTINGS_STATE_TO_PLAYERS,
} from 'store';

import Rules from 'components/Settings/Rules';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const StartScreen: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    const [isRule, setRule] = React.useState(false);

    return (
        <div className="container">
            {isRule ? <Rules /> : (
                <div>
                    <img src={`${assetPrefix}/logo.svg`} />

                    <div className="container__bottom-buttons-block">
                        <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS })}>
                            Играть
                        </button>
                        <button type="button" className="button button_additional" onClick={() => setRule(true)}>
                            Правила игры
                        </button>
                        <button type="button" className="button button_additional">
                            Выйти
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StartScreen;
