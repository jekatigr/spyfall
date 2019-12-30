import * as React from 'react';
import { block } from 'bem-cn';

import './Button.less';

type Props = {
    type?: 'action' | 'additional';
    classNames?: string | string[];
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
};

const b = block('button');
const Button: React.FunctionComponent<Props> = ({ type, disabled, classNames, children, onClick }) => (
    <div className={b({}).mix(classNames)}>
        <button type="button" className={b('inner', { type, disabled })} onClick={onClick}>
            {children}
        </button>
    </div>
);

Button.defaultProps = {
    type: 'action',
    disabled: false,
};

export default Button;
