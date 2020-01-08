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
    className?: string;
};

const b = block('card');
const Card: React.FunctionComponent<Props> = ({ name, isSpy, location, spies, className }) => {
    return (
        <div className={b.mix(className)}>
            <div className={b('face')}>
                <CardFace className={b('face-background')} />
                <div className={b('face-inner')}>
                    {isSpy ? (
                        <>
                            <SpyIcon className={b('icon', { small: spies.length > 1 })} />
                            <Paragraph weight="bold" align="center" classNames={b('text')}>
                                Вы - шпион
                            </Paragraph>
                            <Paragraph weight="light" align="center" classNames={b('text')}>
                                будьте скрытным и внимательным!
                            </Paragraph>
                            {spies.length > 1 ? (
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
};

Card.defaultProps = {
    spies: [],
};

export default Card;
