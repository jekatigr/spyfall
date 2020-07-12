import * as React from 'react';
import { block } from 'bem-cn';

import './Controllers.less';

type Props = {
    minusDisabled: boolean;
    plusDisabled: boolean;
    onMinusClick(): void;
    onPlusClick(): void;
};

const b = block('controllers');
const Controllers: React.FC<Props> = ({ minusDisabled, plusDisabled, onMinusClick, onPlusClick }) => {
    return (
        <div className={b()}>
            <div className={b('controller', { minus: true, muted: minusDisabled })} onClick={onMinusClick}>
                <div className={b('controller-inner')} />
            </div>
            <div className={b('controller', { plus: true, muted: plusDisabled })} onClick={onPlusClick}>
                <div className={b('controller-inner')} />
            </div>
        </div>
    );
};

export default Controllers;
