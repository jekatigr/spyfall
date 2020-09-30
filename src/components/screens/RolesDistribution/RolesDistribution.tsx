import * as React from 'react';
import block from 'bem-cn';

import Button from 'components/common/Button/Button';
import CardsSlider from 'components/common/CardsSlider/CardsSlider';

import useStore from 'hooks/useStore';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';
import { setQuestionsTimeStart } from 'store/time/actions';

import BeforeStartIcon from 'icons/before-start.svg?sprite';

import './RolesDistribution.less';

const b = block('roles-distribution');
const RolesDistribution: React.FC = () => {
    const {
        state: {
            locations: { locationForGame },
            players: { list },
            spies: { isFamiliar },
        },
        dispatch,
    } = useStore();

    const [isRolesDistributed, setRolesDistributed] = React.useState(false);
    const spies = React.useMemo(() => list.filter(p => p.isSpy).map(p => p.name), [list]);

    const startGame = (): void => {
        dispatch(setQuestionsTimeStart(Date.now()));
        dispatch(setScreen(SCREENS.QUESTIONS));
    };

    const handleRolesDistributed = (): void => {
        setRolesDistributed(true);
    };

    return (
        <div className={b()}>
            {isRolesDistributed ? (
                <div className={b('before-start')}>
                    <BeforeStartIcon className={b('before-start-icon')} />
                    <Button onClick={startGame} type="action">
                        Начать игру!
                    </Button>
                </div>
            ) : (
                <CardsSlider
                    cards={list}
                    location={locationForGame}
                    spies={spies}
                    isSpiesFamiliar={isFamiliar}
                    onFinish={handleRolesDistributed}
                />
            )}
        </div>
    );
};

export default RolesDistribution;
