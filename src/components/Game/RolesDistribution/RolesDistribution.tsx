import * as React from 'react';

import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import CardsSlider from 'components/Game/CardsSlider/CardsSlider';

import { useStore } from 'store';
import { SET_GAME_STATE_TO_ROUND } from 'store/reducers/game';

const cards = [
    {
        name: 'Игрок 1',
        isSpy: true,
    },
    {
        name: 'Игрок 2',
        isSpy: false,
    },
    {
        name: 'Игрок 3',
        isSpy: false,
    },
    {
        name: 'Игрок 4',
        isSpy: true,
    },
];

const Rules: React.FunctionComponent = () => {
    const { dispatch } = useStore();

    const [isRolesDistributed, setRolesDistributed] = React.useState(false);

    return (
        <>
            <Header>Распределение ролей</Header>
            {isRolesDistributed ? (
                <>
                    <Paragraph> Роли распределены! </Paragraph>
                    <Button onClick={(): void => dispatch(SET_GAME_STATE_TO_ROUND)} type="action">
                        Начать раунд
                    </Button>
                </>
            ) : (
                <CardsSlider
                    cards={cards}
                    location="Москва"
                    spies={cards.filter(s => s.isSpy).map(s => s.name)}
                    onFinish={(): void => setRolesDistributed(true)}
                />
            )}
        </>
    );
};

export default Rules;
