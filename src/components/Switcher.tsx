import * as React from 'react';
import './Switcher.less';

type Props = {
    children: React.ReactNode;
    onChange: (enabled: boolean) => void;
};

const Switcher: React.FunctionComponent<Props> = ({ children, onChange }) => {
    const [enabled, setEnabled] = React.useState(false);

    const handleChange = (): void => {
        setEnabled(!enabled);
        onChange(enabled);
    };

    return (
        <div className="switcher" onClick={handleChange}>
            <div className="switcher__label">{children}</div>
            <div className={`switcher__inner${enabled ? ' switcher__inner_enabled' : ''}`}>
                <div className={`switcher__switch${enabled ? ' switcher__switch_enabled' : ''}`} />
            </div>
        </div>
    );
};

export default Switcher;
