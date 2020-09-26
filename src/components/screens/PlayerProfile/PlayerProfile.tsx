import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
import Header from 'components/common/Header/Header';
import TextField from 'components/common/TextField/TextField';
import Button from 'components/common/Button/Button';

import RemoveIcon from 'icons/remove.svg?sprite';

import { useStore } from 'store';
import { removePlayer, setPlayerName } from 'store/players/actions';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';

import './PlayerProfile.less';

const b = block('player-profile');
const PlayerProfile: React.FC = () => {
    const {
        state: {
            screen: { editUserId },
            players: { list },
        },
        dispatch,
    } = useStore();

    const { id, name, color } = list.find(p => p.id === editUserId);
    const [playerName, setName] = React.useState(name);

    const isSaveButtonEnabled = React.useMemo(() => {
        const playerNameTrimmed = playerName.trim();
        if (!playerNameTrimmed) {
            return false;
        }

        return !list.some(p => p.name === playerNameTrimmed);
    }, [playerName, list]);

    const savePlayer = (): void => {
        dispatch(setPlayerName(id, playerName.trim()));
        dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
    };

    const deletePlayer = (): void => {
        dispatch(removePlayer(id));
        dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
    };

    return (
        <div className={b()}>
            <Header>Профиль игрока</Header>
            <div className={b('inner')}>
                <Player color={color} big />
                <TextField
                    value={playerName}
                    classNames={b('input')}
                    placeholder="Введите имя игрока..."
                    onChange={setName}
                />
            </div>
            <div className={b('remove-player')} onClick={deletePlayer}>
                Удалить игрока
                <RemoveIcon className={b('remove-icon')} />
            </div>
            <Button onClick={savePlayer} type="action" disabled={!isSaveButtonEnabled}>
                Сохранить
            </Button>
        </div>
    );
};

export default PlayerProfile;
