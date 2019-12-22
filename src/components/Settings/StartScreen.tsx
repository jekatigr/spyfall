import * as React from 'react';

import 'components/Settings/Settings.less';

import {
    storeContext, SET_SETTINGS_STATE_TO_PLAYERS,
} from 'Store';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const StartScreen: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    const [isRule, setRule] = React.useState(false);

    let body;
    if (isRule) {
        body = (
            <div>
                <h1 className="header">Правила</h1>
                <p className="paragraph">Игровая партия</p>
                <p className="paragraph paragraph_extra-light paragraph_justify">
                    Игровая партия состоит из последовательности коротких раундов.
                    В каждом раунде игроки оказываются в какой-то локации,
                    у каждого — свой статус. Один неизбежно оказывается
                    шпионом, который не знает, где находится. Его задача — разговорить
                    других игроков, определить локацию и не разоблачить себя.
                    Каждый нешпион в свою очередь пытается обтекаемо дать понять «своим»,
                    что знает, где находится, и
                    поэтому не является шпионом. Наблюдательность, собранность, выдержка,
                    хитрость — в этой игре
                    пригодится всё. Будьте начеку!
                </p>
            </div>
        );
    } else {
        body = (
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
        );
    }

    return (
        <div className="container">
            {body}
        </div>
    );
};

export default StartScreen;
