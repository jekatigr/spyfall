import * as React from 'react';

import './TimeSettings.less';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

const TimeSettings: React.FunctionComponent<Props> = ({ children, onClick }) => (
    <button type="button" className="additional-settings-link" onClick={onClick}>
        {children}
    </button>
);

export default TimeSettings;
