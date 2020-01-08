import * as React from 'react';
import { block } from 'bem-cn';

import Paragraph from 'components/common/Paragraph/Paragraph';

import prefixedAsset from 'utils/assetPrefix';

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
                <img className={b('face-background')} src={prefixedAsset('card-face.svg')} />
                <div className={b('face-inner')}>
                    {isSpy ? (
                        <>
                            <img
                                className={b('icon', { small: spies.length > 1 })}
                                src={prefixedAsset('circle-spy.svg')}
                            />
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
                                    <Paragraph weight="bold" align="center" classNames={[b('text')]}>
                                        {spies.filter(s => s !== name).join(', ')}
                                    </Paragraph>
                                </>
                            ) : null}
                        </>
                    ) : (
                        <>
                            <img className={b('icon')} src={prefixedAsset('circle-location.svg')} />
                            <Paragraph weight="medium" align="center" classNames={b('text')} hasMargin>
                                {location}
                            </Paragraph>
                        </>
                    )}
                </div>
            </div>

            <img className={b('back')} src={prefixedAsset('card-back.svg')} />
        </div>
    );
};

Card.defaultProps = {
    spies: [],
};

export default Card;
