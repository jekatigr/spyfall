import * as React from 'react';
import block from 'bem-cn';

import Button from 'components/common/Button/Button';
import CardsSlider from 'components/Game/CardsSlider/CardsSlider';

import { useStore } from 'store';
import { SET_GAME_PHASE_TO_QUESTIONS, SET_START_QUESTIONS } from 'store/reducers/game';

import BeforeStartIcon from 'icons/before-start.svg?sprite';

import './RolesDistribution.less';

const b = block('roles-distribution');
const RolesDistribution: React.FC = () => {
    const {
        state: {
            game,
            spies: { isFamiliar },
            settings: { playersInfo },
        },
        dispatch,
    } = useStore();

    const [isRolesDistributed, setRolesDistributed] = React.useState(false);

    const startGame = (): void => {
        dispatch({ type: SET_START_QUESTIONS, payload: { time: Date.now() } });
        dispatch({ type: SET_GAME_PHASE_TO_QUESTIONS });
    };

    const cards = playersInfo.players.map(player => {
        return { name: player.name, isSpy: game.spies.indexOf(player.name) !== -1 };
    });

    return (
        <>
            {isRolesDistributed ? (
                <>
                    <BeforeStartIcon className={b('before-start-icon')} />
                    <Button onClick={startGame} type="action">
                        Начать игру!
                    </Button>
                </>
            ) : (
                <CardsSlider
                    cards={cards}
                    location={game.location}
                    spies={cards.filter(s => s.isSpy).map(s => s.name)}
                    isSpiesFamiliar={isFamiliar}
                    onFinish={(): void => setRolesDistributed(true)}
                />
            )}
        </>
    );
};

export default RolesDistribution;
