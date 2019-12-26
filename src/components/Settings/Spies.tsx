import * as React from 'react';

import './Settings.less';

import { storeContext } from 'store';

import { SET_SETTINGS_STATE_TO_LOCATIONS, SET_SETTINGS_STATE_TO_PLAYERS } from 'store/reducers/settings';

import Switcher from 'components/tools/Switcher/Switcher';
import ButtonsWizard from 'components/tools/ButtonsWizard/ButtonsWizard';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Spies: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
    };

    const backButtonInfo = {
        title: 'Назад',
        enable: true,
        action: (): void => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS }),
    };

    const forwardButtonInfo = {
        title: 'Вперед',
        enable: true,
        action: (): void => dispatch({ type: SET_SETTINGS_STATE_TO_LOCATIONS }),
    };

    return (
        <div>
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
                <ButtonsWizard backButtonInfo={backButtonInfo} forwardButtonInfo={forwardButtonInfo} />
            </div>
        </div>
    );
};

export default Spies;
