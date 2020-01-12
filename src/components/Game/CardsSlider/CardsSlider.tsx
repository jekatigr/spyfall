import * as React from 'react';
import { block } from 'bem-cn';

import Card from 'components/Game/Card/Card';
import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';
import useEventListener from 'utils/useEventListener';

import './CardsSlider.less';

type CardType = {
    name: string;
    isSpy: boolean;
};

type Props = {
    location: string;
    cards: CardType[];
    spies: string[];
    onFinish: () => void;
};

type AnimationType = 'next' | 'previous' | 'center' | undefined;

const ANIMATION_DURATION_MS = 400;

const b = block('cards-slider');
const CardsSlider: React.FunctionComponent<Props> = ({ location, cards, spies, onFinish }) => {
    const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
    const [animationDirection, setAnimationDirection] = React.useState<AnimationType>(undefined);
    const [isCenterFlipped, setIsCenterFlipped] = React.useState<boolean>(false);
    const xDown = React.useRef<number>(-1);

    const handleTouchStart = (e): void => {
        const firstTouch = e.touches[0];
        if (firstTouch) {
            xDown.current = firstTouch.clientX;
        }
    };

    const handleTouchEnd = (e): void => {
        const firstTouch = e.changedTouches[0];
        if (firstTouch) {
            const diff = xDown.current - firstTouch.clientX;
            if (Math.abs(diff) > 40) {
                let newAnimationDirection;
                switch (true) {
                    case diff > 0: {
                        newAnimationDirection = 'next';
                        break;
                    }
                    case diff < 0: {
                        newAnimationDirection = 'previous';
                        break;
                    }
                    default:
                        break;
                }

                setIsCenterFlipped(false);
                setAnimationDirection(newAnimationDirection);
            }
        }
    };

    useEventListener('touchstart', handleTouchStart);
    useEventListener('touchend', handleTouchEnd);

    React.useEffect(() => {
        let timeoutId;
        if (animationDirection) {
            timeoutId = setTimeout(() => {
                let newCurrentCardIndex = currentCardIndex;
                switch (animationDirection) {
                    case 'next': {
                        newCurrentCardIndex = currentCardIndex + 1;
                        break;
                    }
                    case 'previous': {
                        newCurrentCardIndex = currentCardIndex - 1;
                        break;
                    }
                    default:
                        break;
                }

                setCurrentCardIndex(newCurrentCardIndex);
                setAnimationDirection(undefined);
            }, ANIMATION_DURATION_MS);
        }
        return (): void => {
            clearTimeout(timeoutId);
        };
    }, [animationDirection]);

    const handleClick = (e): void => {
        if (!animationDirection) {
            const parentWidth = e.currentTarget.parentElement.clientWidth;
            const point = e.clientX;

            const center = parentWidth / 2;
            const halfCardWidth = 250 / 2;

            let newAnimationDirection;
            let newIsCenterFlipped = isCenterFlipped;

            switch (true) {
                case point < center - halfCardWidth: {
                    newAnimationDirection = 'previous';
                    newIsCenterFlipped = false;
                    break;
                }
                case point > center + halfCardWidth: {
                    newAnimationDirection = 'next';
                    newIsCenterFlipped = false;
                    break;
                }
                default: {
                    newAnimationDirection = 'center';
                    newIsCenterFlipped = !isCenterFlipped;
                    break;
                }
            }

            setAnimationDirection(newAnimationDirection);
            setIsCenterFlipped(newIsCenterFlipped);
        }
    };

    if (currentCardIndex >= cards.length) {
        onFinish();
        return <></>;
    }

    const getNotice = (): React.ReactElement => {
        let text;

        switch (true) {
            case !animationDirection && isCenterFlipped && currentCardIndex === cards.length - 1: {
                text = 'Сдвиньте карту влево чтобы начать игру';
                break;
            }
            case !animationDirection && !isCenterFlipped: {
                text = 'Нажмите на карту, чтобы перевернуть ее';
                break;
            }
            case !animationDirection && isCenterFlipped: {
                text = 'Сдвиньте карту влево и передайте ход следующему игроку';
                break;
            }
            default: {
                text = '';
                break;
            }
        }

        return (
            <Paragraph weight="light" align="center" hasMargin classNames={b('notice')}>
                {text}
            </Paragraph>
        );
    };

    return (
        <div className={b()}>
            <Header classNames={b('player-name')}>{cards[currentCardIndex].name}</Header>
            <div className={b('roller')} onClick={handleClick}>
                <div className={b('roller-inner')}>
                    {cards.map((c, index) => {
                        const isCenter = currentCardIndex === index;

                        const isNext = currentCardIndex + 1 === index;
                        const isSecondNext = currentCardIndex + 2 === index;
                        const isNextHidden = index > currentCardIndex + 2;

                        const isPrevious = currentCardIndex - 1 === index;
                        const isSecondPrevious = index === currentCardIndex - 2;
                        const isPreviousHidden = index < currentCardIndex - 2;

                        const isNextAnimation = animationDirection === 'next';

                        const cardModifiers = {
                            center: isCenter,
                            flipped: isCenter && isCenterFlipped,
                            next: isNext,
                            'second-next': isSecondNext,
                            previous: isPrevious,
                            'second-previous': isSecondPrevious,
                            hidden: isNextHidden || isPreviousHidden,
                            'move-second-to-next': isNextAnimation && isSecondNext,
                            'move-next-to-center': isNextAnimation && isNext,
                            'move-center-to-previous': isNextAnimation && isCenter,
                            'move-previous-to-second': isNextAnimation && isPrevious,
                        };

                        const { name, isSpy } = c;

                        return (
                            <Card
                                name={name}
                                isSpy={isSpy}
                                location={location}
                                spies={spies}
                                className={b('card', cardModifiers)}
                                key={`${c.name + index}`}
                            />
                        );
                    })}
                </div>
            </div>
            {getNotice()}
        </div>
    );
};

export default CardsSlider;
