import * as React from 'react';

import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { SET_APP_STATE_TO_START_SCREEN } from 'store/reducers/app';
import { SET_SETTINGS_PHASE_TO_PLAYER_PROFILE, SET_SETTINGS_PHASE_TO_SPIES } from 'store/reducers/settings/settings';
import { SET_CURRENT_PLAYER_PROFILE, UPDATE_PLAYERS } from 'store/reducers/settings/playersInfo';

import './PlayersList.less';

const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container

let colorCounter = 0;
const colors = [
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

const PlayersList: React.FunctionComponent = () => {
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
        hacks.push(<div key={i} className="empty-hack-for-flexbox-space-between-last-line-problem" />);
    }

    return (
        <>
            <div className="">
                <Header>Игроки</Header>
                <Paragraph weight="light" hasMargin>
                    Добавьте игроков, которые будут участвовать в игре:
                </Paragraph>
                <div className="players-list">
                    <div className="players-list__wrapper">
                        <div className="players-list__inner">
                            <div className="players-list__item">
                                <button type="button" className="add-player-button" onClick={createPlayer}>
                                    <img src={prefixedAsset('add.svg')} />
                                </button>
                            </div>
                            {players.map((player, index) => (
                                <div className="players-list__item" key={player.name}>
                                    <div
                                        className="player"
                                        onClick={(): void => {
                                            dispatch(SET_SETTINGS_PHASE_TO_PLAYER_PROFILE);
                                            dispatch(SET_CURRENT_PLAYER_PROFILE, { currentProfile: index });
                                        }}
                                    >
                                        <div className={`player__image player__image_${player.color}`}>
                                            <img className="player__icon" src={prefixedAsset('player.svg')} />
                                        </div>
                                        <div className="edit player__edit">
                                            <img src={prefixedAsset('edit.svg')} />
                                        </div>
                                        <Paragraph hasMargin classNames="player__name">
                                            {player.name}
                                        </Paragraph>
                                    </div>
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
                        disabled={players.length < 0}
                    >
                        Вперед
                    </Button>
                }
            />
        </>
    );
};

export default PlayersList;
