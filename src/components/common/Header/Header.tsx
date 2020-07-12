import * as React from 'react';
import { block } from 'bem-cn';

import './Header.less';

type Props = {
    classNames?: string | string[];
};

const b = block('header');
const Header: React.FC<Props> = ({ classNames, children }) => <h1 className={b.mix(classNames)}>{children}</h1>;

export default Header;
