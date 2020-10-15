import * as React from 'react';
import { block } from 'bem-cn';

import './Switcher.less';

type Props = {
    enabled?: boolean;
    onChange: (enabled: boolean) => void;
};

const b = block('switcher');
const Switcher: React.FC<Props> = ({ children, enabled = false, onChange }) => {
    const handleChange = (): void => {
        onChange(!enabled);
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
