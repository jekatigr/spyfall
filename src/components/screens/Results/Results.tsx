import * as React from 'react';
import block from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Player from 'components/common/Player/Player';
import PlayersList from 'components/common/PlayersList/PlayersList';

import { useStore } from 'store';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

import HandcuffsIcon from 'icons/handcuffs.svg?sprite';
import LighterIcon from 'icons/lighter.svg?sprite';
import BrainHatIcon from 'icons/brain-hat.svg?sprite';

import './Results.less';

const b = block('results');
const Results: React.FC = () => {
    const {
        state: {
            players: { list },
        },
        dispatch,
    } = useStore();

    const [showSpies, setShowSpies] = React.useState(false);

    const isCompleteWin = React.useMemo(() => list.every(p => !p.isSpy || (p.isSpy && p.isUnderSuspicion)), [list]);
    const isPartialWin = React.useMemo(() => !isCompleteWin && list.some(p => p.isSpy && p.isUnderSuspicion), [
        list,
        isCompleteWin,
    ]);
    const isLose = React.useMemo(
        () => !isCompleteWin && !isPartialWin && list.every(p => !p.isSpy || (p.isSpy && !p.isUnderSuspicion)),
        [list, isCompleteWin, isPartialWin],
    );

    const startNewGame = (): void => {
        dispatch(setScreen(SCREENS.START_SCREEN));
    };

    const handleShowSpiesClicked = (): void => {
        setShowSpies(true);
    };

    const renderResult = (): JSX.Element => (
        <>
            <Header>Результат</Header>
            {isCompleteWin && (
                <>
                    <Paragraph weight="light">Поздравляем! Ни одному шпиону не удалось скрыться!</Paragraph>
                    <HandcuffsIcon className={b('icon', { handcuffs: true })} />
                </>
            )}
            {isPartialWin && (
                <>
                    <Paragraph weight="light">
                        Вы раскрыли только нескольких шпионов, остальные скрылись в ночи!
                    </Paragraph>
                    <LighterIcon className={b('icon', { lighter: true })} />
                </>
            )}
            {isLose && (
                <>
                    <Paragraph weight="light">Шпионы оказались умнее – вы не раскрыли ни одного из них!</Paragraph>
                    <BrainHatIcon className={b('icon', { 'brain-hat': true })} />
                </>
            )}
            {!isCompleteWin && (
                <Button onClick={handleShowSpiesClicked} type="additional">
                    Раскрыть шпионов
                </Button>
            )}
        </>
    );

    const renderSpies = (): JSX.Element => {
        const spies = list.filter(p => p.isSpy);

        return (
            <>
                <Header>Раскрыть шпионов</Header>
                {spies.length === 1 && (
                    <div className={b('players', { center: true, one: true })}>
                        <Player name={spies[0].name} size="big" color="pink" icon="spy" />
                    </div>
                )}
                {spies.length === 2 && (
                    <div className={b('players', { center: true, two: true })}>
                        <div className={b('first-player')}>
                            <Player name={spies[0].name} size="medium" color="pink" icon="spy" />
                        </div>
                        <Player name={spies[1].name} size="medium" color="pink" icon="spy" />
                    </div>
                )}
                {spies.length > 2 && (
                    <PlayersList className={b('players')}>
                        {spies.map(({ id, name }) => (
                            <Player key={id} name={name} color="pink" icon="spy" />
                        ))}
                    </PlayersList>
                )}
            </>
        );
    };

    return (
        <div className={b()}>
            {!showSpies && renderResult()}
            {showSpies && renderSpies()}
            <Button onClick={startNewGame} type="action">
                Начать новую игру
            </Button>
        </div>
    );
};

export default Results;
