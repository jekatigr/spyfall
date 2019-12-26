import * as React from 'react';

import './ButtonsWizard.less';
import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_EXTRA_SETTINGS } from 'store/reducers/settings';

import TimeSettings from 'components/tools/TimeSettings/TimeSettings';

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
            <TimeSettings action={(): void => dispatch({ type: SET_SETTINGS_STATE_TO_EXTRA_SETTINGS })}>
                Настройки времени
            </TimeSettings>
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous">
                <button
                    type="button"
                    className="button button_additional buttons-wizard__button"
                    onClick={backButtonInfo.action}
                >
                    {backButtonInfo.title}
                </button>
            </div>
            <div className="buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next">
                <button
                    type="button"
                    className={`button button_action buttons-wizard__button ${
                        forwardButtonInfo.enable ? '' : 'button_disabled'
                    }`}
                    onClick={forwardButtonInfo.action}
                >
                    {forwardButtonInfo.title}
                </button>
            </div>
        </div>
    );
};

export default ButtonsWizard;
