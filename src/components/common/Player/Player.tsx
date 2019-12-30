import * as React from 'react';
import { block } from 'bem-cn';

import Paragraph from 'components/common/Paragraph/Paragraph';
import Edit from 'components/common/Edit/Edit';

import prefixedAsset from 'utils/assetPrefix';

import './Player.less';

type Props = {
    name?: string;
    color?:
        | 'coral'
        | 'green'
        | 'wine'
        | 'dark-blue'
        | 'pink'
        | 'yellow'
        | 'purple'
        | 'raspberry'
        | 'acid-green'
        | 'light-green'
        | 'sky-blue'
        | 'blue';
    big?: boolean;
    onClick?: () => void;
};

const b = block('player');
const Player: React.FunctionComponent<Props> = ({ name, color, big, onClick }) => {
    const handleClick = (): void => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={b({ big })} onClick={handleClick}>
            <div className={b('image', { [color]: true })}>
                <img className={b('icon')} src={prefixedAsset('player.svg')} />
            </div>
            {!big ? (
                <>
                    <Edit classNames={b('edit')} />
                    <Paragraph hasMargin classNames={b('name')}>
                        {name}
                    </Paragraph>
                </>
            ) : null}
        </div>
    );
};

Player.defaultProps = {
    color: 'blue',
    big: false,
};

export default Player;
