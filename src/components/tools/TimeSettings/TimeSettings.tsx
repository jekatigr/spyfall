import * as React from 'react';

import './TimeSettings.less';

type Props = {
    children: React.ReactNode;
    action: () => void;
}

const TimeSettings: React.FunctionComponent<Props> = ({ children, action }) => (
    <button type="button" className="additional-settings-link" onClick={action}>
        { children }
    </button>
);

export default TimeSettings;
