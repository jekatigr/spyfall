import * as React from 'react';

import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import CardsSlider from 'components/Game/CardsSlider/CardsSlider';

import { useStore } from 'store';
import { SET_GAME_PHASE_TO_QUESTIONS, SET_START_QUESTIONS } from 'store/reducers/game';

const Rules: React.FunctionComponent = () => {
    const {
        state: {
            game,
            settings: { playersInfo },
        },
        dispatch,
    } = useStore();

    const [isRolesDistributed, setRolesDistributed] = React.useState(false);

    const startGame = (): void => {
        dispatch(SET_START_QUESTIONS, { time: Date.now() });
        dispatch(SET_GAME_PHASE_TO_QUESTIONS);
    };

    const cards = playersInfo.players.map(player => {
        return { name: player.name, isSpy: game.spies.indexOf(player.name) !== -1 };
    });

    return (
        <>
            <Header>Распределение ролей</Header>
            {isRolesDistributed ? (
                <>
                    <Paragraph> Роли распределены! </Paragraph>
                    <Button onClick={startGame} type="action">
                        Начать игру!
                    </Button>
                </>
            ) : (
                <CardsSlider
                    cards={cards}
                    location={game.location}
                    spies={cards.filter(s => s.isSpy).map(s => s.name)}
                    onFinish={(): void => setRolesDistributed(true)}
                />
            )}
        </>
    );
};

export default Rules;