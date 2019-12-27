import * as React from 'react';

import TimeSettings from 'components/common/TimeSettings/TimeSettings';
import Button from 'components/common/Button/Button';

import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_EXTRA_SETTINGS } from 'store/reducers/settings';

import './ButtonsWizard.less';

type backButtonInfo = {
    title: string;
    enable: boolean;
    action: () => void;
};

type forwardButtonInfo = {
    title: string;
    enable: boolean;
    action: () => void;
};

type Props = {
    backButtonInfo;
    forwardButtonInfo;
};

const ButtonsWizard: React.FunctionComponent<Props> = ({ backButtonInfo, forwardButtonInfo }) => {
    const { dispatch } = React.useContext(storeContext);
    return (
        <div className="buttons-wizard">
            <TimeSettings onClick={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>
                Настройки времени
            </TimeSettings>
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                <Button onClick={backButtonInfo.action} type="additional" className="buttons-wizard__button">
                    {backButtonInfo.title}
                </Button>
            </div>
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                <Button
                    onClick={forwardButtonInfo.action}
                    type="action"
                    className="buttons-wizard__button"
                    disabled={!forwardButtonInfo.enable}
                >
                    {forwardButtonInfo.title}
                </Button>
            </div>
        </div>
    );
};

export default ButtonsWizard;
