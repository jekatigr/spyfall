import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
import Header from 'components/common/Header/Header';
import TextField from 'components/common/TextField/TextField';
import Button from 'components/common/Button/Button';
import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { UPDATE_PLAYERS } from 'store/reducers/settings/playersInfo';
import { SET_SETTINGS_PHASE_TO_PLAYERS_LIST } from 'store/reducers/settings/settings';

import './PlayerProfile.less';

const b = block('player-profile');
const PlayerProfile: React.FunctionComponent = () => {
    const {
        state: {
            settings: {
                playersInfo: { currentProfile, players },
            },
        },
        dispatch,
    } = useStore();

    const { name, color } = players[currentProfile];
    const [playerName, setPlayerName] = React.useState(name);

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
        <div className={b()}>
            <Header>Профиль игрока</Header>
            <div className={b('inner')}>
                <Player color={color} big />
                <TextField
                    value={playerName}
                    classNames={b('input')}
                    placeholder="Введите имя игрока"
                    onChange={setPlayerName}
                />
            </div>
            <div className={b('remove-player')} onClick={deletePlayer}>
                Удалить игрока
                <img className={b('remove-icon')} src={prefixedAsset('remove.svg')} />
            </div>
            <Button onClick={savePlayer} type="action">
                Сохранить
            </Button>
        </div>
    );
};

export default PlayerProfile;
