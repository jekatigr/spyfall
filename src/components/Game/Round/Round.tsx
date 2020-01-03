import * as React from 'react';

import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';

import { useStore } from 'store';
import {
    SET_DISCUSSION_TIME,
    SET_GAME_PHASE_TO_DISCUSSION,
    SET_GAME_PHASE_TO_IDENTIFY_SPIES,
    SET_QUESTIONS_TIME,
    SET_START_DISCUSSION,
} from 'store/reducers/game';

const QUESTIONS_PHASE = 'QUESTIONS';

type Props = {
    phase: 'QUESTIONS' | 'DISCUSSION';
};

const Round: React.FunctionComponent<Props> = ({ phase }) => {
    const {
        state: { game },
        dispatch,
    } = useStore();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [date, setDate] = React.useState(Date.now);

    React.useEffect(() => {
        const interval = setInterval(() => setDate(Date.now()), 1000);

        return (): void => {
            clearInterval(interval);
        };
    });

    const finishAction = (): void => {
        if (phase === QUESTIONS_PHASE) {
            dispatch(SET_GAME_PHASE_TO_DISCUSSION);
            dispatch(SET_START_DISCUSSION, { time: Date.now() });
        } else {
            dispatch(SET_GAME_PHASE_TO_IDENTIFY_SPIES);
        }
    };

    const changeTime = (gamePhase, delta): void => {
        // phase === QUESTIONS by default
        let currentTime = game.discussion.discussionTime;
        let action = SET_DISCUSSION_TIME;
        if (gamePhase === QUESTIONS_PHASE) {
            currentTime = game.questions.questionsTime;
            action = SET_QUESTIONS_TIME;
        }
        dispatch(action, { time: currentTime + delta * 1000 * 60 });
    };

    let timeLeft = game.discussion.discussionTime - (Date.now() - game.discussion.startDiscussion);
    if (phase === QUESTIONS_PHASE)
        timeLeft = game.questions.questionsTime - (Date.now() - game.questions.startQuestions);

    return (
        <>
            <Header>{phase === QUESTIONS_PHASE ? 'Кон' : 'Обсуждение'}</Header>
            {timeLeft < 0 ? (
                <>
                    <Paragraph> {phase === QUESTIONS_PHASE ? 'Раунд завершён!' : 'Обсуждение завершено!'} </Paragraph>
                    <Button onClick={finishAction} type="action">
                        {phase === QUESTIONS_PHASE ? 'Начать обсуждение' : 'Угадать шпионов'}
                    </Button>
                </>
            ) : (
                <>
                    <div onClick={(): void => changeTime(phase, +1)}> + </div>
                    <Paragraph> {`Таймер: ${Math.round(timeLeft / 1000)}`} </Paragraph>
                    <div onClick={(): void => changeTime(phase, -1)}> - </div>
                </>
            )}
        </>
    );
};

export default Round;
