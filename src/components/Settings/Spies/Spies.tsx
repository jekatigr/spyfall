import * as React from 'react';

import TimeSettings from 'components/common/TimeSettings/TimeSettings';
import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';

import { storeContext } from 'store';
import {
    SET_SETTINGS_STATE_TO_LOCATIONS,
    SET_SETTINGS_STATE_TO_PLAYERS,
    SET_SETTINGS_STATE_TO_TIME_SETTINGS,
} from 'store/reducers/settings';

import './Spies.less';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Spies: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
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

            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS })} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_LOCATIONS })} type="action">
                        Вперед
                    </Button>
                }
            >
                <TimeSettings onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_TIME_SETTINGS })}>
                    Настройки времени
                </TimeSettings>
            </ButtonsWizard>
        </>
    );
};

export default Spies;
