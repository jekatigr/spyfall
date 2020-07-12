import * as React from 'react';

import Button from 'components/common/Button/Button';

import './ButtonsWizard.less';

type Props = {
    previous: React.ReactElement<React.ComponentProps<typeof Button>>;
    next: React.ReactElement<React.ComponentProps<typeof Button>>;
};

const ButtonsWizard: React.FC<Props> = ({ next, previous, children }) => {
    const {
        props: { classNames: previousClassNames = [] },
    } = previous;
    const {
        props: { classNames: nextClassNames = [] },
    } = next;

    const newPreviousClassNames = typeof previousClassNames === 'string' ? [previousClassNames] : previousClassNames;
    const newNextClassNames = typeof nextClassNames === 'string' ? [nextClassNames] : nextClassNames;

    newPreviousClassNames.push('buttons-wizard__button');
    newNextClassNames.push('buttons-wizard__button');

    return (
        <div className="buttons-wizard">
            {children}
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                {React.cloneElement(previous, {
                    classNames: newPreviousClassNames,
                })}
            </div>
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                {React.cloneElement(next, {
                    classNames: newNextClassNames,
                })}
            </div>
        </div>
    );
};

export default ButtonsWizard;
