import * as React from 'react';

import prefixedAsset from 'utils/assetPrefix';
import composeClassNames from 'utils/composeClassNames';

import './Card.less';

type Props = {
    name: string;
    isSpy: boolean;
    location: string;
    locationType: 'basic' | 'custom';
    spies: string[];
    className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: React.FunctionComponent<Props> = ({ name, isSpy, location, locationType, spies, className }) => {
    return (
        <div className={composeClassNames('card', {}, className)}>
            <div className="card__face">
                <img className="card__face-background" src={prefixedAsset('card-face.svg')} />
                <div className="card__face-inner">innert content</div>
            </div>

            <img className="card__back" src={prefixedAsset('card-back.svg')} />
        </div>
    );
};

export default Card;
