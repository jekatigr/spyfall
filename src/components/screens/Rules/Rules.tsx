import * as React from 'react';

import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';

import useI18n from 'hooks/useI18n';

const RULES_PARAGRAPHS_COUNT = 4;

const Rules: React.FC = () => {
    const text = useI18n();

    const renderRules = (): JSX.Element[] => {
        const rules = [];

        for (let i = 0; i < RULES_PARAGRAPHS_COUNT; i++) {
            rules.push(
                <Paragraph key={i} weight="extra-light" align="justify" hasMargin>
                    {text(['rules', 'texts', i])}
                </Paragraph>,
            );
        }

        return rules;
    };

    return (
        <div>
            <Header>{text('rules.title')}</Header>
            <Paragraph hasMargin>{text('rules.game_round')}</Paragraph>
            {renderRules()}
        </div>
    );
};

export default Rules;
