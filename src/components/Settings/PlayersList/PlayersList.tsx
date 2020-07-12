import * as React from 'react';
import { block } from 'bem-cn';

import Player from 'components/common/Player/Player';
import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';

import AddIcon from 'icons/add.svg?sprite';

import { ColorsType } from 'components/common/Player/types';

import { useStore } from 'store';
import { SET_APP_STATE_TO_START_SCREEN } from 'store/reducers/app';
import { SET_SETTINGS_PHASE_TO_PLAYER_PROFILE, SET_SETTINGS_PHASE_TO_SPIES } from 'store/reducers/settings/settings';
import { SET_CURRENT_PLAYER_PROFILE, UPDATE_PLAYERS } from 'store/reducers/settings/playersInfo';

import './PlayersList.less';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container

let colorCounter = 0;
const colors: ColorsType[] = [
    'coral',
    'green',
    'wine',
    'dark-blue',
    'pink',
    'yellow',
    'purple',
    'raspberry',
    'acid-green',
    'light-green',
    'sky-blue',
    'blue',
];

const b = block('players');
const PlayersList: React.FC = () => {
    const {
        state: {
            settings: {
                playersInfo: { players },
            },
        },
        dispatch,
    } = useStore();

    const createPlayer = (): void => {
        const playerName = `Игрок ${players.length + 1}`;
        const newColor = colors[colorCounter % colors.length];
        colorCounter += 1;
        const updatedPlayers = players.slice();
        updatedPlayers.push({ name: playerName, color: newColor });
        dispatch(UPDATE_PLAYERS, { players: updatedPlayers });
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
                            {players.map(({ name, color }, index) => (
                                <div className={b('list-item')} key={name}>
                                    <Player
                                        name={name}
                                        color={color}
                                        onClick={(): void => {
                                            dispatch(SET_SETTINGS_PHASE_TO_PLAYER_PROFILE);
                                            dispatch(SET_CURRENT_PLAYER_PROFILE, { currentProfile: index });
                                        }}
                                    />
                                </div>
                            ))}
                            {hacks}
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch(SET_APP_STATE_TO_START_SCREEN)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button
                        onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_SPIES)}
                        type="action"
                        disabled={players.length < 3}
                    >
                        Вперед
                    </Button>
                }
            />
        </>
    );
};

export default PlayersList;
