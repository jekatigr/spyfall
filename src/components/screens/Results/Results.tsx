import * as React from 'react';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';

// import { SET_APP_STATE_TO_START_SCREEN } from 'store/reducers/app';
// import { SET_IDENTIFIED_PLAYERS } from 'store/reducers/game';

import { useStore } from 'store';
import Paragraph from '../../common/Paragraph/Paragraph';

const RESULT = {
    W: 0, // Identified: all spies and no peaceful citizens
    L1: 1, // Identified: all spies and peaceful citizens
    L2: 2, // Identified: part of spies and no peaceful citizens
    L3: 3, // Identified: part of spies and peaceful citizens
    L4: 4, // Identified: no spies and peaceful citizens
    L5: 5, // Identified: no spies and no peaceful citizens
};

const Results: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { state, dispatch } = useStore();

    const identifiedPlayers = [];
    const spies = [];

    const [showSpies, setShowSpies] = React.useState(false);

    let peacefulCitizenDied = false;
    let oneSpyIdentified = false;
    identifiedPlayers.forEach(identifiedPlayer => {
        if (spies.indexOf(identifiedPlayer) === -1) peacefulCitizenDied = true;
        else oneSpyIdentified = true;
    });

    let allSpiesIdentified = true;
    spies.forEach(spy => {
        if (identifiedPlayers.indexOf(spy) === -1) allSpiesIdentified = false;
    });

    let result = RESULT.W;
    if (!oneSpyIdentified && !peacefulCitizenDied) result = RESULT.L5;
    if (!oneSpyIdentified && peacefulCitizenDied) result = RESULT.L4;
    if (oneSpyIdentified && peacefulCitizenDied) result = RESULT.L3;
    if (oneSpyIdentified && !peacefulCitizenDied) result = RESULT.L2;
    if (allSpiesIdentified && peacefulCitizenDied) result = RESULT.L1;
    if (allSpiesIdentified && !peacefulCitizenDied) result = RESULT.W;

    let resultJSX;
    switch (result) {
        case RESULT.W:
            resultJSX = <Paragraph>Поздравляем! Ни одному шпиону не удалось скрыться!</Paragraph>;
            break;
        case RESULT.L1:
            resultJSX = <Paragraph>Плохо! Вы раскрыли всех шпионов и не шпионов тоже раскрыли!</Paragraph>;
            break;
        case RESULT.L2:
            resultJSX = <Paragraph>Вы раскрыли только часть шпионов, остальные скрылись в ночи!</Paragraph>;
            break;
        case RESULT.L3:
            resultJSX = (
                <Paragraph>Вы раскрыли только часть шпионов (и не шпионов тоже), остальные скрылись в ночи!</Paragraph>
            );
            break;
        case RESULT.L4:
            resultJSX = <Paragraph>Шпионы оказались умнее - вы не раскрыли ни одного из них!</Paragraph>;
            break;
        case RESULT.L5:
            resultJSX = <Paragraph>Такого не должно было произойти!</Paragraph>;
            break;
        default:
    }

    const startNewGame = (): void => {
        // dispatch({ type: SET_IDENTIFIED_PLAYERS, payload: { identifiedPlayers: [] } });
        // dispatch({ type: SET_APP_STATE_TO_START_SCREEN });
    };

    let bodyJSX = [
        <>
            {resultJSX}
            {result !== RESULT.W ? (
                <Button onClick={(): void => setShowSpies(true)} type="additional">
                    Раскрыть шпионов
                </Button>
            ) : (
                ''
            )}
        </>,
    ];
    if (showSpies) bodyJSX = spies.map(spy => <Paragraph key={spy}> ШПИОН - {spy} </Paragraph>);

    return (
        <>
            <Header> {showSpies ? 'Результат' : 'Раскрыть шпионов'} </Header>
            {bodyJSX}
            <Button onClick={startNewGame} type="action">
                Начать новую игру
            </Button>
        </>
    );
};

export default Results;
