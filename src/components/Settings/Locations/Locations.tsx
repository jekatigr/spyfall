import * as React from 'react';

import TimeSettings from 'components/common/TimeSettings/TimeSettings';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';

import { useStore } from 'store';
import { SET_SETTINGS_STATE_TO_SPIES, SET_SETTINGS_STATE_TO_TIME_SETTINGS } from 'store/reducers/settings';
import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';

import './Locations.less';

const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const Players: React.FunctionComponent = () => {
    const { dispatch } = useStore();

    return (
        <>
            <div>
                <Header>Локации</Header>
                <Paragraph weight="light" hasMargin>
                    Нажмите на иконку, чтобы выбрать категории локаций:
                </Paragraph>
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
                        <span className="location-category__name location-category__name_muted">Кастомные выкл</span>
                        <div className="location-category__edit">
                            <div className="location-category__edit-text">Редактировать категорию</div>
                            <div className="edit location-category__edit-icon">
                                <img src={`${assetPrefix}/edit.svg`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_STATE_TO_SPIES)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={(): void => dispatch(SET_APP_STATE_TO_GAME)} type="action">
                        Вперед
                    </Button>
                }
            >
                <TimeSettings onClick={(): void => dispatch(SET_SETTINGS_STATE_TO_TIME_SETTINGS)}>
                    Настройки времени
                </TimeSettings>
            </ButtonsWizard>
        </>
    );
};

export default Players;
