import * as React from 'react';
import { block } from 'bem-cn';

import Paragraph from 'components/common/Paragraph/Paragraph';
import Edit from 'components/common/Edit/Edit';

import PlayerIcon from 'icons/player.svg?sprite';

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
const Player: React.FC<Props> = ({ name, color = 'blue', big = false, onClick }) => {
    const handleClick = (): void => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={b({ big })} onClick={handleClick}>
            <div className={b('image', { [color]: true })}>
                <PlayerIcon className={b('icon')} />
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

export default Player;
