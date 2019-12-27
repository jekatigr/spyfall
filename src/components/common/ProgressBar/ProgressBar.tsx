import * as React from 'react';

import './ProgressBar.less';

type Props = {
    dotsCount?: number;
    step?: number;
};

const NEXT_STEP_ANIMATION_DURATION = 0.5; // in seconds
const CIRCLE_DIAMETER = 17; // in pixels

const ProgressBar: React.FunctionComponent<Props> = ({ dotsCount, step }) => {
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
            <div className="progress-bar__circle" key={i}>
                <div
                    className={`progress-bar__circle__inner${step > i ? ' progress-bar__circle__inner_show' : ''}`}
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
        <div className="progress-bar" ref={progressbarNode}>
            {dots}
            <div className="progress-bar__path">
                <div
                    className="progress-bar__path__inner"
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

ProgressBar.defaultProps = {
    dotsCount: 3,
    step: 2,
};

export default ProgressBar;
