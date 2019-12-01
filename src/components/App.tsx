import * as React from 'react';
import './App.less';

const App: React.FunctionComponent = () => {
    const v = 10;
    return (
        <p className="header">
            Hello, world?!
            {v}
        </p>
    );
};

export default App;
