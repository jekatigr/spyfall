import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
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

import './Players.less';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container

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
        dispatch(addPlayer({ id, name: playerName, color: newColor, isSpy: false }));
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

    const hacks = [];
    for (let i = 0; i < MAX_PLAYERS_IN_ROW - 1; i++) {
        hacks.push(<div key={i} className={b('hack')} />);
    }

    return (
        <>
            <div className={b()}>
                <Header>Игроки</Header>
                <Paragraph weight="light" hasMargin>
                    Добавьте игроков, которые будут участвовать в игре:
                </Paragraph>
                <div className={b('list')}>
                    <div className={b('list-wrapper')}>
                        <div className={b('list-inner')}>
                            <div className={b('list-item')}>
                                <button type="button" className={b('add-player-button')} onClick={createPlayer}>
                                    <AddIcon className={b('add-player-button-icon')} />
                                </button>
                            </div>
                            {playersList.map(({ id, name, color }) => (
                                <div className={b('list-item')} key={id}>
                                    <Player name={name} color={color} onClick={handleEditProfileClick(id)} />
                                </div>
                            ))}
                            {hacks}
                        </div>
                    </div>
                </div>
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
