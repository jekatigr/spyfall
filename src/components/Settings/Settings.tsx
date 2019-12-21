import * as React from 'react';

import 'components/Settings/Settings.less';

import ProgressBar from 'components/ProgressBar';
import Switcher from 'components/Switcher';
import {
    SET_SETTINGS_STATE_TO_LOCATIONS,
    SET_SETTINGS_STATE_TO_PLAYERS,
    SET_SETTINGS_STATE_TO_SPIES,
    SET_SETTINGS_STATE_TO_EXTRA_SETTINGS,
    SETTINGS_STATES,
    StoreContext,
} from 'Store';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container
const colors = ['coral', 'wine', 'pink', 'purple', 'raspberry', 'green', 'acid-green', 'light-green', 'yellow', 'sky-blue', 'blue', 'dark-blue'];

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Settings: React.FunctionComponent = () => {
    const { state: { settingsState }, dispatch } = React.useContext(StoreContext);

    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
    };

    const hacks = [];
    for (let i = 0; i < MAX_PLAYERS_IN_ROW - 1; i++) {
        hacks.push(<div key={i} className="empty-hack-for-flexbox-space-between-last-line-problem" />);
    }

    let body;
    switch (settingsState) {
        case SETTINGS_STATES.START_SCREEN:
            body = (
                <div className="container">
                    <img src={`${assetPrefix}/logo.svg`} />

                    <div className="container__bottom-buttons-block">
                        <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_PLAYERS })}>
                            Играть
                        </button>
                        <button type="button" className="button button_action button_disabled">
                            Играть
                        </button>
                        <button type="button" className="button button_additional">
                            Правила игры
                        </button>
                        <button type="button" className="button button_additional">
                            Выйти
                        </button>
                        <button type="button" className="button button_additional button_disabled">
                            Выйти
                        </button>
                    </div>

                    <div>
                        <h1 className="header">Правила</h1>
                        <p className="paragraph ">Игровая партия</p>
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
                </div>
            );
            break;
        case SETTINGS_STATES.PLAYERS:
            body = (
                <div className="container">
                    <ProgressBar />

                    <div className="">
                        <h1 className="header">Игроки</h1>
                        <p className="paragraph paragraph_light">Добавьте игроков, которые будут участвовать в игре:</p>
                        <div className="players-list">
                            <div className="players-list__wrapper">
                                <div className="players-list__wrapper__inner">
                                    {
                                        colors.map((c, p) => (
                                            <div className="players-list__wrapper__inner__item" key={c}>
                                                <div className="player">
                                                    <div className={`player__image player__image_${colors[p]}`}>
                                                        <img className="player__image__icon" src={`${assetPrefix}/player.svg`} />
                                                    </div>
                                                    <div className="player__edit">
                                                        <img className="player__edit__icon" src={`${assetPrefix}/edit.svg`} />
                                                    </div>
                                                    <p className="player__name">
                                                        Player
                                                        {' '}
                                                        {p + 1}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="players-list__wrapper__inner__item">
                                        <button type="button" className="add-player-button">
                                            <img src={`${assetPrefix}/add.svg`} />
                                        </button>
                                    </div>
                                    {hacks}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="player-profile">
                        <h1 className="header">Профиль игрока</h1>
                        <div className="player-profile__inner">
                            <div className="player">
                                <div className={`player__image player__image_big player__image_${colors[9]}`}>
                                    <img className="player__image__icon player__image__icon_big" src={`${assetPrefix}/player.svg`} />
                                </div>
                            </div>
                            <div className="player-profile__inner__input">
                                <input className="input-text" type="text" placeholder="Введите имя игрока" />
                            </div>
                            <div className="player-profile__inner__remove-player">
                                <div className="remove-player">
                                    Удалить игрока
                                    <img className="remove-player__icon" src={`${assetPrefix}/remove.svg`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="additional-settings-link" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>
                        Настройки
                    </button>
                    <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_SPIES })}>
                        Вперёд
                    </button>
                </div>
            );
            break;
        case SETTINGS_STATES.SPIES:
            body = (
                <div className="container">
                    <ProgressBar />

                    <div className="random-option">
                        <span className="random-option__name">Случайное количество</span>
                        <div className="random-option__inner">
                            <img className="random-option__image_selected" src={`${assetPrefix}/dice.svg`} />
                        </div>
                    </div>

                    <div className="random-option">
                        <span className="random-option__name random-option__name_muted">Случайная выключенная</span>
                        <div className="random-option__inner random-option__inner_muted">
                            <img className="random-option__image_muted" src={`${assetPrefix}/dice-muted.svg`} />
                        </div>
                    </div>

                    <h1 className="header">Настройки</h1>
                    <Switcher onChange={handleSwitchChange}>Шпионы знакомы</Switcher>

                    <button type="button" className="additional-settings-link" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>
                        Настройки
                    </button>
                    <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_LOCATIONS })}>
                        Вперёд
                    </button>
                </div>
            );
            break;
        case SETTINGS_STATES.LOCATIONS:
            body = (
                <div className="container">
                    <ProgressBar />
                    LOCATIONS
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
            console.error('TODO');
    }

    return (
        <div>
            {body}
        </div>
    );
};

export default Settings;
