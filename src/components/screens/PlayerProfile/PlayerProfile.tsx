import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
import Header from 'components/common/Header/Header';
import TextField from 'components/common/TextField/TextField';
import Button from 'components/common/Button/Button';

import RemoveIcon from 'icons/remove.svg?sprite';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { removePlayer, setPlayerName } from 'store/players/actions';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';
import { setDiscussionTimeLimit, setQuestionsTimeLimit } from 'store/time/actions';

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
    const text = useI18n();

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
        dispatch(setQuestionsTimeLimit(list.length - 1));
        dispatch(setDiscussionTimeLimit(Math.floor((list.length - 1) / 2) + 1));
        dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
    };

    return (
        <div className={b()}>
            <Header>{text('playerProfile.title')}</Header>
            <div className={b('inner')}>
                <Player color={color} size="medium" />
                <TextField
                    value={playerName}
                    classNames={b('input')}
                    placeholder={text('playerProfile.type_player_name')}
                    onChange={setName}
                />
            </div>
            <div className={b('remove-player')} onClick={deletePlayer}>
                {text('playerProfile.remove_player')}
                <RemoveIcon className={b('remove-icon')} />
            </div>
            <Button onClick={savePlayer} type="action" disabled={!isSaveButtonEnabled}>
                {text('playerProfile.save')}
            </Button>
        </div>
    );
};

export default PlayerProfile;
