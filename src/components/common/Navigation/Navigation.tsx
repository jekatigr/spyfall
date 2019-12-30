import * as React from 'react';
import { block } from 'bem-cn';

import prefixedAsset from 'utils/assetPrefix';

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

    const icon = type === 'back' ? <img src={prefixedAsset('back.svg')} /> : <img src={prefixedAsset('menu.svg')} />;

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
