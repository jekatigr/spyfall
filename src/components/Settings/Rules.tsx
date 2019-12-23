import * as React from 'react';

import './Settings.less';

const Rules: React.FunctionComponent = () => (
    <div className="container">
        <div>
            <button type="button" className="button button_action" onClick={() => {}}>
                Стрелочка назад
            </button>
            <h1 className="header">Правила</h1>
            <p className="paragraph">Игровая партия</p>
            <p className="paragraph paragraph_extra-light paragraph_justify">
                Игровая партия состоит из последовательности коротких раундов.
                В каждом раунде игроки оказываются в какой-то локации,
                у каждого — свой статус. Один неизбежно оказывается
                шпионом, который не знает, где находится. Его задача — разговорить
                других игроков, определить локацию и не разоблачить себя.
                Каждый нешпион в свою очередь пытается обтекаемо дать понять «своим»,
                что знает, где находится, и
                поэтому не является шпионом. Наблюдательность, собранность, выдержка,
                хитрость — в этой игре
                пригодится всё. Будьте начеку!
            </p>
        </div>
    </div>
);

export default Rules;
