import * as React from 'react';

import './AdditionalSettings.less';

type Props = {
    onClick: () => void;
};

const AdditionalSettings: React.FC<Props> = ({ children, onClick }) => (
    <button type="button" className="additional-settings-link" onClick={onClick}>
        {children}
    </button>
);

export default AdditionalSettings;
