import * as React from 'react';

import './AdditionalSettings.less';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

const AdditionalSettings: React.FunctionComponent<Props> = ({ children, onClick }) => (
    <button type="button" className="additional-settings-link" onClick={onClick}>
        {children}
    </button>
);

export default AdditionalSettings;
