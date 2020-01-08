import * as React from 'react';
import { block } from 'bem-cn';

import BackIcon from 'icons/back.svg?sprite';
import MenuIcon from 'icons/menu.svg?sprite';

import './Navigation.less';

type Props = {
    type?: 'back' | 'menu';
    onClick?: () => void;
};

const b = block('navigation');
const Navigation: React.FunctionComponent<Props> = ({ type, onClick }) => {
    const handleClick = (): void => {
        if (onClick) {
            onClick();
        }
    };

    const icon = type === 'back' ? <BackIcon className={b('back')} /> : <MenuIcon className={b('menu')} />;

    return (
        <div className={b()} onClick={handleClick}>
            {icon}
        </div>
    );
};

Navigation.defaultProps = {
    type: 'menu',
};

export default Navigation;
