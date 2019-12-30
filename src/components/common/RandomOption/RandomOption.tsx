import * as React from 'react';
import { block } from 'bem-cn';

import './RandomOption.less';
import prefixedAsset from 'utils/assetPrefix';

type Props = {
    name: string;
    disabled: boolean;
    onClick: () => void;
};

const b = block('random-option');
const RandomOption: React.FunctionComponent<Props> = ({ name, disabled, onClick }) => {
    return (
        <div className={b({ muted: disabled })} onClick={onClick}>
            <span className={b('name')}>{name}</span>
            <div className={b('inner')}>
                <img className={b('image')} src={prefixedAsset(disabled ? 'dice-muted.svg' : 'dice.svg')} />
            </div>
        </div>
    );
};

export default RandomOption;
