import * as React from 'react';

import Navigation from 'components/common/Navigation/Navigation';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';

import { useStore } from 'store';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

const Rules: React.FC = () => {
    const { dispatch } = useStore();

    const handleBackClick = (): void => {
        dispatch(setScreen(SCREENS.START_SCREEN));
    };

    return (
        <div>
            <Navigation type="back" onClick={handleBackClick} />
            <Header>Правила</Header>
            <Paragraph hasMargin>Игровая партия</Paragraph>
            <Paragraph weight="extra-light" align="justify" hasMargin>
                Игровая партия состоит из последовательности коротких раундов. В каждом раунде игроки оказываются в
                какой-то локации, у каждого — свой статус. Один неизбежно оказывается шпионом, который не знает, где
                находится. Его задача — разговорить других игроков, определить локацию и не разоблачить себя. Каждый
                Каждый нешпион в свою очередь пытается обтекаемо дать понять «своим», что знает, где находится, и
                поэтому не является шпионом. Наблюдательность, собранность, выдержка, хитрость — в этой игре пригодится
                пригодится всё. Будьте начеку!
            </Paragraph>
        </div>
    );
};

export default Rules;
