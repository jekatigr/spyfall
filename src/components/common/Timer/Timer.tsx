import React, { useCallback } from 'react';
import { block } from 'bem-cn';

import './Timer.less';

type Props = {
    startTimestamp: number;
    fullDuration: number; // in milliseconds
    onTimeUp: () => void;
};

const b = block('timer');
const Timer: React.FC<Props> = ({ startTimestamp, fullDuration, onTimeUp }) => {
    const leftRef = React.useRef(null);
    const rightRef = React.useRef(null);
    const orbitRef = React.useRef(null);

    const [timeUp, setTimeUp] = React.useState(false);
    const [{ minutes, seconds }, setDisplayTime] = React.useState({ minutes: '00', seconds: '00' });

    const handleTimeUp = useCallback((): void => {
        onTimeUp();
        setTimeUp(true);
    }, [onTimeUp, setTimeUp]);

    const setDisplayTimeCallback = React.useCallback(
        (timeLeft: number) => {
            const m = Math.floor(timeLeft / 60000);
            const s = Math.floor((timeLeft % 60000) / 1000);

            setDisplayTime({
                minutes: m < 10 ? `0${m}` : `${m}`,
                seconds: s < 10 ? `0${s}` : `${s}`,
            });
        },
        [setDisplayTime],
    );

    React.useEffect(() => {
        const timeLeft = fullDuration - (Date.now() - startTimestamp);

        let timerId;
        if (timeLeft > 0) {
            setDisplayTimeCallback(timeLeft);
            timerId = setInterval(() => {
                const intervalTimeLeft = fullDuration - (Date.now() - startTimestamp);

                if (intervalTimeLeft > 0) {
                    setDisplayTimeCallback(intervalTimeLeft);
                } else {
                    clearInterval(timerId);
                    handleTimeUp();
                }
            }, 1000);
        } else {
            handleTimeUp();
        }

        return (): void => {
            clearInterval(timerId);
        };
    }, [startTimestamp, fullDuration, handleTimeUp]);

    React.useLayoutEffect(() => {
        const timePassed = Date.now() - startTimestamp;
        const initialProgress = timePassed / fullDuration;
        const half = fullDuration / 2000;
        if (initialProgress < 0.5) {
            const rightAnimationDuration = half * (1 - initialProgress * 2);
            rightRef.current.style.setProperty('animation-duration', `${rightAnimationDuration}s`);
            rightRef.current.style.setProperty('--initialRotation', `${45 + 180 * initialProgress * 2}deg`);
            leftRef.current.style.setProperty('animation-duration', `${half}s`);
            leftRef.current.style.setProperty('animation-delay', `${rightAnimationDuration}s`);
        } else {
            leftRef.current.style.setProperty('--initialRotation', `${45 + 180 * (initialProgress - 0.5) * 2}deg`);
            leftRef.current.style.setProperty('animation-duration', `${half * (1 - (initialProgress - 0.5) * 2)}s`);
        }

        orbitRef.current.style.setProperty('--initialRotation', `${360 * initialProgress}deg`);
        orbitRef.current.style.setProperty('animation-duration', `${(fullDuration * (1 - initialProgress)) / 1000}s`);
    }, []);

    return (
        <div className={b()}>
            {!timeUp && <div className={b('top-background-circle')} />}
            <div className={b('hand')}>
                <span className={b('hand-internal', { left: true, 'time-up': timeUp })} ref={leftRef} />
            </div>
            <div className={b('hand')}>
                <span className={b('hand-internal', { right: true, 'time-up': timeUp })} ref={rightRef} />
            </div>
            {!timeUp && (
                <div className={b('orbit')} ref={orbitRef}>
                    <div className={b('orbit-circle')} />
                </div>
            )}
            <div className={b('time-container')}>
                <span className={b('time-minutes')}>{minutes}</span>
                <span className={b('time-separator')}>:</span>
                <span className={b('time-seconds')}>{seconds}</span>
            </div>
        </div>
    );
};

export default Timer;
