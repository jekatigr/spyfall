import * as React from 'react';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';

import { SET_IDENTIFIED_PLAYERS, SET_GAME_PHASE_TO_RESULTS } from 'store/reducers/game';
import { useStore } from 'store';

const IdentifySpies: React.FC = () => {
    const {
        state: {
            players: { list },
            game: { identifiedPlayers },
        },
        dispatch,
    } = useStore();

    const playersJSX = list.map(player => {
        let ret;
        if (identifiedPlayers.indexOf(player.name) !== -1) {
            ret = (
                <div
                    onClick={(): void =>
                        dispatch({
                            type: SET_IDENTIFIED_PLAYERS,
                            payload: {
                                identifiedPlayers: identifiedPlayers.filter(e => e !== player.name),
                            },
                        })
                    }
                >
                    Игрок {player.name} - под подозрением
                </div>
            );
        } else {
            ret = (
                <div
                    onClick={(): void =>
                        dispatch({
                            type: SET_IDENTIFIED_PLAYERS,
                            payload: { identifiedPlayers: [...identifiedPlayers, player.name] },
                        })
                    }
                >
                    Игрок {player.name} - не проверен
                </div>
            );
        }
        return ret;
    });

    return (
        <>
            <Header>Угадать шпионов</Header>
            <Paragraph weight="light">Выберите иконки предполагаемых шпионов:</Paragraph>
            {playersJSX}
            <Button
                onClick={(): void => dispatch({ type: SET_GAME_PHASE_TO_RESULTS })}
                type="action"
                disabled={identifiedPlayers.length === 0}
            >
                Узнать результат
            </Button>
        </>
    );
};

export default IdentifySpies;
