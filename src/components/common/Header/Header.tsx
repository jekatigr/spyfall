import * as React from 'react';

import './Header.less';

type Props = {
    children: React.ReactNode;
};

const Header: React.FunctionComponent<Props> = ({ children }) => <h1 className="header">{children}</h1>;

export default Header;
