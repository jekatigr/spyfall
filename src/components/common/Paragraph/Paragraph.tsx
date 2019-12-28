import * as React from 'react';

import composeClassNames from 'utils/composeClassNames';

import './Paragraph.less';

type Props = {
    weight?: 'extra-light' | 'light' | 'medium' | 'bold';
    align?: 'center' | 'justify';
    hasMargin?: boolean;
    className?: string;
    children: React.ReactNode;
};

const Paragraph: React.FunctionComponent<Props> = ({ weight, align, hasMargin, className, children }) => (
    <p className={composeClassNames('paragraph', { weight, align, 'has-margin': hasMargin }, className)}>{children}</p>
);

Paragraph.defaultProps = {
    hasMargin: false,
};

export default Paragraph;
