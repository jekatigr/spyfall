import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';

import CheckIcon from 'icons/check.svg?sprite';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';
import { toggleBasicLocation } from 'store/locations/actions';
import { BASIC_LOCATIONS_COUNT } from 'store/locations/types';

import './BasicLocations.less';

const b = block('basic-locations');
const BasicLocations: React.FC = () => {
    const {
        state: {
            locations: {
                basic: { selected: locations },
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const handleClick = (locationIndex: number) => (): void => {
        dispatch(toggleBasicLocation(locationIndex));
    };

    const saveLocations = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.LOCATIONS));
    };

    const renderLocationsList = (): JSX.Element[] => {
        const items = [];

        for (let i = 0; i < BASIC_LOCATIONS_COUNT; i++) {
            const isActive = locations.includes(i);
            items.push(
                <div className={b('list-item', { checked: isActive })} onClick={handleClick(i)} key={i}>
                    {text(['basicLocations', 'list', i])}
                    {isActive && <CheckIcon className={b('check-icon')} />}
                </div>,
            );
        }

        return items;
    };

    return (
        <div className={b()}>
            <Header>{text('basicLocations.title')}</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    {text('basicLocations.choose_locations')}
                </Paragraph>
                <div className={b('list')}>{renderLocationsList()}</div>
            </div>
            <Button onClick={saveLocations} type="action">
                {text('basicLocations.save')}
            </Button>
        </div>
    );
};

export default BasicLocations;
