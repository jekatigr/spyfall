import * as React from 'react';
import { block } from 'bem-cn';

import Paragraph from 'components/common/Paragraph/Paragraph';

import CardFace from 'icons/card-face.svg?sprite';
import CardBack from 'icons/card-back.svg?sprite';
import SpyIcon from 'icons/circle-spy.svg?sprite';
import LocationIcon from 'icons/circle-location.svg?sprite';

import './Card.less';

type Props = {
    name: string;
    isSpy: boolean;
    location: string;
    spies?: string[];
    isSpiesFamiliar: boolean;
    className?: string;
};

const b = block('card');
const Card: React.FC<Props> = ({ name, isSpy, location, spies = [], isSpiesFamiliar, className }) => (
    <div className={b.mix(className)}>
        <div className={b('face')}>
            <CardFace className={b('face-background')} />
            <div className={b('face-inner')}>
                {isSpy ? (
                    <>
                        <SpyIcon className={b('icon', { small: isSpiesFamiliar && spies.length > 1 })} />
                        <Paragraph weight="bold" align="center" classNames={b('text')}>
                            Вы - шпион
                        </Paragraph>
                        <Paragraph weight="light" align="center" classNames={b('text')}>
                            будьте скрытным и внимательным!
                        </Paragraph>
                        {isSpiesFamiliar && spies.length > 1 ? (
                            <>
                                <Paragraph
                                    weight="light"
                                    align="center"
                                    classNames={[b('text'), b('text-cospies-label')]}
                                >
                                    На вашей стороне:
                                </Paragraph>
                                <Paragraph weight="bold" align="center" classNames={b('text')}>
                                    {spies.filter(s => s !== name).join(', ')}
                                </Paragraph>
                            </>
                        ) : null}
                    </>
                ) : (
                    <>
                        <LocationIcon className={b('icon')} />
                        <Paragraph weight="medium" align="center" classNames={b('text')} hasMargin>
                            {location}
                        </Paragraph>
                    </>
                )}
            </div>
        </div>
        <CardBack className={b('back')} />
    </div>
);

export default Card;
