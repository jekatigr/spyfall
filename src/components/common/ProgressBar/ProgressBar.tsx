import * as React from 'react';
import { block } from 'bem-cn';

import usePrevious from 'hooks/usePrevious';

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

    const [relativeCirclePart, setRelativeCirclePart] = React.useState(0);

    React.useEffect(() => {
        const cutsWidth = (progressbarNode.current.clientWidth - CIRCLE_DIAMETER) / (dotsCount - 1);
        const circlePart = CIRCLE_DIAMETER / cutsWidth;
        setRelativeCirclePart(circlePart);
    });

    const prevStep = usePrevious(step);

    const forwardAnimation = prevStep < step;
    const backwardAnimation = prevStep > step;

    const dots = React.useMemo(() => {
        const dotsJsx = [];
        for (let i = 0; i < dotsCount; i++) {
            const show = i < step - 1;
            const hide = i > step - 1;
            const slideIn = forwardAnimation && i === step - 1;
            const slideOut = backwardAnimation && i === step;
            const animationDelay = step > 1 && !slideOut ? NEXT_STEP_ANIMATION_DURATION * (1 - relativeCirclePart) : 0;

            dotsJsx.push(
                <div className={b('circle')} key={i}>
                    <div
                        className={b('circle-inner', { show, hide, 'slide-in': slideIn, 'slide-out': slideOut })}
                        style={{
                            animationDuration: `${NEXT_STEP_ANIMATION_DURATION * relativeCirclePart}s`,
                            animationDelay: `${animationDelay}s`,
                        }}
                    />
                </div>,
            );
        }

        return dotsJsx;
    }, [dotsCount, step]);

    const pathPosition = (100 / (dotsCount - 1)) * (step - 1);

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
                >
                    <div className={b('path-inner-tail')} />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
