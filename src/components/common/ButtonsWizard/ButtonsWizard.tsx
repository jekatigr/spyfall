import * as React from 'react';

import Button from 'components/common/Button/Button';

import './ButtonsWizard.less';

type Props = {
    previous: React.ReactElement<React.ComponentProps<typeof Button>>;
    next: React.ReactElement<React.ComponentProps<typeof Button>>;
    children?: React.ReactNode;
};

const ButtonsWizard: React.FunctionComponent<Props> = ({ next, previous, children }) => {
    const previousClassName = previous.props.className;
    const nextClassName = next.props.className;

    return (
        <div className="buttons-wizard">
            {children}
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                {React.cloneElement(previous, {
                    className: `buttons-wizard__button${` ${previousClassName}` || ''}`,
                })}
            </div>
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                {React.cloneElement(next, {
                    className: `buttons-wizard__button${` ${nextClassName}` || ''}`,
                })}
            </div>
        </div>
    );
};

export default ButtonsWizard;
