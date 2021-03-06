import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
import PlayersList from 'components/common/PlayersList/PlayersList';
import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';

import AddIcon from 'icons/add.svg?sprite';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { setPlayerProfileScreen, setScreen, setSettingsScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { PLAYER_COLORS, Player as PlayerType } from 'store/players/types';
import { addPlayer } from 'store/players/actions';
import { setDiscussionTimeLimit, setQuestionsTimeLimit } from 'store/time/actions';

import './Players.less';

const getNextPlayer = (playersList: PlayerType[], prefix: string): PlayerType => {
    const id = Date.now();

    const playersNames = playersList.map(p => p.name);
    let number = playersList.length + 1;
    let name = `${prefix} ${number}`;
    while (playersNames.includes(name)) {
        number += 1;
        name = `${prefix} ${number}`;
    }

    const color = PLAYER_COLORS[Math.floor(Math.random() * PLAYER_COLORS.length)];

    return {
        id,
        name,
        color,
        isUnderSuspicion: false,
        isSpy: false,
    };
};

const b = block('players');
const Players: React.FC = () => {
    const {
        state: {
            players: { list: playersList },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const createPlayer = (): void => {
        const player = getNextPlayer(playersList, text('settings.players.new_player_name_prefix'));
        dispatch(addPlayer(player));
        dispatch(setQuestionsTimeLimit(playersList.length + 1));
        dispatch(setDiscussionTimeLimit(Math.floor((playersList.length + 1) / 2) + 1));
    };

    const handleBackClick = (): void => {
        dispatch(setScreen(SCREENS.START_SCREEN));
    };

    const handleForwardClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.SPIES));
    };

    const handleEditProfileClick = (playerId: number) => (): void => {
        dispatch(setPlayerProfileScreen(playerId));
    };

    return (
        <>
            <div className={b()}>
                <Header>{text('settings.players.title')}</Header>
                <Paragraph weight="light" hasMargin>
                    {text('settings.players.add_players')}
                </Paragraph>
                <PlayersList>
                    <button type="button" className={b('add-player-button')} onClick={createPlayer}>
                        <AddIcon className={b('add-player-button-icon')} />
                    </button>
                    {playersList.map(({ id, name, color }) => (
                        <Player key={id} name={name} color={color} onClick={handleEditProfileClick(id)} hasEditButton />
                    ))}
                </PlayersList>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={handleBackClick} type="additional">
                        {text('settings.buttonsWizard.previous')}
                    </Button>
                }
                next={
                    <Button onClick={handleForwardClick} type="action" disabled={playersList.length < 3}>
                        {text('settings.buttonsWizard.next')}
                    </Button>
                }
            />
        </>
    );
};

export default Players;
