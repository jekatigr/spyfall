import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import TextField from 'components/common/TextField/TextField';

import CheckIcon from 'icons/check.svg?sprite';
import RemoveIcon from 'icons/remove.svg?sprite';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { updateCustomLocations } from 'store/locations/actions';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';

import './CustomLocations.less';

const b = block('custom-locations');
const CustomLocations: React.FC = () => {
    const {
        state: {
            locations: {
                custom: { list: customLocations },
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const [locations, setLocations] = React.useState(customLocations);
    const [newLocation, setNewLocation] = React.useState('');

    const handleCheck = (locationName: string) => (): void => {
        const newLocations = locations.map(l => {
            if (l.name === locationName) {
                return {
                    ...l,
                    isActive: !l.isActive,
                };
            }

            return l;
        });

        setLocations(newLocations);
    };

    const handleKeyPressed = (e: React.KeyboardEvent): void => {
        if (e.charCode === 13) {
            const newLocationsSeparated = newLocation.split(',').map(l => ({
                name: l,
                isActive: true,
            }));

            const newLocations = [...locations, ...newLocationsSeparated];

            dispatch(updateCustomLocations(newLocations));
            setLocations(newLocations);
            setNewLocation('');
        }
    };

    const handleRemove = (locationName: string) => (e: React.MouseEvent): void => {
        e.stopPropagation();
        const newLocations = locations.filter(l => l.name !== locationName);

        dispatch(updateCustomLocations(newLocations));
        setLocations(newLocations);
    };

    const saveLocations = (): void => {
        dispatch(updateCustomLocations(locations));
        dispatch(setSettingsScreen(SETTINGS_SCREENS.LOCATIONS));
    };

    return (
        <div className={b()}>
            <Header>{text('customLocations.title')}</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    {text('customLocations.type_locations')}
                </Paragraph>
                <div className={b('list')}>
                    {locations.map(({ name, isActive }) => (
                        <div className={b('list-item', { checked: isActive })} onClick={handleCheck(name)} key={name}>
                            {name}
                            {isActive ? (
                                <CheckIcon className={b('check-icon')} />
                            ) : (
                                <RemoveIcon className={b('remove-icon')} onClick={handleRemove(name)} />
                            )}
                        </div>
                    ))}
                </div>
                <TextField
                    value={newLocation}
                    placeholder={text('customLocations.type_location_name_and_press_enter')}
                    classNames={b('input')}
                    onChange={setNewLocation}
                    onKeyPressed={handleKeyPressed}
                />
            </div>
            <Button onClick={saveLocations} type="action">
                {text('customLocations.save')}
            </Button>
        </div>
    );
};

export default CustomLocations;
