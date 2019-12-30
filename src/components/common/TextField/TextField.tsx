import * as React from 'react';
import { block } from 'bem-cn';

import './TextField.less';

type Props = {
    value: string;
    placeholder?: string;
    classNames?: string | string[];
    onChange?: (value: string) => void;
};

const b = block('text-field');
const TextField: React.FunctionComponent<Props> = ({ value, placeholder, classNames, onChange }) => (
    <input
        className={b({}).mix(classNames)}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e): void => (onChange ? onChange(e.target.value) : undefined)}
    />
);

export default TextField;
