import * as React from 'react';

import './RandomOption.less';
import prefixedAsset from '../../../utils/assetPrefix';

type Props = {
    name: string;
    muted: boolean;
    onClick: () => void;
};

const RandomOption: React.FunctionComponent<Props> = ({ name, muted, onClick }) => {
    const ron = ' random-option__name';
    const oc = ' option-circle';
    const roi = ' random-option__inner';
    const m = '_muted';
    return (
        <div className="random-option" onClick={onClick}>
            <span className={ron + (muted ? ron + m : '')}>{name}</span>
            <div className={oc + roi + (muted ? oc + m : '')}>
                <img
                    className={muted ? 'random-option__image_muted' : 'random-option__image_selected'}
                    src={prefixedAsset('dice.svg')}
                />
            </div>
        </div>
    );
};

export default RandomOption;
