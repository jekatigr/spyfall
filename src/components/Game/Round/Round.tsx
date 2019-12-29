import * as React from 'react';

import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Button from 'components/common/Button/Button';

import { useStore } from 'store';
import {
    SET_GAME_STATE_TO_DISCUSSION,
    SET_GAME_STATE_TO_IDENTIFY_SPIES,
    SET_START_DISCUSSION,
} from 'store/reducers/game';

type Props = {
    isRound: boolean;
};

const Round: React.FunctionComponent<Props> = ({ isRound }) => {
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
        if (isRound) {
            dispatch(SET_GAME_STATE_TO_DISCUSSION);
            dispatch(SET_START_DISCUSSION, { time: Date.now() });
        } else {
            dispatch(SET_GAME_STATE_TO_IDENTIFY_SPIES);
        }
    };

    let timeLeft = game.discussion.discussionTime - (Date.now() - game.discussion.startDiscussion);
    if (isRound) timeLeft = game.roundInfo.roundTime - (Date.now() - game.roundInfo.startRound);

    return (
        <>
            <Header>{isRound ? 'Кон' : 'Обсуждение'}</Header>
            {timeLeft < 0 ? (
                <>
                    <Paragraph> {isRound ? 'Раунд завершён!' : 'Обсуждение завершено!'} </Paragraph>
                    <Button onClick={finishAction} type="action">
                        {isRound ? 'Начать обсуждение' : 'Выбрать шпиона'}
                    </Button>
                </>
            ) : (
                <Paragraph> {`Таймер: ${Math.round(timeLeft / 1000)}`} </Paragraph>
            )}
        </>
    );
};

export default Round;
