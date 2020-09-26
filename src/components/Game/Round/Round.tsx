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
        if (phase === ROUND_PHASE) {
            dispatch({ type: SET_GAME_PHASE_TO_DISCUSSION });
            dispatch({ type: SET_START_DISCUSSION, payload: { time: Date.now() } });
        } else {
            dispatch({ type: SET_GAME_PHASE_TO_IDENTIFY_SPIES });
        }
    };

    let timeLeft = game.discussion.discussionTime - (Date.now() - game.discussion.startDiscussion);
    if (phase === ROUND_PHASE) timeLeft = game.questions.questionsTime - (Date.now() - game.questions.startQuestions);

    return (
        <>
            <Header>{phase === ROUND_PHASE ? 'Кон' : 'Обсуждение'}</Header>
            {timeLeft < 0 ? (
                <>
                    <Paragraph> {phase === ROUND_PHASE ? 'Раунд завершён!' : 'Обсуждение завершено!'} </Paragraph>
                    <Button onClick={finishAction} type="action">
                        {phase === ROUND_PHASE ? 'Начать обсуждение' : 'Угадать шпионов'}
                    </Button>
                </>
            ) : (
                <>
                    <Timer duration={game.questions.questionsTime} startTimestamp={game.questions.startQuestions} />
                    <Paragraph> {`Таймер: ${Math.round(timeLeft / 1000)}`} </Paragraph>
                </>
            )}
        </>
    );
};

export default Round;
