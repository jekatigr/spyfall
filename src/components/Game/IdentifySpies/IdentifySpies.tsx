import * as React from 'react';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';

import { SET_IDENTIFIED_PLAYERS, SET_GAME_STATE_TO_RESULT } from 'store/reducers/game';

import { useStore } from 'store';

const IdentifySpies: React.FunctionComponent = () => {
    const {
        state: {
            playersInfo: { players },
            game: { spies, identifiedPlayers },
        },
        dispatch,
    } = useStore();

    const playersJSX = players.map(player => {
        let ret;
        if (identifiedPlayers.indexOf(player.name) !== -1) {
            ret = (
                <div>
                    Игрок {player.name} - проверен и он {spies.indexOf(player.name) === -1 ? '' : 'не'} шпион
                </div>
            );
        } else {
            ret = (
                <div
                    onClick={(): void =>
                        dispatch(SET_IDENTIFIED_PLAYERS, { identifiedPlayers: [...identifiedPlayers, player.name] })
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
            <Header> Угадать шпионов </Header>
            {playersJSX}
            <Button onClick={(): void => dispatch(SET_GAME_STATE_TO_RESULT)} type="action">
                Узнать результат
            </Button>
        </>
    );
};

export default IdentifySpies;
