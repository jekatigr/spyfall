import * as React from 'react';

import './Controllers.less';

type Props = {
    type?: 'minus' | 'plus';
    muted?: boolean;
    onClick: () => void;
};

const Controllers: React.FunctionComponent<Props> = ({ type, muted, onClick }) => {
    const cb = ' controllers__background';
    const cc = ' controllers__controller';
    const cbtype = ` ${cb}-${type}`;
    const cctype = ` ${cc}-${type}`;
    const m = '_muted';
    return (
        <div className={cbtype + (muted ? cbtype + m : '')} onClick={onClick}>
            <div className={cc + cctype + (muted ? cc + m + cctype + m : '')} />
        </div>
    );
};

export default Controllers;
