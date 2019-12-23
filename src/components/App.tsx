import * as React from 'react';
import ProgressBar from 'components/ProgressBar';
import Switcher from 'components/Switcher';
import prefixedAsset from 'utils/assetPrefix';
import './App.less';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container
const colors = ['coral', 'wine', 'pink', 'purple', 'raspberry', 'green', 'acid-green', 'light-green', 'yellow', 'sky-blue', 'blue', 'dark-blue'];

const App: React.FunctionComponent = () => {
    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
    };

    const hacks = [];
    for (let i = 0; i < MAX_PLAYERS_IN_ROW - 1; i++) {
        hacks.push(<div key={i} className="empty-hack-for-flexbox-space-between-last-line-problem" />);
    }

    return (
        <div className="container">
            <img src={prefixedAsset('logo.svg')} />
            <ProgressBar />

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

            <div className="random-option">
                <span className="random-option__name">Случайное количество</span>
                <div className="option-circle random-option__inner">
                    <img className="random-option__image_selected" src={prefixedAsset('dice.svg')} />
                </div>
            </div>

            <div className="random-option">
                <span className="random-option__name random-option__name_muted">Случайная выключенная</span>
                <div className="option-circle option-circle_muted random-option__inner">
                    <img className="random-option__image_muted" src={prefixedAsset('dice-muted.svg')} />
                </div>
            </div>

            <div className="">
                <h1 className="header">Локации</h1>
                <p className="paragraph paragraph_light">Нажмите на иконку, чтобы выбрать категории локаций:</p>
                <div className="location-category">
                    <div className="option-circle">
                        <img className="option-circle__image location-category__basic-image_selected" src={prefixedAsset('basic.svg')} />
                    </div>
                    <div className="location-category__inner">
                        <span className="location-category__name">Базовые</span>
                        <div className="location-category__edit">
                            <div className="location-category__edit-text">
                                Редактировать категорию
                            </div>
                            <div className="edit location-category__edit-icon">
                                <img src={prefixedAsset('edit.svg')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location-category">
                    <div className="option-circle option-circle_muted">
                        <img className="option-circle__image location-category__basic-image_muted" src={prefixedAsset('basic-muted.svg')} />
                    </div>
                    <div className="location-category__inner">
                        <span className="location-category__name location-category__name_muted">Базовые выкл</span>
                        <div className="location-category__edit">
                            <div className="location-category__edit-text">
                                Редактировать категорию
                            </div>
                            <div className="edit location-category__edit-icon">
                                <img src={prefixedAsset('edit.svg')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location-category">
                    <div className="option-circle">
                        <img className="option-circle__image location-category__custom-image_selected" src={prefixedAsset('custom.svg')} />
                    </div>
                    <div className="location-category__inner">
                        <span className="location-category__name">Кастомные</span>
                        <div className="location-category__edit">
                            <div className="location-category__edit-text">
                                Редактировать категорию
                            </div>
                            <div className="edit location-category__edit-icon">
                                <img src={prefixedAsset('edit.svg')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location-category">
                    <div className="option-circle option-circle_muted">
                        <img className="option-circle__image location-category__custom-image_muted" src={prefixedAsset('custom-muted.svg')} />
                    </div>
                    <div className="location-category__inner">
                        <span className="location-category__name location-category__name_muted">Кастомные выкл</span>
                        <div className="location-category__edit">
                            <div className="location-category__edit-text">
                                Редактировать категорию
                            </div>
                            <div className="edit location-category__edit-icon">
                                <img src={prefixedAsset('edit.svg')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <h1 className="header">Игроки</h1>
                <p className="paragraph paragraph_light">Добавьте игроков, которые будут участвовать в игре:</p>
                <div className="players-list">
                    <div className="players-list__wrapper">
                        <div className="players-list__inner">
                            {
                                colors.map((c, p) => (
                                    <div className="players-list__item" key={c}>
                                        <div className="player">
                                            <div className={`player__image player__image_${colors[p]}`}>
                                                <img className="player__icon" src={prefixedAsset('player.svg')} />
                                            </div>
                                            <div className="edit player__edit">
                                                <img src={prefixedAsset('edit.svg')} />
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
                            <div className="players-list__item">
                                <button type="button" className="add-player-button">
                                    <img src={prefixedAsset('add.svg')} />
                                </button>
                            </div>
                            {hacks}
                        </div>
                    </div>
                </div>
            </div>


            <div className="bottom-buttons-block">
                <button type="button" className="additional-settings-link">Расширенные настройки</button>
                <button type="button" className="button button_action">
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

            <div className="buttons-wizard">
                <button type="button" className="additional-settings-link">Настройки времени</button>
                <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                    <button type="button" className="button button_additional buttons-wizard__button">
                        Назад
                    </button>
                </div>
                <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                    <button type="button" className="button button_action buttons-wizard__button">
                        Вперед
                    </button>
                </div>
            </div>

            <div className="player-profile">
                <h1 className="header">Профиль игрока</h1>
                <div className="player-profile__inner">
                    <div className="player">
                        <div className={`player__image player__image_big player__image_${colors[9]}`}>
                            <img className="player__icon player__icon_big" src={prefixedAsset('player.svg')} />
                        </div>
                    </div>
                    <div className="player-profile__input">
                        <input className="input-text" type="text" placeholder="Введите имя игрока" />
                    </div>
                    <div className="player-profile__remove-player">
                        Удалить игрока
                        <img className="player-profile__remove-icon" src={prefixedAsset('remove.svg')} />
                    </div>
                </div>
            </div>

            <h1 className="header">Настройки</h1>
            <Switcher onChange={handleSwitchChange}>Шпионы знакомы</Switcher>
            <Switcher onChange={(): void => {}}>Звук</Switcher>

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
        </div>
    );
};

export default App;
