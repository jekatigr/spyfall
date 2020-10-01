import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Player from 'components/common/Player/Player';

import PlayersList from 'components/common/PlayersList/PlayersList';
import useStore from 'hooks/useStore';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';
import { toggleUnderSuspicion } from 'store/players/actions';

import './IdentifySpies.less';
import useI18n from 'hooks/useI18n';

const b = block('identify-spies');
const IdentifySpies: React.FC = () => {
    const {
        state: {
            players: { list },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const handlePlayerClick = (playerId: number) => (): void => {
        dispatch(toggleUnderSuspicion(playerId));
    };

    const handleShowResultsClick = (): void => {
        dispatch(setScreen(SCREENS.RESULTS));
    };

    return (
        <>
            <Header>{text('identifySpies.title')}</Header>
            <Paragraph weight="light">{text('identifySpies.choose_spies_icons')}</Paragraph>
            <PlayersList className={b('players')}>
                {list.map(({ id, name, color, isUnderSuspicion }) => (
                    <Player
                        key={id}
                        name={name}
                        color={isUnderSuspicion ? 'pink' : color}
                        isMuted={!isUnderSuspicion}
                        icon={isUnderSuspicion ? 'spy' : 'player'}
                        onClick={handlePlayerClick(id)}
                    />
                ))}
            </PlayersList>
            <Button onClick={handleShowResultsClick} type="action" disabled={!list.some(p => p.isUnderSuspicion)}>
                {text('identifySpies.show_results')}
            </Button>
        </>
    );
};

export default IdentifySpies;
