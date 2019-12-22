import * as React from 'react';

import 'components/Settings/Settings.less';

import ProgressBar from 'components/ProgressBar';

import {
    SET_SETTINGS_STATE_TO_SPIES,
    SET_SETTINGS_STATE_TO_EXTRA_SETTINGS,
    StoreContext, SET_SETTINGS_STATE_TO_START_SCREEN, UPDATE_PLAYERS,
} from 'Store';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container
let colorCounter = 0;
const colors = ['coral', 'green', 'wine', 'dark-blue', 'pink', 'yellow', 'purple', 'raspberry', 'acid-green', 'light-green', 'sky-blue', 'blue'];

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Players: React.FunctionComponent = () => {
    const { state: { players }, dispatch } = React.useContext(StoreContext);

    const [isEditPlayer, setEditPlayer] = React.useState(false);
    const [currentPlayerName, updateCurrentPlayerName] = React.useState('');

    const hacks = [];
    for (let i = 0; i < MAX_PLAYERS_IN_ROW - 1; i++) {
        hacks.push(<div key={i} className="empty-hack-for-flexbox-space-between-last-line-problem" />);
    }

    const savePlayer = () => {
        // Check for name duplications
        for (let idx = 0; idx < players.length; ++idx) {
            if (players[idx].name === currentPlayerName) {
                // TODO: show some message
                return;
            }
        }

        const newColor = colors[colorCounter % colors.length];
        colorCounter += 1;
        const updatedPlayers = players.slice();
        updatedPlayers.push({ name: currentPlayerName, color: newColor });
        dispatch({ type: UPDATE_PLAYERS, players: updatedPlayers });
        setEditPlayer(false);
    };

    let body;
    if (isEditPlayer) {
        body = (
            <div className="container">
                <button type="button" className="button button_action" onClick={() => setEditPlayer(false)}>
                    Стрелочка назад
                </button>
                <div className="player-profile">
                    <h1 className="header">Профиль игрока</h1>
                    <div className="player-profile__inner">
                        <div className="player">
                            <div className={`player__image player__image_big player__image_${colors[9]}`}>
                                <img className="player__icon player__icon_big" src={`${assetPrefix}/player.svg`} />
                            </div>
                        </div>
                        <div className="player-profile__input">
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Введите имя игрока"
                                value={currentPlayerName}
                                onChange={(e) => updateCurrentPlayerName(e.target.value)}
                            />
                        </div>
                        <div className="player-profile__remove-player">
                            Удалить игрока
                            <img className="player-profile__remove-icon" src={`${assetPrefix}/remove.svg`} />
                        </div>
                        <button type="button" className="button button_action" onClick={savePlayer}>
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        body = (
            <div className="container">
                <ProgressBar dotsCount={3} step={1} />

                <div className="">
                    <h1 className="header">Игроки</h1>
                    <p className="paragraph paragraph_light">Добавьте игроков, которые будут участвовать в игре:</p>
                    <div className="players-list">
                        <div className="players-list__wrapper">
                            <div className="players-list__inner">
                                <div className="players-list__item">
                                    <button type="button" className="add-player-button" onClick={() => { updateCurrentPlayerName(''); setEditPlayer(true); }}>
                                        <img src={`${assetPrefix}/add.svg`} />
                                    </button>
                                </div>
                                {
                                    players.map((player, idx) => (
                                        <div className="players-list__item" key={player.name}>
                                            <div className="player">
                                                <div className={`player__image player__image_${player.color}`}>
                                                    <img className="player__icon" src={`${assetPrefix}/player.svg`} />
                                                </div>
                                                <div className="edit player__edit">
                                                    <img src={`${assetPrefix}/edit.svg`} />
                                                </div>
                                                <p className="player__name">
                                                    {player.name}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                                {hacks}
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="additional-settings-link" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>
                    Настройки
                </button>
                <button type="button" className={`button button_action ${players.length >= 3 ? '' : 'button_disabled'}`} onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_SPIES })}>
                    Вперёд
                </button>
                <button type="button" className="button button_action" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_START_SCREEN })}>
                    Назад
                </button>
            </div>
        );
    }

    return (
        <div>
            {body}
        </div>
    );
};

export default Players;
