import * as React from 'react';
import { block } from 'bem-cn';

import './ProgressBar.less';

type Props = {
    dotsCount?: number;
    step?: number;
};

const NEXT_STEP_ANIMATION_DURATION = 0.5; // in seconds
const CIRCLE_DIAMETER = 17; // in pixels

const b = block('progress-bar');
const ProgressBar: React.FC<Props> = ({ dotsCount = 3, step = 0 }) => {
    const progressbarNode = React.useRef(null);

    const [circleAnimationDuration, setCircleAnimationDuration] = React.useState(0);

    React.useEffect(() => {
        const cutsWidth = progressbarNode.current.clientWidth / (dotsCount - 1);
        const relativeCirclePart = cutsWidth / CIRCLE_DIAMETER;
        const duration = NEXT_STEP_ANIMATION_DURATION / relativeCirclePart;
        setCircleAnimationDuration(duration);
    });

    const dots = [];
    for (let i = 0; i < dotsCount; i++) {
        dots.push(
            <div className={b('circle')} key={i}>
                <div
                    className={b('circle-inner', { show: step > i })}
                    style={{
                        animationDuration: `${circleAnimationDuration}s`,
                        animationDelay: `${step > 1 ? NEXT_STEP_ANIMATION_DURATION : 0}s`,
                    }}
                />
            </div>,
        );
    }

    const pathPosition = Math.ceil((100 / (dotsCount - 1)) * (step - 1));

    return (
        <div className={b()} ref={progressbarNode}>
            {dots}
            <div className={b('path')}>
                <div
                    className={b('path-inner')}
                    style={{
                        transform: `translateX(${pathPosition}%)`,
                        transition: `${NEXT_STEP_ANIMATION_DURATION}s`,
                        transitionTimingFunction: 'linear',
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
