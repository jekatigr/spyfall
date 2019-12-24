import * as React from 'react';

import './Settings.less';

import { storeContext } from 'reducers/storeContext';

import {
    SET_SETTINGS_STATE_TO_EXTRA_SETTINGS,
    SET_SETTINGS_STATE_TO_LOCATIONS,
    SET_SETTINGS_STATE_TO_PLAYERS,
} from 'reducers/settings';

import ProgressBar from 'components/ProgressBar';
import Switcher from 'components/Switcher';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Spies: React.FunctionComponent = () => {
    const { state: { players }, dispatch } = React.useContext(storeContext);

    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
    };

    return (
        <div className="container">
            <ProgressBar dotsCount={3} step={2} />

            <h1 className="header">Шпионы</h1>

            <div className="random-option">
                <span className="random-option__name">Случайное количество</span>
                <div className="option-circle random-option__inner">
                    <img className="random-option__image_selected" src={`${assetPrefix}/dice.svg`} />
                </div>
            </div>

            <div className="random-option">
                <span className="random-option__name random-option__name_muted">Случайная выключенная</span>
                <div className="option-circle option-circle_muted random-option__inner">
                    <img className="random-option__image_muted" src={`${assetPrefix}/dice-muted.svg`} />
                </div>
            </div>

            <h1 className="header">Настройки</h1>
            <Switcher onChange={handleSwitchChange}>Шпионы знакомы</Switcher>
            <Switcher onChange={(): void => {}}>Звук</Switcher>

            <div className="buttons-wizard">
                <button type="button" className="additional-settings-link" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>Настройки времени</button>
                <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                    <button type="button" className="button button_additional buttons-wizard__button" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS })}>
                        Назад
                    </button>
                </div>
                <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                    <button type="button" className={`button button_action buttons-wizard__button ${players.length >= 3 ? '' : 'button_disabled'}`} onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_LOCATIONS })}>
                        Вперед
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Spies;
