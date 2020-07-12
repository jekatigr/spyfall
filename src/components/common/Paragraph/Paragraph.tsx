import * as React from 'react';
import { block } from 'bem-cn';

import './Paragraph.less';

type Props = {
    weight?: 'extra-light' | 'light' | 'medium' | 'bold';
    align?: 'center' | 'justify';
    hasMargin?: boolean;
    classNames?: string | string[];
};

const b = block('paragraph');
const Paragraph: React.FC<Props> = ({ weight, align, hasMargin = false, classNames, children }) => (
    <p className={b({ weight, align, 'has-margin': hasMargin }).mix(classNames)}>{children}</p>
);

export default Paragraph;
