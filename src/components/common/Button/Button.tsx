import * as React from 'react';

import composeClassNames from 'utils/composeClassNames';

import './Button.less';

type Props = {
    type?: 'action' | 'additional';
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
};

const Button: React.FunctionComponent<Props> = ({ type, disabled, className, children, onClick }) => (
    <button type="button" className={composeClassNames('button', { type, disabled }, className)} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    type: 'action',
    disabled: false,
    className: undefined,
};

export default Button;
