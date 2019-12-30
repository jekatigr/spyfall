import * as React from 'react';
import { block } from 'bem-cn';

import './Paragraph.less';

type Props = {
    weight?: 'extra-light' | 'light' | 'medium' | 'bold';
    align?: 'center' | 'justify';
    hasMargin?: boolean;
    classNames?: string | string[];
    children: React.ReactNode;
};

const b = block('paragraph');
const Paragraph: React.FunctionComponent<Props> = ({ weight, align, hasMargin, classNames, children }) => (
    <p className={b({ weight, align, 'has-margin': hasMargin }).mix(classNames)}>{children}</p>
);

Paragraph.defaultProps = {
    hasMargin: false,
};

export default Paragraph;
