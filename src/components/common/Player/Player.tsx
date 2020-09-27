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
    size?: 'big' | 'medium' | 'small';
    isMuted?: boolean;
    hasEditButton?: boolean;
    icon?: 'player' | 'spy';
    onClick?: () => void;
};

const b = block('player');
const Player: React.FC<Props> = ({
    name,
    color = 'blue',
    size = 'small',
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
        <div className={b({ size, 'is-muted': isMuted })} onClick={handleClick}>
            <div className={b('image', { [color]: true, 'is-interactive': !!onClick })}>
                {icon === 'player' && <PlayerIcon className={b('icon')} />}
                {icon === 'spy' && <SpyIcon />}
            </div>
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
