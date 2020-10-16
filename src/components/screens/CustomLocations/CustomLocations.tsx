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
import { addCustomLocations, removeCustomLocation, toggleCustomLocation } from 'store/locations/actions';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';

import './CustomLocations.less';

const b = block('custom-locations');
const CustomLocations: React.FC = () => {
    const {
        state: {
            locations: {
                custom: { list: locations },
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const [newLocation, setNewLocation] = React.useState('');
    const [alreadyExistLocation, setAlreadyExistLocation] = React.useState<string | undefined>(undefined);
    const [emptyLocationError, setEmptyLocationError] = React.useState(false);

    const handleChange = (value: string): void => {
        setAlreadyExistLocation(undefined);
        setEmptyLocationError(false);
        setNewLocation(value);
    };

    const handleCheck = (locationName: string) => (): void => {
        dispatch(toggleCustomLocation(locationName));
    };

    const handleKeyPressed = (e: React.KeyboardEvent): void => {
        if (e.charCode === 13) {
            let newLocationsSeparated = newLocation
                .split(',')
                .map(l => l.trim())
                .filter(l => !!l); // remove empty strings
            newLocationsSeparated = Array.from(new Set(newLocationsSeparated)); // remove duplicates

            const isEmptyLocation = newLocationsSeparated.length === 0;
            setEmptyLocationError(isEmptyLocation);

            const alreadyExist = locations.find(l => newLocationsSeparated.includes(l.name));
            setAlreadyExistLocation(alreadyExist ? alreadyExist.name : undefined);

            if (!isEmptyLocation && !alreadyExist) {
                dispatch(addCustomLocations(newLocationsSeparated));
                setNewLocation('');
            }
        }
    };

    const handleRemove = (locationName: string) => (e: React.MouseEvent): void => {
        e.stopPropagation();
        dispatch(removeCustomLocation(locationName));
    };

    const saveLocations = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.LOCATIONS));
    };

    const errorText = React.useMemo((): string | undefined => {
        if (alreadyExistLocation) {
            return text('customLocations.location_already_exists', { location: alreadyExistLocation });
        }

        if (emptyLocationError) {
            return text('customLocations.location_name_cannot_be_empty');
        }

        return undefined;
    }, [newLocation, text, alreadyExistLocation, emptyLocationError]);

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
                    onChange={handleChange}
                    onKeyPressed={handleKeyPressed}
                    errorText={errorText}
                />
            </div>
            <Button onClick={saveLocations} type="action">
                {text('customLocations.save')}
            </Button>
        </div>
    );
};

export default CustomLocations;
