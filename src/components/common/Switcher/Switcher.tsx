import * as React from 'react';
import { block } from 'bem-cn';

import './Switcher.less';

type Props = {
    enabledByDefault?: boolean;
    onChange: (enabled: boolean) => void;
};

const b = block('switcher');
const Switcher: React.FC<Props> = ({ children, enabledByDefault = false, onChange }) => {
    const [enabled, setEnabled] = React.useState(enabledByDefault);

    const handleChange = (): void => {
        setEnabled(!enabled);
        onChange(enabled);
    };

    return (
        <div className={b({ enabled })} onClick={handleChange}>
            <div className={b('label')}>{children}</div>
            <div className={b('inner')}>
                <div className={b('switch')} />
            </div>
        </div>
    );
};

export default Switcher;
