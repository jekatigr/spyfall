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
    const [hasSamePlayerError, setHasSamePlayerError] = React.useState(false);
    const [hasEmptyNameError, setHasEmptyNameError] = React.useState(false);

    const handleChange = (value: string): void => {
        const playerNameTrimmed = value.trim();
        setHasEmptyNameError(!playerNameTrimmed);
        setHasSamePlayerError(name !== playerNameTrimmed && list.some(p => p.name === playerNameTrimmed));
        setName(value);
    };

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

    const errorText = React.useMemo((): string | undefined => {
        if (hasSamePlayerError) {
            return text('playerProfile.player_with_same_name_already_exist');
        }
        if (hasEmptyNameError) {
            return text('playerProfile.name_cannot_be_empty');
        }

        return undefined;
    }, [text, hasEmptyNameError, hasSamePlayerError]);

    return (
        <div className={b()}>
            <Header>{text('playerProfile.title')}</Header>
            <div className={b('inner')}>
                <Player color={color} size="medium" />
                <TextField
                    value={playerName}
                    errorText={errorText}
                    classNames={b('input')}
                    placeholder={text('playerProfile.type_player_name')}
                    onChange={handleChange}
                />
            </div>
            <div className={b('remove-player')} onClick={deletePlayer}>
                {text('playerProfile.remove_player')}
                <RemoveIcon className={b('remove-icon')} />
            </div>
            <Button onClick={savePlayer} type="action" disabled={hasEmptyNameError || hasSamePlayerError}>
                {text('playerProfile.save')}
            </Button>
        </div>
    );
};

export default PlayerProfile;
