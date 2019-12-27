import * as React from 'react';

import './ExtraSettings.less';

const ExtraSettings: React.FunctionComponent = () => (
    <>
        <div className="counter">
            <span className="counter__name">Время на кон (обычный)</span>
            <div className="counter__inner">
                <div className="counter__controllers controllers">
                    <div className="controllers__background-minus">
                        <div className="controllers__controller controllers__controller-minus" />
                    </div>
                    <div className="controllers__background-plus">
                        <div className="controllers__controller controllers__controller-plus" />
                    </div>
                </div>
                <div className="counter__display counter-display">
                    <div className="counter-display__time">08</div>
                    <div className="counter-display__units">мин</div>
                </div>
            </div>
        </div>

        <div className="counter">
            <span className="counter__name">Меньше одного нельзя</span>
            <div className="counter__inner">
                <div className="counter__controllers controllers">
                    <div className="controllers__background-minus controllers__background-minus_muted">
                        <div className="controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted" />
                    </div>
                    <div className="controllers__background-plus">
                        <div className="controllers__controller controllers__controller-plus" />
                    </div>
                </div>
                <div className="counter__display counter-display">
                    <div className="counter-display__time">01</div>
                    <div className="counter-display__units">мин</div>
                </div>
            </div>
        </div>

        <div className="counter">
            <span className="counter__name">Больше 10 нельзя</span>
            <div className="counter__inner">
                <div className="counter__controllers controllers">
                    <div className="controllers__background-minus">
                        <div className="controllers__controller controllers__controller-minus" />
                    </div>
                    <div className="controllers__background-plus controllers__background-plus_muted">
                        <div className="controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted" />
                    </div>
                </div>
                <div className="counter__display counter-display">
                    <div className="counter-display__time">10</div>
                </div>
            </div>
        </div>

        <div className="counter">
            <span className="counter__name counter__name_muted">Неактивен</span>
            <div className="counter__inner">
                <div className="counter__controllers controllers">
                    <div className="controllers__background-minus controllers__background-minus_muted">
                        <div className="controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted" />
                    </div>
                    <div className="controllers__background-plus controllers__background-plus_muted">
                        <div className="controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted" />
                    </div>
                </div>
                <div className="counter__display counter-display counter-display_muted">
                    <div className="counter-display__time">?</div>
                </div>
            </div>
        </div>
    </>
);

export default ExtraSettings;
