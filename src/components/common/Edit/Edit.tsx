import * as React from 'react';
import { block } from 'bem-cn';

import EditIcon from 'icons/edit.svg?sprite';

import './Edit.less';

type Props = {
    classNames?: string | string[];
    onClick?: () => void;
};

const b = block('edit');
const Edit: React.FunctionComponent<Props> = ({ classNames, onClick }) => (
    <div className={b({}).mix(classNames)} onClick={onClick}>
        <EditIcon className={b('icon')} />
    </div>
);

export default Edit;
