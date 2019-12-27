import * as React from 'react';

import Switcher from 'components/common/Switcher/Switcher';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Header from 'components/common/Header/Header';

import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_LOCATIONS, SET_SETTINGS_STATE_TO_PLAYERS } from 'store/reducers/settings';

import './Spies.less';

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
        <>
            <Header>Шпионы</Header>

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

            <Header>Настройки</Header>
            <Switcher onChange={handleSwitchChange}>Шпионы знакомы</Switcher>
            <Switcher onChange={(): void => {}}>Звук</Switcher>

            <div className="buttons-wizard">
                <ButtonsWizard backButtonInfo={backButtonInfo} forwardButtonInfo={forwardButtonInfo} />
            </div>
        </>
    );
};

export default Spies;
