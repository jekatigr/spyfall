import * as React from 'react';

import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';

import { storeContext } from 'store';
import { SET_SETTINGS_STATE_TO_SPIES } from 'store/reducers/settings';
import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';

import './Settings.less';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Players: React.FunctionComponent = () => {
    const { dispatch } = React.useContext(storeContext);

    const backButtonInfo = {
        title: 'Назад',
        enable: true,
        action: (): void => dispatch({ type: SET_SETTINGS_STATE_TO_SPIES }),
    };

    const forwardButtonInfo = {
        title: 'Вперед',
        enable: true,
        action: (): void => dispatch({ type: SET_APP_STATE_TO_GAME }),
    };

    return (
        <div>
            <div>
                <div className="">
                    <h1 className="header">Локации</h1>
                    <p className="paragraph paragraph_light">Нажмите на иконку, чтобы выбрать категории локаций:</p>
                    <div className="location-category">
                        <div className="option-circle">
                            <img
                                className="option-circle__image location-category__basic-image_selected"
                                src={`${assetPrefix}/basic.svg`}
                            />
                        </div>
                        <div className="location-category__inner">
                            <span className="location-category__name">Базовые</span>
                            <div className="location-category__edit">
                                <div className="location-category__edit-text">Редактировать категорию</div>
                                <div className="edit location-category__edit-icon">
                                    <img src={`${assetPrefix}/edit.svg`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location-category">
                        <div className="option-circle option-circle_muted">
                            <img
                                className="option-circle__image location-category__basic-image_muted"
                                src={`${assetPrefix}/basic-muted.svg`}
                            />
                        </div>
                        <div className="location-category__inner">
                            <span className="location-category__name location-category__name_muted">Базовые выкл</span>
                            <div className="location-category__edit">
                                <div className="location-category__edit-text">Редактировать категорию</div>
                                <div className="edit location-category__edit-icon">
                                    <img src={`${assetPrefix}/edit.svg`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location-category">
                        <div className="option-circle">
                            <img
                                className="option-circle__image location-category__custom-image_selected"
                                src={`${assetPrefix}/custom.svg`}
                            />
                        </div>
                        <div className="location-category__inner">
                            <span className="location-category__name">Кастомные</span>
                            <div className="location-category__edit">
                                <div className="location-category__edit-text">Редактировать категорию</div>
                                <div className="edit location-category__edit-icon">
                                    <img src={`${assetPrefix}/edit.svg`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location-category">
                        <div className="option-circle option-circle_muted">
                            <img
                                className="option-circle__image location-category__custom-image_muted"
                                src={`${assetPrefix}/custom-muted.svg`}
                            />
                        </div>
                        <div className="location-category__inner">
                            <span className="location-category__name location-category__name_muted">
                                Кастомные выкл
                            </span>
                            <div className="location-category__edit">
                                <div className="location-category__edit-text">Редактировать категорию</div>
                                <div className="edit location-category__edit-icon">
                                    <img src={`${assetPrefix}/edit.svg`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonsWizard backButtonInfo={backButtonInfo} forwardButtonInfo={forwardButtonInfo} />
            </div>
        </div>
    );
};

export default Players;
