import * as React from 'react';

import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';

import useI18n from 'hooks/useI18n';

const Rules: React.FC = () => {
    const text = useI18n();

    return (
        <div>
            <Header>{text('rules.title')}</Header>
            <Paragraph hasMargin>{text('rules.game_round')}</Paragraph>
            <Paragraph weight="extra-light" align="justify" hasMargin>
                {text('rules.text')}
            </Paragraph>
        </div>
    );
};

export default Rules;
