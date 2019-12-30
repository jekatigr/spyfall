import * as React from 'react';

import TimeSettings from 'components/common/TimeSettings/TimeSettings';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';

import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_SPIES, SET_SETTINGS_PHASE_TO_TIME_SETTINGS } from 'store/reducers/settings/settings';
import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';
import {
    SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS,
    SET_LOCATION,
    SET_SPIES,
    SET_QUESTIONS_TIME,
    SET_DISCUSSION_TIME,
} from 'store/reducers/game';
import { SELECT_LOCATION } from 'store/reducers/settings/locations';

import './Locations.less';

const Locations: React.FunctionComponent = () => {
    const {
        state: {
            settings: { locations, playersInfo, timeSettings, spies },
        },
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

    const startGame = (): void => {
        // Select spies
        let { spiesCount } = spies;
        if (!spies.specificSpiesCount) spiesCount = Math.floor(Math.random() * playersInfo.players.length) + 1;
        const gameSpies = playersInfo.players.map(p => p.name);
        while (gameSpies.length !== spiesCount) gameSpies.splice(Math.floor(Math.random() * gameSpies.length), 1);
        dispatch(SET_SPIES, { gameSpies });

        // Select location
        const allLocations = [];
        if (locations.baseLocations.isSelected) allLocations.push(...locations.baseLocations.locations);
        if (locations.customLocations.isSelected) allLocations.push(...locations.customLocations.locations);
        const selectedLocation = allLocations[Math.floor(Math.random() * allLocations.length)];
        dispatch(SET_LOCATION, { location: selectedLocation });

        // Set round durations
        dispatch(SET_QUESTIONS_TIME, { time: timeSettings.roundTime * 1000 * 60 });
        dispatch(SET_DISCUSSION_TIME, { time: timeSettings.roundTime * 1000 * 60 });

        // Start game
        dispatch(SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS);
        dispatch(SET_APP_STATE_TO_GAME);
    };

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
                    <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_SPIES)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={startGame} type="action">
                        Вперед
                    </Button>
                }
            >
                <TimeSettings onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_TIME_SETTINGS)}>
                    Настройки времени
                </TimeSettings>
            </ButtonsWizard>
        </>
    );
};

export default Locations;
