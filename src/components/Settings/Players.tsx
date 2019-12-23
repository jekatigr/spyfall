import * as React from 'react';

import './Settings.less';

import ProgressBar from 'components/ProgressBar';

import {
    SET_SETTINGS_STATE_TO_SPIES,
    SET_SETTINGS_STATE_TO_EXTRA_SETTINGS,
    storeContext, SET_SETTINGS_STATE_TO_START_SCREEN, UPDATE_PLAYERS,
} from 'Store';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container
let colorCounter = 0;
const colors = ['coral', 'green', 'wine', 'dark-blue', 'pink', 'yellow', 'purple', 'raspberry', 'acid-green', 'light-green', 'sky-blue', 'blue'];

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

let editedPlayer = '';
const Players: React.FunctionComponent = () => {
    const { state: { players }, dispatch } = React.useContext(storeContext);

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
                // TODO: show some message 1
                return;
            }
            if (currentPlayerName === '') {
                // TODO: show some message 2
                return;
            }
        }

        if (editedPlayer === '') {
            // Create new player
            const newColor = colors[colorCounter % colors.length];
            colorCounter += 1;
            const updatedPlayers = players.slice();
            updatedPlayers.push({ name: currentPlayerName, color: newColor });
            dispatch({ type: UPDATE_PLAYERS, players: updatedPlayers });
        } else {
            // Rename existing player
            const updatedPlayers = players.slice();
            for (let idx = 0; idx < players.length; ++idx) {
                if (players[idx].name === editedPlayer) {
                    updatedPlayers[idx].name = currentPlayerName;
                    dispatch({ type: UPDATE_PLAYERS, players: updatedPlayers });
                }
            }
        }
        setEditPlayer(false);
    };

    const deletePlayer = () => {
        const updatedPlayers = players.slice();
        for (let idx = 0; idx < players.length; ++idx) {
            if (players[idx].name === editedPlayer) {
                updatedPlayers.splice(idx, 1);
                dispatch({ type: UPDATE_PLAYERS, players: updatedPlayers });
                return;
            }
        }
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
                            <div className={`player__image player__image_big player__image_${colors[10]}`}>
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
                        {editedPlayer === '' ? ''
                            : (
                                <div className="player-profile__remove-player" onClick={deletePlayer}>
                                    Удалить игрока
                                    <img className="player-profile__remove-icon" src={`${assetPrefix}/remove.svg`} />
                                </div>
                            )}
                        <button type="button" className="button button_action" onClick={savePlayer}>
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        editedPlayer = '';

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
                                    players.map((player) => (
                                        <div className="players-list__item" key={player.name}>
                                            <div className="player">
                                                <div className={`player__image player__image_${player.color}`}>
                                                    <img className="player__icon" src={`${assetPrefix}/player.svg`} />
                                                </div>
                                                <div className="edit player__edit" onClick={() => { editedPlayer = player.name; updateCurrentPlayerName(player.name); setEditPlayer(true); }}>
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

                <div className="buttons-wizard">
                    <button type="button" className="additional-settings-link" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>Настройки времени</button>
                    <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                        <button type="button" className="button button_additional buttons-wizard__button" onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_START_SCREEN })}>
                            Назад
                        </button>
                    </div>
                    <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                        <button type="button" className={`button button_action buttons-wizard__button ${players.length >= 3 ? '' : 'button_disabled'}`} onClick={() => dispatch({ type: SET_SETTINGS_STATE_TO_SPIES })}>
                            Вперед
                        </button>
                    </div>
                </div>
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
