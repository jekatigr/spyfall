import * as React from 'react';
import { block } from 'bem-cn';

import DiceMutedIcon from 'icons/dice-muted.svg?sprite';
import DiceIcon from 'icons/dice.svg?sprite';

import './RandomOption.less';

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
                {disabled ? <DiceMutedIcon className={b('icon')} /> : <DiceIcon className={b('icon')} />}
            </div>
        </div>
    );
};

export default RandomOption;
