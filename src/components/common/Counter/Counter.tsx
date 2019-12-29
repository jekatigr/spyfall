import * as React from 'react';

import Controllers from 'components/common/Controllers/Controllers';

import './Counter.less';

type Props = {
    name: string;
    count: number;
    units?: string;
    disabled?: boolean;
    onClickMinus: () => void;
    onClickPlus: () => void;
    topLimit: number;
    bottomLimit: number;
    onClick?: () => void;
};

const Counter: React.FunctionComponent<Props> = ({
    name,
    count,
    units,
    disabled,
    onClickMinus,
    onClickPlus,
    topLimit,
    bottomLimit,
    onClick = (): void => {},
}) => (
    <div className="counter" onClick={onClick}>
        <span className={`counter__name ${disabled ? 'counter__name_muted' : ''}`}>{name}</span>
        <div className="counter__inner">
            <div className="counter__controllers controllers">
                <Controllers type="minus" onClick={onClickMinus} muted={count <= bottomLimit} />
                <Controllers type="plus" onClick={onClickPlus} muted={count >= topLimit} />
            </div>
            <div className={`counter__display counter-display ${disabled ? 'counter-display_muted' : ''}`}>
                <div className="counter-display__time">{`${count < 10 ? '0' : ''}${count}`}</div>
                {units ? <div className="counter-display__units">{units}</div> : ''}
            </div>
        </div>
    </div>
);

export default Counter;
