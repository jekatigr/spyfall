import * as React from 'react';

import Paragraph from 'components/common/Paragraph/Paragraph';

import prefixedAsset from 'utils/assetPrefix';
import composeClassNames from 'utils/composeClassNames';

import './Card.less';

type Props = {
    name: string;
    isSpy: boolean;
    location: string;
    spies?: string[];
    className?: string;
};

const Card: React.FunctionComponent<Props> = ({ name, isSpy, location, spies, className }) => {
    return (
        <div className={composeClassNames('card', {}, className)}>
            <div className="card__face">
                <img className="card__face-background" src={prefixedAsset('card-face.svg')} />
                <div className="card__face-inner">
                    {isSpy ? (
                        <>
                            <img
                                className={`card__icon${spies.length > 1 ? ' card__icon_small' : ''}`}
                                src={prefixedAsset('circle-spy.svg')}
                            />
                            <Paragraph weight="bold" align="center" className="card__text">
                                Вы - шпион
                            </Paragraph>
                            <Paragraph weight="light" align="center" className="card__text">
                                будьте скрытным и внимательным!
                            </Paragraph>
                            {spies.length > 1 ? (
                                <>
                                    <Paragraph
                                        weight="light"
                                        align="center"
                                        className="card__text card__text-cospies-label"
                                    >
                                        На вашей стороне:
                                    </Paragraph>
                                    <Paragraph weight="bold" align="center" className="card__text card__text-cospies">
                                        {spies.filter(s => s !== name).join(', ')}
                                    </Paragraph>
                                </>
                            ) : null}
                        </>
                    ) : (
                        <>
                            <img className="card__icon" src={prefixedAsset('circle-location.svg')} />
                            <Paragraph weight="medium" align="center" className="card__text" hasMargin>
                                {location}
                            </Paragraph>
                        </>
                    )}
                </div>
            </div>

            <img className="card__back" src={prefixedAsset('card-back.svg')} />
        </div>
    );
};

Card.defaultProps = {
    spies: [],
};

export default Card;
