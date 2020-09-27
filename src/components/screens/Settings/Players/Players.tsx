import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
import PlayersList from 'components/common/PlayersList/PlayersList';
import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';

import AddIcon from 'icons/add.svg?sprite';

import { useStore } from 'store';
import { setPlayerProfileScreen, setScreen, setSettingsScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { PLAYER_COLORS } from 'store/players/types';
import { addPlayer } from 'store/players/actions';
import { setDiscussionTimeLimit, setQuestionsTimeLimit } from 'store/time/actions';

import './Players.less';

const b = block('players');
const Players: React.FC = () => {
    const {
        state: {
            players: { list: playersList },
        },
        dispatch,
    } = useStore();

    const createPlayer = (): void => {
        const id = Date.now();
        const playerName = `Игрок ${playersList.length + 1}`;
        const newColor = PLAYER_COLORS[playersList.length % PLAYER_COLORS.length];
        dispatch(addPlayer({ id, name: playerName, color: newColor, isSpy: false, isUnderSuspicion: false }));
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
                <Header>Игроки</Header>
                <Paragraph weight="light" hasMargin>
                    Добавьте игроков, которые будут участвовать в игре:
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
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={handleForwardClick} type="action" disabled={playersList.length < 3}>
                        Вперед
                    </Button>
                }
            />
        </>
    );
};

export default Players;
