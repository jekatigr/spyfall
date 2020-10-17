import * as React from 'react';
import { block } from 'bem-cn';

import BackIcon from 'icons/back.svg?sprite';
import MenuIcon from 'icons/menu.svg?sprite';
import RemoveIcon from 'icons/remove.svg?sprite';

import './Navigation.less';

export interface MenuItem {
    title: string;
    onClick: () => void;
}

type Props = {
    type?: 'back' | 'menu';
    menuItems?: MenuItem[];
    onIconClick?: () => void;
};

const b = block('navigation');
const Navigation: React.FC<Props> = ({ type = 'menu', menuItems = [], onIconClick }) => {
    const [menuOpened, setMenuOpened] = React.useState(false);

    const isMenu = type === 'menu';

    const handleMenuToggle = (): void => {
        setMenuOpened(!menuOpened);
    };

    const handleMenuItemClick = (onItemClick: () => void) => (): void => {
        setMenuOpened(false);
        onItemClick();
    };

    const renderMenuPopup = (): React.ReactElement => (
        <div className={b('menu')}>
            <div className={b('menu-background')} onClick={handleMenuToggle} />
            <div className={b('menu-inner')}>
                <div className={b('menu-close')} onClick={handleMenuToggle}>
                    <RemoveIcon className={b('menu-close-icon')} />
                </div>
                {menuItems.map(({ title, onClick: onItemClick }) => (
                    <div className={b('menu-item')} onClick={handleMenuItemClick(onItemClick)} key={title}>
                        {title}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={b()}>
            <div className={b('control')} onClick={isMenu ? handleMenuToggle : onIconClick}>
                {!isMenu && <BackIcon className={b('icon-back')} />}
                {isMenu && <MenuIcon className={b('icon-menu')} />}
            </div>
            {isMenu && menuOpened ? renderMenuPopup() : null}
        </div>
    );
};

export default Navigation;
