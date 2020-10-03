import * as React from 'react';
import { block } from 'bem-cn';

import './TextField.less';

type Props = {
    value: string;
    errorText?: string;
    placeholder?: string;
    classNames?: string | string[];
    onChange?: (value: string) => void;
    onKeyPressed?: (e: React.KeyboardEvent) => void;
};

const b = block('text-field');
const TextField: React.FC<Props> = ({ value, errorText, placeholder, classNames, onChange, onKeyPressed }) => (
    <div className={b({}).mix(classNames)}>
        <input
            className={b('input', { error: !!errorText })}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e): void => (onChange ? onChange(e.target.value) : undefined)}
            onKeyPress={onKeyPressed}
        />
        {errorText && <div className={b('error')}>{errorText}</div>}
    </div>
);

export default TextField;
