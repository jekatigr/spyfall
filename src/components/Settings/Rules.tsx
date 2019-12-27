import * as React from 'react';

import Button from 'components/common/Button/Button';

import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_START_SCREEN } from 'store/reducers/settings';

import './Settings.less';

const Rules: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);
    return (
        <div className="container">
            <div>
                <Button onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_START_SCREEN })} type="action">
                    Стрелочка назад
                </Button>
                <h1 className="header">Правила</h1>
                <p className="paragraph">Игровая партия</p>
                <p className="paragraph paragraph_extra-light paragraph_justify">
                    Игровая партия состоит из последовательности коротких раундов. В каждом раунде игроки оказываются в
                    какой-то локации, у каждого — свой статус. Один неизбежно оказывается шпионом, который не знает, где
                    находится. Его задача — разговорить других игроков, определить локацию и не разоблачить себя. Каждый
                    Каждый нешпион в свою очередь пытается обтекаемо дать понять «своим», что знает, где находится, и
                    поэтому не является шпионом. Наблюдательность, собранность, выдержка, хитрость — в этой игре
                    пригодится всё. Будьте начеку!
                </p>
            </div>
        </div>
    );
};

export default Rules;
