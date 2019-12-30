import * as React from 'react';
import { block } from 'bem-cn';

import prefixedAsset from 'utils/assetPrefix';

import './Edit.less';

type Props = {
    classNames?: string | string[];
    onClick?: () => void;
};

const b = block('edit');
const Edit: React.FunctionComponent<Props> = ({ classNames, onClick }) => (
    <div className={b({}).mix(classNames)} onClick={onClick}>
        <img src={prefixedAsset('edit.svg')} />
    </div>
);

export default Edit;
