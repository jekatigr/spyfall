import * as React from 'react';

import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';

import { useStore } from 'store';
import {
    SET_GAME_PHASE_TO_DISCUSSION,
    SET_GAME_PHASE_TO_IDENTIFY_SPIES,
    SET_START_DISCUSSION,
} from 'store/reducers/game';

const ROUND_PHASE = 'QUESTIONS';

type Props = {
    phase: 'QUESTIONS' | 'DISCUSSION';
};

const Round: React.FC<Props> = ({ phase }) => {
    const {
        state: {
            game: {
                questions: { questionsTime, startQuestions },
                discussion: { discussionTime, startDiscussion },
            },
        },
        dispatch,
    } = useStore();

    const [isStarted, setIsStarted] = React.useState(true);

    React.useEffect(() => {
        let timeLeft = discussionTime - (Date.now() - startDiscussion);
        if (phase === ROUND_PHASE) timeLeft = questionsTime - (Date.now() - startQuestions);

        const interval = setInterval(() => setIsStarted(false), timeLeft);

        return (): void => {
            clearInterval(interval);
        };
    }, [questionsTime, startQuestions, discussionTime, startDiscussion]);

    const finishAction = (): void => {
        if (phase === ROUND_PHASE) {
            dispatch(SET_GAME_PHASE_TO_DISCUSSION);
            dispatch(SET_START_DISCUSSION, { time: Date.now() });
        } else {
            dispatch(SET_GAME_PHASE_TO_IDENTIFY_SPIES);
        }
    };

    return (
        <>
            <Header>{phase === ROUND_PHASE ? 'Кон' : 'Обсуждение'}</Header>
            {!isStarted ? (
                <>
                    <Paragraph> {phase === ROUND_PHASE ? 'Раунд завершён!' : 'Обсуждение завершено!'} </Paragraph>
                    <Button onClick={finishAction} type="action">
                        {phase === ROUND_PHASE ? 'Начать обсуждение' : 'Угадать шпионов'}
                    </Button>
                </>
            ) : (
                <>
                    {phase === ROUND_PHASE ? (
                        <Timer duration={questionsTime} startTimestamp={startQuestions} />
                    ) : (
                        <Timer duration={discussionTime} startTimestamp={startDiscussion} />
                    )}
                </>
            )}
        </>
    );
};

export default Round;
