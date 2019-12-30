import * as React from 'react';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { UPDATE_PLAYERS } from 'store/reducers/settings/playersInfo';
import { SET_SETTINGS_PHASE_TO_PLAYERS_LIST } from 'store/reducers/settings/settings';

import './PlayerProfile.less';

const PlayerProfile: React.FunctionComponent = () => {
    const {
        state: {
            settings: {
                playersInfo: { currentProfile, players },
            },
        },
        dispatch,
    } = useStore();

    const [playerName, setPlayerName] = React.useState(players[currentProfile].name);

    const savePlayer = (): void => {
        // Check for name duplications
        for (let idx = 0; idx < players.length; ++idx) {
            if (players[idx].name === playerName) {
                // TODO: show some message 1
                return;
            }
            if (playerName === '') {
                // TODO: show some message 2
                return;
            }
        }

        // Rename existing player
        const updatedPlayers = players.slice();
        updatedPlayers[currentProfile].name = playerName;
        dispatch(UPDATE_PLAYERS, { players: updatedPlayers });
        dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST);
    };

    const deletePlayer = (): void => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(currentProfile, 1);
        dispatch(UPDATE_PLAYERS, { players: updatedPlayers });
        dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST);
    };

    return (
        <>
            <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST)} type="action">
                Стрелочка назад
            </Button>
            <div className="player-profile">
                <Header>Профиль игрока</Header>
                <div className="player-profile__inner">
                    <div className="player">
                        <div
                            className={`player__image player__image_big player__image_${players[currentProfile].color}`}
                        >
                            <img className="player__icon player__icon_big" src={prefixedAsset('player.svg')} />
                        </div>
                    </div>
                    <div className="player-profile__input">
                        <input
                            className="input-text"
                            type="text"
                            placeholder="Введите имя игрока"
                            value={playerName}
                            onChange={(e): void => setPlayerName(e.target.value)}
                        />
                    </div>
                    <div className="player-profile__remove-player" onClick={deletePlayer}>
                        Удалить игрока
                        <img className="player-profile__remove-icon" src={prefixedAsset('remove.svg')} />
                    </div>
                    <Button onClick={savePlayer} type="action">
                        Сохранить
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PlayerProfile;
