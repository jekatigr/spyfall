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

import useGame from 'hooks/useGame';
import useStore from 'hooks/useStore';
import { setSettingsScreen, setBasicLocationsScreen, setCustomLocationsScreen, setScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { toggleBasicLocations, toggleCustomLocations } from 'store/locations/actions';

import './Locations.less';

const b = block('location-category');
const Locations: React.FC = () => {
    const {
        state: {
            locations: {
                basic: { isActive: isBasicActive, list: basicLocations },
                custom: { isActive: isCustomActive, list: customLocations },
            },
        },
        dispatch,
    } = useStore();
    const { setLocationAndSpies } = useGame();

    const handleStartGame = (): void => {
        setLocationAndSpies();
        dispatch(setScreen(SCREENS.ROLES_DISTRIBUTION));
    };

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
                    <Button onClick={handleStartGame} type="action" disabled={!isStartGameButtonEnabled}>
                        Играть
                    </Button>
                }
            />
        </div>
    );
};

export default Locations;
