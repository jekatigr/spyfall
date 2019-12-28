import * as React from 'react';

import Card from 'components/Game/Card/Card';

import composeClassNames from 'utils/composeClassNames';

import './CardsSlider.less';

type CardType = {
    name: string;
    isSpy: boolean;
};

type Props = {
    location: string;
    locationType: 'basic' | 'custom';
    cards: CardType[];
    spies: string[];
};

type AnimationType = 'next' | 'previous' | 'center' | undefined;

const ANIMATION_DURATION_MS = 400;

const CardsSlider: React.FunctionComponent<Props> = ({ location, locationType, cards, spies }) => {
    const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
    const [animationDirection, setAnimationDirection] = React.useState<AnimationType>(undefined);
    const [isCenterFlipped, setIsCenterFlipped] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (animationDirection) {
            setTimeout(() => {
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

    return (
        <div className="cards-slider" onClick={handleClick}>
            <div className="cards-slider__inner">
                {cards.map((c, index) => {
                    const isCenter = currentCardIndex === index;

                    const isNext = currentCardIndex + 1 === index;
                    const isSecondNext = currentCardIndex + 2 === index;
                    const isNextHidden = index > currentCardIndex + 2;

                    const isPrevious = currentCardIndex - 1 === index;
                    const isSecondPrevious = index === currentCardIndex - 2;
                    const isPreviousHidden = index < currentCardIndex - 2;

                    const isNextAnimation = animationDirection === 'next';
                    // const isPreviousAnimation = animationDirection === 'previous';

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
                            locationType={locationType}
                            spies={spies}
                            className={composeClassNames('cards-slider__card', cardModifiers, 'card')}
                            key={`${c.name + index}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CardsSlider;
