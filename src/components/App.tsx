import * as React from 'react';
import ProgressBar from 'components/ProgressBar';
import './App.less';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container
const colors = ['coral', 'wine', 'pink', 'purple', 'raspberry', 'green', 'acid-green', 'light-green', 'yellow', 'sky-blue', 'blue', 'dark-blue'];

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const App: React.FunctionComponent = () => {
    const hacks = [];
    for (let i = 0; i < MAX_PLAYERS_IN_ROW - 1; i++) {
        hacks.push(<div key={i} className="empty-hack-for-flexbox-space-between-last-line-problem" />);
    }

    return (
        <div className="container">
            <img src={`${assetPrefix}/logo.svg`} />
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
                                            <button type="button" className={`player__button player__button_${colors[p]}`}>
                                                <img className="player__button__icon" src={`${assetPrefix}/player.svg`} />
                                            </button>
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


            <div className="container__bottom-buttons-block">
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
};

export default App;
