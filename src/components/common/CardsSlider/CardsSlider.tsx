import React, { useState, useRef, useEffect, useCallback } from 'react';
import { block } from 'bem-cn';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from 'components/common/Card/Card';
import Header from 'components/common/Header/Header';
import Paragraph from 'components/common/Paragraph/Paragraph';

import 'swiper/swiper.less';
import './CardsSlider.less';

SwiperCore.use([EffectCoverflow]);

type CardType = {
    name: string;
    isSpy: boolean;
};

type Props = {
    location: string;
    cards: CardType[];
    spies: string[];
    isSpiesFamiliar: boolean;
    swipeCardNoticeText: string;
    flipCardNoticeText: string;
    swipeLastCardNoticeText: string;
    spyText: string;
    spySubtitleText: string;
    familiarNoticeText: string;
    onFinish: () => void;
};

enum AnimationType {
    NEXT = 'next',
    PREVIOUS = 'previous',
}

const ANIMATION_DURATION_MS = 300;

const b = block('cards-slider');
const CardsSlider: React.FC<Props> = ({
    location,
    cards,
    spies,
    isSpiesFamiliar,
    swipeCardNoticeText,
    flipCardNoticeText,
    swipeLastCardNoticeText,
    spyText,
    spySubtitleText,
    familiarNoticeText,
    onFinish,
}) => {
    const swiper = useRef<SwiperCore>();

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const currentCardIndexRef = useRef(0);
    const [isCenterFlipped, setIsCenterFlipped] = useState(false);
    const shouldBackFlipIndex = useRef(-1);

    const [animationType, setAnimationType] = useState<AnimationType>(undefined);
    const animationTimerId = useRef(-1);

    useEffect(() => {
        // swiper doesn't update callback when state changes
        currentCardIndexRef.current = currentCardIndex;
    }, [currentCardIndex]);

    const getNotice = (): JSX.Element => {
        let text;

        switch (true) {
            case !animationType && isCenterFlipped && currentCardIndex === cards.length - 1: {
                text = swipeLastCardNoticeText;
                break;
            }
            case !animationType && !isCenterFlipped: {
                text = flipCardNoticeText;
                break;
            }
            case !animationType && isCenterFlipped: {
                text = swipeCardNoticeText;
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

    const handleClick = (): void => {
        if (!isCenterFlipped) {
            shouldBackFlipIndex.current = currentCardIndex;
        } else {
            shouldBackFlipIndex.current = -1;
        }

        setIsCenterFlipped(!isCenterFlipped);
        setAnimationType(undefined);
    };

    const resetTimer = (): void => {
        clearTimeout(animationTimerId.current);
    };

    const handleSlideChange = useCallback((swiperInstance: SwiperCore): void => {
        const newCurrentSlideIndex = swiperInstance.activeIndex;

        resetTimer();

        let newAnimationType;

        if (newCurrentSlideIndex > currentCardIndexRef.current) {
            newAnimationType = AnimationType.NEXT;
        }

        if (newCurrentSlideIndex < currentCardIndexRef.current) {
            newAnimationType = AnimationType.PREVIOUS;
        }

        let timerId;
        if (newAnimationType) {
            timerId = setTimeout(() => {
                setAnimationType(undefined);
                shouldBackFlipIndex.current = -1;
            }, ANIMATION_DURATION_MS);

            animationTimerId.current = timerId;
        }

        setAnimationType(newAnimationType);
        setCurrentCardIndex(newCurrentSlideIndex);
        setIsCenterFlipped(false);

        // no deps because of swiper never updates onSlideChange callback
    }, []);

    const handleSlideTransitionEnd = (swiperInstance: SwiperCore): void => {
        const newCurrentSlideIndex = swiperInstance.activeIndex;

        if (newCurrentSlideIndex > cards.length - 1) {
            onFinish();
            resetTimer();
        }
    };

    useEffect(() => {
        return (): void => {
            resetTimer();

            swiper.current.destroy();
        };
    }, []);

    return (
        <div className={b()}>
            <Header classNames={b('name')}>{cards[Math.min(currentCardIndex, cards.length - 1)].name}</Header>
            <Swiper
                className={b('slider')}
                spaceBetween={18}
                slidesPerView="auto"
                onSlideChange={handleSlideChange}
                onSwiper={(swiperInstance): void => {
                    swiper.current = swiperInstance;
                }}
                onSlideNextTransitionEnd={handleSlideTransitionEnd}
                effect="coverflow"
                centeredSlides
                freeModeMomentum={false}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -25,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                }}
                threshold={5}
            >
                {cards.map(({ name, isSpy }, index) => {
                    const isPrevious = currentCardIndex - 1 === index;
                    const isCenter = currentCardIndex === index;
                    const isNext = currentCardIndex + 1 === index;

                    const isForwardAnimation = animationType === AnimationType.NEXT;
                    const isBackwardAnimation = animationType === AnimationType.PREVIOUS;
                    const inAnimation = isForwardAnimation || isBackwardAnimation;

                    const needBackFlip = inAnimation && (isNext || isPrevious) && shouldBackFlipIndex.current === index;
                    const isFadeOut =
                        !needBackFlip && ((isForwardAnimation && isPrevious) || (isBackwardAnimation && isNext));

                    const cardModifiers = {
                        'fade-in': inAnimation && isCenter,
                        'fade-out': isFadeOut,
                        faded: !needBackFlip && !isCenter,
                        flipped: isCenter && isCenterFlipped,
                        'back-flip': needBackFlip,
                    };

                    return (
                        <SwiperSlide className={b('slide')} onClick={handleClick} key={`${name + index}`}>
                            <Card
                                name={name}
                                isSpy={isSpy}
                                location={location}
                                spyText={spyText}
                                spySubtitleText={spySubtitleText}
                                familiarNoticeText={familiarNoticeText}
                                spies={spies}
                                isSpiesFamiliar={isSpiesFamiliar}
                                className={b('card', cardModifiers)}
                            />
                        </SwiperSlide>
                    );
                })}
                <SwiperSlide className={b('slide')} key="last-slide">
                    {' '}
                </SwiperSlide>
            </Swiper>

            {getNotice()}
        </div>
    );
};

export default CardsSlider;
