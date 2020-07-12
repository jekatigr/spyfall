import * as React from 'react';
import { block } from 'bem-cn';

import './Button.less';

type Props = {
    type?: 'action' | 'additional';
    classNames?: string | string[];
    disabled?: boolean;
    onClick: () => void;
};

const b = block('button');
const Button: React.FC<Props> = ({ type = 'action', disabled = false, classNames, children, onClick }) => (
    <div className={b({}).mix(classNames)}>
        <button type="button" className={b('inner', { type, disabled })} onClick={onClick}>
            {children}
        </button>
    </div>
);

export default Button;
