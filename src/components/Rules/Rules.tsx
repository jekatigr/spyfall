import * as React from 'react';

import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';

import { storeContext } from 'store';
import { SET_APP_STATE_TO_START_SCREEN } from 'store/reducers/app';

const Rules: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);
    return (
        <>
            <Button onClick={(): void => dispatch({ type: SET_APP_STATE_TO_START_SCREEN })} type="action">
                Стрелочка назад
            </Button>
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
        </>
    );
};

export default Rules;
