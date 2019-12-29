import * as React from 'react';

import TimeSettings from 'components/common/TimeSettings/TimeSettings';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';

import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { SET_SETTINGS_STATE_TO_SPIES, SET_SETTINGS_STATE_TO_TIME_SETTINGS } from 'store/reducers/settings';
import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';

import './Locations.less';
import { SELECT_LOCATION } from '../../../store/reducers/locations';

const Locations: React.FunctionComponent = () => {
    const {
        state: { locations },
        dispatch,
    } = useStore();

    const getLocationCategory = (name, isSelected, selectAction, editAction): JSX.Element => (
        <div className="location-category">
            <div className={`option-circle ${isSelected ? '' : 'option-circle_muted'}`} onClick={selectAction}>
                <img
                    className={`option-circle__image location-category__basic-image_${
                        isSelected ? 'selected' : 'muted'
                    }`}
                    src={prefixedAsset(isSelected ? 'basic.svg' : 'basic-muted.svg')}
                />
            </div>
            <div className="location-category__inner">
                <span className="location-category__name">{name}</span>
                <div className="location-category__edit">
                    <div className="location-category__edit-text">Редактировать категорию</div>
                    <div className="edit location-category__edit-icon" onClick={editAction}>
                        <img src={prefixedAsset('edit.svg')} />
                    </div>
                </div>
            </div>
        </div>
    );

    const locationsCategoriesJSX = [];

    // Base locations
    locationsCategoriesJSX.push(
        getLocationCategory(
            locations.baseLocations.name,
            locations.baseLocations.isSelected,
            () => dispatch(SELECT_LOCATION, { name: locations.baseLocations.name }),
            () => {},
        ),
    );

    // Custom locations
    locationsCategoriesJSX.push(
        getLocationCategory(
            locations.customLocations.name,
            locations.customLocations.isSelected,
            () => dispatch(SELECT_LOCATION, { name: locations.customLocations.name }),
            () => {},
        ),
    );

    return (
        <>
            <div>
                <Header>Локации</Header>
                <Paragraph weight="light" hasMargin>
                    Нажмите на иконку, чтобы выбрать категории локаций:
                </Paragraph>
                {locationsCategoriesJSX}
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

export default Locations;
