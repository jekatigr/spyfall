import React, { useCallback } from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';
import Switcher from 'components/common/Switcher/Switcher';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import useNotification from 'hooks/useNotification';
import { setDiscussionTimeStart, toggleSound } from 'store/time/actions';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

import './Questions.less';

const b = block('questions');
const Questions: React.FC = () => {
    const {
        state: {
            time: {
                questions: { start, limit },
                sound,
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();
    const { play, initialize, initialized } = useNotification('Questions');

    const [timeUp, setTimeUp] = React.useState(false);

    const handleTimeUp = useCallback((): void => {
        if (sound) {
            play();
        }
        setTimeUp(true);
    }, [sound, setTimeUp, play]);

    const handleStartDiscussionClick = (): void => {
        initialize();
        dispatch(setDiscussionTimeStart(Date.now()));
        dispatch(setScreen(SCREENS.DISCUSSION));
    };

    const handleSoundToggle = (): void => {
        let justInitialized = false;
        if (!initialized) {
            initialize();
            justInitialized = true;
        }

        if (sound && justInitialized) {
            return;
        }

        dispatch(toggleSound());
    };

    return (
        <div className={b()}>
            <Header>{text('questions.title')}</Header>
            <Switcher onChange={handleSoundToggle} enabled={sound && initialized}>
                {text('settings.time.sound_after_time_up')}
            </Switcher>
            <div className={b('timer', { 'has-margin': !timeUp })}>
                <Timer fullDuration={limit * 1000 * 60} startTimestamp={start} onTimeUp={handleTimeUp} />
            </div>
            {timeUp && (
                <Button onClick={handleStartDiscussionClick} type="action">
                    {text('questions.start_discussion')}
                </Button>
            )}
        </div>
    );
};

export default Questions;
