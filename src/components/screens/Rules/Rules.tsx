import * as React from 'react';

import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';

const Rules: React.FC = () => (
    <div>
        <Header>Правила</Header>
        <Paragraph hasMargin>Игровая партия</Paragraph>
        <Paragraph weight="extra-light" align="justify" hasMargin>
            Игровая партия состоит из последовательности коротких раундов. В каждом раунде игроки оказываются в какой-то
            локации, у каждого — свой статус. Один неизбежно оказывается шпионом, который не знает, где находится. Его
            задача — разговорить других игроков, определить локацию и не разоблачить себя. Каждый мирный игрок в свою
            очередь пытается обтекаемо дать понять «своим», что знает, где находится, и поэтому не является шпионом.
            Наблюдательность, собранность, выдержка, хитрость — в этой игре пригодится пригодится всё. Будьте начеку!
        </Paragraph>
    </div>
);

export default Rules;
