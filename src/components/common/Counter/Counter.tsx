import * as React from 'react';
import { block } from 'bem-cn';

import Controllers from 'components/common/Counter/Controllers';

import './Counter.less';

type Props = {
    name: string;
    count: number;
    units?: string;
    disabled?: boolean;
    onClickMinus: () => void;
    onClickPlus: () => void;
    max: number;
    min: number;
    interactive?: boolean;
    onClick?: () => void;
};

const b = block('counter');
const Counter: React.FC<Props> = ({
    name,
    count,
    units,
    disabled,
    onClickMinus,
    onClickPlus,
    max,
    min,
    interactive = false,
    onClick = (): void => {},
}) => (
    <div className={b({ muted: disabled })} onClick={onClick}>
        <span className={b('name')}>{name}</span>
        <div className={b('inner')}>
            <Controllers
                minusDisabled={disabled || count <= min}
                plusDisabled={disabled || count >= max}
                onMinusClick={onClickMinus}
                onPlusClick={onClickPlus}
            />
            <div className={b('display', { interactive })}>
                <div className={b('display-time')}>{`${count < 10 ? '0' : ''}${count}`}</div>
                {units && <div className={b('display-units')}>{units}</div>}
            </div>
        </div>
    </div>
);

export default Counter;
