import * as React from 'react';
import block from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Player from 'components/common/Player/Player';
import PlayersList from 'components/common/PlayersList/PlayersList';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
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
    const text = useI18n();

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
            <Header>{text('results.title')}</Header>
            {isCompleteWin && (
                <>
                    <Paragraph weight="light">{text('results.congrats_all_spies_catched')}</Paragraph>
                    <HandcuffsIcon className={b('icon', { handcuffs: true })} />
                </>
            )}
            {isPartialWin && (
                <>
                    <Paragraph weight="light">{text('results.you_identified_only_part_of_spies')}</Paragraph>
                    <LighterIcon className={b('icon', { lighter: true })} />
                </>
            )}
            {isLose && (
                <>
                    <Paragraph weight="light">{text('results.none_of_spies_was_catched')}</Paragraph>
                    <BrainHatIcon className={b('icon', { 'brain-hat': true })} />
                </>
            )}
            {!isCompleteWin && (
                <Button onClick={handleShowSpiesClicked} type="additional">
                    {text('results.show_spies')}
                </Button>
            )}
        </>
    );

    const renderSpies = (): JSX.Element => {
        const spies = list.filter(p => p.isSpy);

        return (
            <>
                <Header>{text('results.title_show_spies')}</Header>
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
                {text('results.start_new_game')}
            </Button>
        </div>
    );
};

export default Results;
