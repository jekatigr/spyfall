import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Player from 'components/common/Player/Player';

import PlayersList from 'components/common/PlayersList/PlayersList';
import { useStore } from 'store';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';
import { toggleUnderSuspicion } from 'store/players/actions';

import './IdentifySpies.less';

const b = block('identify-spies');
const IdentifySpies: React.FC = () => {
    const {
        state: {
            players: { list },
        },
        dispatch,
    } = useStore();

    const handlePlayerClick = (playerId: number) => (): void => {
        dispatch(toggleUnderSuspicion(playerId));
    };

    const handleShowResultsClick = (): void => {
        dispatch(setScreen(SCREENS.RESULTS));
    };

    return (
        <>
            <Header>Угадать шпионов</Header>
            <Paragraph weight="light">Выберите иконки предполагаемых шпионов:</Paragraph>
            <PlayersList className={b('players')}>
                {list.map(({ id, name, color, isUnderSuspicion }) => (
                    <Player
                        key={id}
                        name={name}
                        color={color}
                        isMuted={!isUnderSuspicion}
                        icon={isUnderSuspicion ? 'spy' : 'player'}
                        onClick={handlePlayerClick(id)}
                    />
                ))}
            </PlayersList>
            <Button onClick={handleShowResultsClick} type="action">
                Узнать результат
            </Button>
        </>
    );
};

export default IdentifySpies;
