import * as React from 'react';
import { block } from 'bem-cn';

import MenuItem from 'components/common/Navigation/types';
import BackIcon from 'icons/back.svg?sprite';
import MenuIcon from 'icons/menu.svg?sprite';

import './Navigation.less';

type Props = {
    type?: 'back' | 'menu';
    menuItems?: MenuItem[];
    onClick?: () => void;
};

const b = block('navigation');
const Navigation: React.FunctionComponent<Props> = ({ type, menuItems, onClick }) => {
    const [menuOpened, setMenuOpened] = React.useState(false);

    const isMenu = type === 'menu';

    const handleClick = (): void => {
        if (onClick) {
            onClick();
        }

        if (isMenu) {
            setMenuOpened(!menuOpened);
        }
    };

    const renderMenuPopup = (): React.ReactElement => (
        <div className={b('menu')}>
            <div className={b('menu-background')} />
            <div className={b('menu-inner')}>
                <img className={b('menu-close')} src={prefixedAsset('remove.svg')} />
                {menuItems.map(({ title, onClick: onItemClick }) => (
                    <div className={b('menu-item')} onClick={onItemClick} key={title}>
                        {title}
                    </div>
                ))}
            </div>
        </div>
    );

    const icon = !isMenu ? <BackIcon className={b('icon-back')} /> : <MenuIcon className={b('icon-menu')} />;

    return (
        <div className={b()} onClick={handleClick}>
            {icon}
            {isMenu && menuOpened ? renderMenuPopup() : null}
        </div>
    );
};

Navigation.defaultProps = {
    type: 'menu',
    menuItems: [],
};

export default Navigation;
