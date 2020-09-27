import * as React from 'react';
import { block } from 'bem-cn';

import Paragraph from 'components/common/Paragraph/Paragraph';
import Edit from 'components/common/Edit/Edit';

import { PlayerColor } from 'store/players/types';

import PlayerIcon from 'icons/player.svg?sprite';
import SpyIcon from 'icons/spy.svg?sprite';

import './Player.less';

type Props = {
    name?: string;
    color?: PlayerColor;
    big?: boolean;
    isMuted?: boolean;
    hasEditButton?: boolean;
    icon?: 'player' | 'spy';
    onClick?: () => void;
};

const b = block('player');
const Player: React.FC<Props> = ({
    name,
    color = 'blue',
    big = false,
    isMuted = false,
    hasEditButton = false,
    icon = 'player',
    onClick,
}) => {
    const handleClick = (): void => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={b({ big, 'is-muted': isMuted })} onClick={handleClick}>
            {icon === 'player' && (
                <div className={b('image', { [color]: true })}>
                    <PlayerIcon className={b('icon')} />
                </div>
            )}
            {icon === 'spy' && (
                <div className={b('image', { pink: true })}>
                    <SpyIcon />
                </div>
            )}
            {hasEditButton && <Edit classNames={b('edit')} />}
            {name && (
                <Paragraph hasMargin classNames={b('name')}>
                    {name}
                </Paragraph>
            )}
        </div>
    );
};

export default Player;
