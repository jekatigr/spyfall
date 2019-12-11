import * as React from 'react';
import './App.less';

const App: React.FunctionComponent = () => (
    <div className="container">
        <div className="container__bottom-buttons-block">
            <button type="button" className="button button-action">
                Играть
            </button>
            <button type="button" className="button button-additional">
                Правила игры
            </button>
            <button type="button" className="button button-additional">
                Выйти
            </button>
        </div>
    </div>
);

export default App;
