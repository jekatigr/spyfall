import * as React from 'react';
import { block } from 'bem-cn';

import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Edit from 'components/common/Edit/Edit';

import BasicIcon from 'icons/basic.svg?sprite';
import BasicMutedIcon from 'icons/basic-muted.svg?sprite';
import CustomIcon from 'icons/custom.svg?sprite';
import CustomMutedIcon from 'icons/custom-muted.svg?sprite';

import { useStore } from 'store';
import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';
import {
    SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS,
    SET_LOCATION,
    SET_SPIES,
    SET_QUESTIONS_TIME,
    SET_DISCUSSION_TIME,
} from 'store/reducers/game';

import { setSettingsScreen, setBasicLocationsScreen, setCustomLocationsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';
import { toggleBasicLocations, toggleCustomLocations } from 'store/locations/actions';

import './Locations.less';

const b = block('location-category');
const Locations: React.FC = () => {
    const {
        state: {
            spies,
            settings: { playersInfo, timeSettings },
            locations: {
                basic: { isActive: isBasicActive, list: basicLocations },
                custom: { isActive: isCustomActive, list: customLocations },
            },
        },
        dispatch,
    } = useStore();

    const isStartGameButtonEnabled = React.useMemo<boolean>(() => {
        if (!isBasicActive && !isCustomActive) {
            return false;
        }

        const hasBasicActive = basicLocations.some(l => l.isActive);
        if (isBasicActive && hasBasicActive) {
            return true;
        }

        const hasCustomActive = customLocations.some(l => l.isActive);
        if (isCustomActive && hasCustomActive) {
            return true;
        }

        return false;
    }, [isBasicActive, isCustomActive, basicLocations, customLocations]);

    const handleBackClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.TIME));
    };

    const handleToggleBasicClick = (): void => {
        dispatch(toggleBasicLocations());
    };

    const handleToggleCustomClick = (): void => {
        dispatch(toggleCustomLocations());
    };

    const handleEditBasicClick = (): void => {
        dispatch(setBasicLocationsScreen());
    };

    const handleEditCustomClick = (): void => {
        dispatch(setCustomLocationsScreen());
    };

    const startGame = (): void => {
        // Select spies
        let { count: spiesCount } = spies;
        if (spies.isRandom) spiesCount = Math.floor(Math.random() * playersInfo.players.length) + 1;
        const gameSpies = playersInfo.players.map(p => p.name);
        while (gameSpies.length !== spiesCount) gameSpies.splice(Math.floor(Math.random() * gameSpies.length), 1);
        dispatch({ type: SET_SPIES, payload: { gameSpies } });

        // Select location
        const allLocations = [];
        if (isBasicActive) allLocations.push(...basicLocations.filter(l => l.isActive).map(l => l.name));
        if (isCustomActive) allLocations.push(...customLocations.filter(l => l.isActive).map(l => l.name));
        const selectedLocation = allLocations[Math.floor(Math.random() * allLocations.length)];
        dispatch({ type: SET_LOCATION, payload: { location: selectedLocation } });

        // Set round durations
        dispatch({ type: SET_QUESTIONS_TIME, payload: { time: timeSettings.roundTime * 1000 * 60 } });
        dispatch({ type: SET_DISCUSSION_TIME, payload: { time: timeSettings.roundTime * 1000 * 60 } });

        // Start game
        dispatch({ type: SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS });
        dispatch({ type: SET_APP_STATE_TO_GAME });
    };

    return (
        <div className={b()}>
            <Header>Локации</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    Нажмите на иконку, чтобы выбрать категории локаций:
                </Paragraph>
                <div className={b('block', { muted: !isBasicActive })}>
                    <div className={b('circle')} onClick={handleToggleBasicClick}>
                        {isBasicActive ? (
                            <BasicIcon className={b('basic-icon')} />
                        ) : (
                            <BasicMutedIcon className={b('basic-icon')} />
                        )}
                    </div>
                    <div className={b('block-inner')}>
                        <span className={b('name')}>Базовые</span>
                        <div className={b('edit')} onClick={handleEditBasicClick}>
                            <div className={b('edit-text')}>Редактировать категорию</div>
                            <Edit classNames={b('edit-icon')} />
                        </div>
                    </div>
                </div>
                <div className={b('block', { muted: !isCustomActive })}>
                    <div className={b('circle')} onClick={handleToggleCustomClick}>
                        {isCustomActive ? (
                            <CustomIcon className={b('custom-icon')} />
                        ) : (
                            <CustomMutedIcon className={b('custom-icon')} />
                        )}
                    </div>
                    <div className={b('block-inner')}>
                        <span className={b('name')}>Кастомные</span>
                        <div className={b('edit')} onClick={handleEditCustomClick}>
                            <div className={b('edit-text')}>Редактировать категорию</div>
                            <Edit classNames={b('edit-icon')} />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={handleBackClick} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={startGame} type="action" disabled={!isStartGameButtonEnabled}>
                        Играть
                    </Button>
                }
            />
        </div>
    );
};

export default Locations;
