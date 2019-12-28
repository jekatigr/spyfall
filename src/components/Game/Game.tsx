import * as React from 'react';

import CardsSlider from 'components/Game/CardsSlider/CardsSlider';

const cards = [
    {
        name: 'Игрок 1',
        isSpy: true,
    },
    {
        name: 'Игрок 2',
        isSpy: true,
    },
    {
        name: 'Игрок 3',
        isSpy: true,
    },
    {
        name: 'Игрок 4',
        isSpy: true,
    },
    {
        name: 'Игрок 5',
        isSpy: true,
    },
    {
        name: 'Игрок 6',
        isSpy: true,
    },
    {
        name: 'Игрок 7',
        isSpy: true,
    },
    {
        name: 'Игрок 8',
        isSpy: true,
    },
];

const Game: React.FunctionComponent = () => (
    <CardsSlider cards={cards} location="Москва" spies={cards.filter(s => s.isSpy).map(s => s.name)} />
);

export default Game;
