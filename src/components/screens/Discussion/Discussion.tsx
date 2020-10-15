import React, { useCallback } from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';
import Switcher from 'components/common/Switcher/Switcher';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import useNotification from 'hooks/useNotification';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';
import { toggleSound } from 'store/time/actions';

import './Discussion.less';

const b = block('discussion');
const Discussion: React.FC = () => {
    const {
        state: {
            time: {
                discussion: { start, limit },
                sound,
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();
    const { play, initialize, initialized } = useNotification('Discussion');

    const [timeUp, setTimeUp] = React.useState(false);

    const handleTimeUp = useCallback((): void => {
        if (sound) {
            play();
        }
        setTimeUp(true);
    }, [sound, setTimeUp, play]);

    const handleIdentifySpiesClick = (): void => {
        dispatch(setScreen(SCREENS.IDENTIFY_SPIES));
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
            <Header>{text('discussion.title')}</Header>
            <Switcher onChange={handleSoundToggle} enabled={sound && initialized}>
                {text('settings.time.sound_after_time_up')}
            </Switcher>
            <div className={b('timer', { 'has-margin': !timeUp })}>
                <Timer fullDuration={limit * 1000 * 60} startTimestamp={start} onTimeUp={handleTimeUp} />
            </div>
            {timeUp && (
                <Button onClick={handleIdentifySpiesClick} type="action">
                    {text('discussion.guess_spies')}
                </Button>
            )}
        </div>
    );
};

export default Discussion;
