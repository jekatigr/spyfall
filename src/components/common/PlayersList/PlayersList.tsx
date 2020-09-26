import * as React from 'react';
import { block } from 'bem-cn';

import './PlayersList.less';

const b = block('players-list');

const hacks = [];
const MAX_PLAYERS_IN_ROW = 6; // 107 px per player, 650 - max-width for container
for (let i = 0; i < MAX_PLAYERS_IN_ROW - 1; i++) {
    hacks.push(<div key={i} className={b('hack')} />);
}

const PlayersList: React.FC = ({ children }) => (
    <div className={b()}>
        <div className={b('wrapper')}>
            <div className={b('inner')}>
                {React.Children.map(children, child => (
                    <div className={b('item')}>{child}</div>
                ))}
                {hacks}
            </div>
        </div>
    </div>
);

export default PlayersList;
