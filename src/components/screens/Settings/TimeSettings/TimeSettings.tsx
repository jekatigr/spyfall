import * as React from 'react';
import { block } from 'bem-cn';

import Counter from 'components/common/Counter/Counter';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';
import { setQuestionsTimeLimit, setDiscussionTimeLimit, toggleSound } from 'store/time/actions';

import './TimeSettings.less';

const b = block('time-settings');
const TimeSettings: React.FC = () => {
    const {
        state: {
            players: { list },
            time: {
                questions: { limit: questionsLimit },
                discussion: { limit: discussionLimit },
                sound,
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const handleSoundToggle = (): void => {
        dispatch(toggleSound());
    };

    const handleIncreaseQuestionsTimeClick = (): void => {
        dispatch(setQuestionsTimeLimit(questionsLimit + 1));
    };

    const handleDecreaseQuestionsTimeClick = (): void => {
        dispatch(setQuestionsTimeLimit(questionsLimit - 1));
    };

    const handleIncreaseDiscussionTimeClick = (): void => {
        dispatch(setDiscussionTimeLimit(discussionLimit + 1));
    };

    const handleDecreaseDiscussionTimeClick = (): void => {
        dispatch(setDiscussionTimeLimit(discussionLimit - 1));
    };

    const handleBackClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.SPIES));
    };

    const handleForwardClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.LOCATIONS));
    };

    return (
        <div className={b()}>
            <Header>{text('settings.time.title')}</Header>
            <div className={b('inner')}>
                <Switcher onChange={handleSoundToggle} enabled={sound}>
                    {text('settings.time.sound_after_time_up')}
                </Switcher>
                <Counter
                    name={text('settings.time.questions_time_limit')}
                    count={questionsLimit}
                    units={text('settings.time.time_unit')}
                    disabled={false}
                    onClickMinus={handleDecreaseQuestionsTimeClick}
                    onClickPlus={handleIncreaseQuestionsTimeClick}
                    min={1}
                    max={Math.max(100, list.length)}
                />
                <Counter
                    name={text('settings.time.discussion_time_limit')}
                    count={discussionLimit}
                    units={text('settings.time.time_unit')}
                    disabled={false}
                    onClickMinus={handleDecreaseDiscussionTimeClick}
                    onClickPlus={handleIncreaseDiscussionTimeClick}
                    min={1}
                    max={Math.max(100, list.length)}
                />
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={handleBackClick} type="additional">
                        {text('settings.buttonsWizard.previous')}
                    </Button>
                }
                next={
                    <Button onClick={handleForwardClick} type="action">
                        {text('settings.buttonsWizard.next')}
                    </Button>
                }
            />
        </div>
    );
};

export default TimeSettings;
