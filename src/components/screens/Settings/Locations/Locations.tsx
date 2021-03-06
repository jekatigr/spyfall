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
import useI18n from 'hooks/useI18n';
import { setSettingsScreen, setBasicLocationsScreen, setCustomLocationsScreen, setScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { toggleBasicLocationsCategory, toggleCustomLocationsCategory } from 'store/locations/actions';

import './Locations.less';

const b = block('location-category');
const Locations: React.FC = () => {
    const {
        state: {
            locations: {
                basic: { isActive: isBasicActive, selected: basicLocations },
                custom: { isActive: isCustomActive, list: customLocations },
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();
    const { setLocationAndSpies } = useGame();

    const handleStartGame = (): void => {
        setLocationAndSpies();
        dispatch(setScreen(SCREENS.ROLES_DISTRIBUTION));
    };

    const isStartGameButtonEnabled = React.useMemo<boolean>(() => {
        if (!isBasicActive && !isCustomActive) {
            return false;
        }

        if (isBasicActive && basicLocations.length > 0) {
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
        dispatch(toggleBasicLocationsCategory());
    };

    const handleToggleCustomClick = (): void => {
        dispatch(toggleCustomLocationsCategory());
    };

    const handleEditBasicClick = (): void => {
        dispatch(setBasicLocationsScreen());
    };

    const handleEditCustomClick = (): void => {
        dispatch(setCustomLocationsScreen());
    };

    return (
        <div className={b()}>
            <Header>{text('settings.locations.title')}</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    {text('settings.locations.press_icon_to_enable_location_category')}
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
                        <span className={b('name')}>{text('settings.locations.basic_locations_title')}</span>
                        <div className={b('edit')} onClick={handleEditBasicClick}>
                            <div className={b('edit-text')}>{text('settings.locations.edit_category')}</div>
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
                        <span className={b('name')}>{text('settings.locations.custom_locations_title')}</span>
                        <div className={b('edit')} onClick={handleEditCustomClick}>
                            <div className={b('edit-text')}>{text('settings.locations.edit_category')}</div>
                            <Edit classNames={b('edit-icon')} />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={handleBackClick} type="additional">
                        {text('settings.buttonsWizard.previous')}
                    </Button>
                }
                next={
                    <Button onClick={handleStartGame} type="action" disabled={!isStartGameButtonEnabled}>
                        {text('settings.locations.start_game')}
                    </Button>
                }
            />
        </div>
    );
};

export default Locations;
