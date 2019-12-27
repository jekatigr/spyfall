import * as React from 'react';

import composeClassNames from 'utils/composeClassNames';

import './Paragraph.less';

type Props = {
    weight?: 'light' | 'extra-light';
    align?: 'justify';
    className?: string;
    children: React.ReactNode;
};

const Paragraph: React.FunctionComponent<Props> = ({ weight, align, className, children }) => (
    <p className={composeClassNames('paragraph', { weight, align }, className)}>{children}</p>
);

export default Paragraph;
