import * as React from 'react';
import { block } from 'bem-cn';

import './Timer.less';

type Props = {
    startTimestamp: number;
    duration: number;
};

const b = block('timer');
const Timer: React.FC<Props> = ({ startTimestamp, duration }) => {
    const leftRef = React.useRef(null);
    const rightRef = React.useRef(null);
    const orbitRef = React.useRef(null);

    React.useLayoutEffect(() => {
        const timePassed = Date.now() - startTimestamp;
        const initialProgress = timePassed / duration;
        const half = duration / 2000;
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
        orbitRef.current.style.setProperty('animation-duration', `${(duration * (1 - initialProgress)) / 1000}s`);
    }, []);

    const timeLeft = duration - (Date.now() - startTimestamp);
    const m = Math.floor(timeLeft / 60000);
    const s = +((timeLeft % 60000) / 1000).toFixed(0);

    return (
        <div className={b()}>
            <div className={b('top-background-circle')} />
            <div className={b('hand')}>
                <span className={b('hand-internal', { left: true })} ref={leftRef} />
            </div>
            <div className={b('hand')}>
                <span className={b('hand-internal', { right: true })} ref={rightRef} />
            </div>
            <div className={b('orbit')} ref={orbitRef}>
                <div className={b('orbit-circle')} />
            </div>
            <div className={b('time-container')}>
                <span className={b('time-minutes')}>{m < 10 ? `0${m}` : m}</span>
                <span className={b('time-separator')}>:</span>
                <span className={b('time-seconds')}>{s < 10 ? `0${s}` : s}</span>
            </div>
        </div>
    );
};

export default Timer;
