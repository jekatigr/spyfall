import * as React from 'react';

import './Settings.less';

import { storeContext } from 'store';

import {
    SET_SETTINGS_STATE_TO_SPIES,
    SETTINGS_STATES,
} from 'store/reducers/settings';

import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';

import ProgressBar from 'components/ProgressBar';
import Players from 'components/Settings/Players';
import StartScreen from 'components/Settings/StartScreen';
import Spies from 'components/Settings/Spies';
import Rules from 'components/Settings/Rules';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Settings: React.FunctionComponent = () => {
    const { state: { settings: { settingsState } }, dispatch } = React.useContext(storeContext);

    let body;
    switch (settingsState) {
        case SETTINGS_STATES.START_SCREEN:
            body = <StartScreen />;
            break;
        case SETTINGS_STATES.RULES:
            body = <Rules />;
            break;
        case SETTINGS_STATES.PLAYERS:
            body = <Players />;
            break;
        case SETTINGS_STATES.SPIES:
            body = <Spies />;
            break;
        case SETTINGS_STATES.LOCATIONS:
            body = (
                <div className="container">
                    <ProgressBar dotsCount={3} step={3} />
                    <div className="">
                        <h1 className="header">Локации</h1>
                        <p className="paragraph paragraph_light">Нажмите на иконку, чтобы выбрать категории локаций:</p>
                        <div className="location-category">
                            <div className="option-circle">
                                <img className="option-circle__image location-category__basic-image_selected" src={`${assetPrefix}/basic.svg`} />
                            </div>
                            <div className="location-category__inner">
                                <span className="location-category__name">Базовые</span>
                                <div className="location-category__edit">
                                    <div className="location-category__edit-text">
                                        Редактировать категорию
                                    </div>
                                    <div className="edit location-category__edit-icon">
                                        <img src={`${assetPrefix}/edit.svg`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="location-category">
                            <div className="option-circle option-circle_muted">
                                <img className="option-circle__image location-category__basic-image_muted" src={`${assetPrefix}/basic-muted.svg`} />
                            </div>
                            <div className="location-category__inner">
                                <span className="location-category__name location-category__name_muted">Базовые выкл</span>
                                <div className="location-category__edit">
                                    <div className="location-category__edit-text">
                                        Редактировать категорию
                                    </div>
                                    <div className="edit location-category__edit-icon">
                                        <img src={`${assetPrefix}/edit.svg`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="location-category">
                            <div className="option-circle">
                                <img className="option-circle__image location-category__custom-image_selected" src={`${assetPrefix}/custom.svg`} />
                            </div>
                            <div className="location-category__inner">
                                <span className="location-category__name">Кастомные</span>
                                <div className="location-category__edit">
                                    <div className="location-category__edit-text">
                                        Редактировать категорию
                                    </div>
                                    <div className="edit location-category__edit-icon">
                                        <img src={`${assetPrefix}/edit.svg`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="location-category">
                            <div className="option-circle option-circle_muted">
                                <img className="option-circle__image location-category__custom-image_muted" src={`${assetPrefix}/custom-muted.svg`} />
                            </div>
                            <div className="location-category__inner">
                                <span className="location-category__name location-category__name_muted">Кастомные выкл</span>
                                <div className="location-category__edit">
                                    <div className="location-category__edit-text">
                                        Редактировать категорию
                                    </div>
                                    <div className="edit location-category__edit-icon">
                                        <img src={`${assetPrefix}/edit.svg`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_APP_STATE_TO_GAME })}>
                        Вперёд
                    </button>
                    <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_SPIES })}>
                        Назад
                    </button>
                </div>
            );
            break;
        case SETTINGS_STATES.EXTRA_SETTINGS:
            body = (
                <div className="container">
                    <div className="counter">
                        <span className="counter__name">Время на кон (обычный)</span>
                        <div className="counter__inner">
                            <div className="counter__controllers controllers">
                                <div className="controllers__background-minus">
                                    <div className="controllers__controller controllers__controller-minus" />
                                </div>
                                <div className="controllers__background-plus">
                                    <div className="controllers__controller controllers__controller-plus" />
                                </div>
                            </div>
                            <div className="counter__display counter-display">
                                <div className="counter-display__time">08</div>
                                <div className="counter-display__units">мин</div>
                            </div>
                        </div>
                    </div>

                    <div className="counter">
                        <span className="counter__name">Меньше одного нельзя</span>
                        <div className="counter__inner">
                            <div className="counter__controllers controllers">
                                <div className="controllers__background-minus controllers__background-minus_muted">
                                    <div className="controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted" />
                                </div>
                                <div className="controllers__background-plus">
                                    <div className="controllers__controller controllers__controller-plus" />
                                </div>
                            </div>
                            <div className="counter__display counter-display">
                                <div className="counter-display__time">01</div>
                                <div className="counter-display__units">мин</div>
                            </div>
                        </div>
                    </div>

                    <div className="counter">
                        <span className="counter__name">Больше 10 нельзя</span>
                        <div className="counter__inner">
                            <div className="counter__controllers controllers">
                                <div className="controllers__background-minus">
                                    <div className="controllers__controller controllers__controller-minus" />
                                </div>
                                <div className="controllers__background-plus controllers__background-plus_muted">
                                    <div className="controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted" />
                                </div>
                            </div>
                            <div className="counter__display counter-display">
                                <div className="counter-display__time">10</div>
                            </div>
                        </div>
                    </div>

                    <div className="counter">
                        <span className="counter__name counter__name_muted">Неактивен</span>
                        <div className="counter__inner">
                            <div className="counter__controllers controllers">
                                <div className="controllers__background-minus controllers__background-minus_muted">
                                    <div className="controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted" />
                                </div>
                                <div className="controllers__background-plus controllers__background-plus_muted">
                                    <div className="controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted" />
                                </div>
                            </div>
                            <div className="counter__display counter-display counter-display_muted">
                                <div className="counter-display__time">?</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        default:
        // console.error('TODO');
    }

    return (
        <div>
            {body}
        </div>
    );
};

export default Settings;
