import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';
import TextField from 'components/common/TextField/TextField';
import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_LOCATIONS } from 'store/reducers/settings/settings';
import { UPDATE_CUSTOM_LOCATIONS } from 'store/reducers/settings/locations';

import './CustomLocations.less';

const b = block('custom-locations');
const CustomLocations: React.FunctionComponent = () => {
    const {
        state: {
            settings: {
                locations: {
                    customLocations: { locations: customLocations },
                },
            },
        },
        dispatch,
    } = useStore();

    const [locations, setLocations] = React.useState(customLocations || []);
    const [newLocation, setNewLocation] = React.useState('');

    const handleCheck = (locationName: string): void => {
        const newLocations = [...locations];
        for (let i = 0; i < locations.length; i++) {
            if (locations[i].name === locationName) {
                locations[i].isSelected = !locations[i].isSelected;
                break;
            }
        }
        setLocations(newLocations);
    };

    const handleKeyPressed = (e: React.KeyboardEvent): void => {
        if (e.charCode === 13) {
            const newLocationsSplitted = newLocation.split(',').map(l => ({
                name: l,
                isSelected: true,
            }));

            const newLocations = [...locations, ...newLocationsSplitted];

            dispatch(UPDATE_CUSTOM_LOCATIONS, {
                locations: newLocations,
            });
            setLocations(newLocations);
            setNewLocation('');
        }
    };

    const saveLocations = (): void => {
        dispatch(UPDATE_CUSTOM_LOCATIONS, { locations });
        dispatch(SET_SETTINGS_PHASE_TO_LOCATIONS);
    };

    const handleRemove = (e: React.MouseEvent, locationName: string): void => {
        e.stopPropagation();
        const newLocations = locations.filter(l => l.name !== locationName);
        dispatch(UPDATE_CUSTOM_LOCATIONS, {
            locations: newLocations,
        });
        setLocations(newLocations);
    };

    return (
        <div className={b()}>
            <Header>Кастомные локации</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    Введите локации, которые будут участвовать в игре:
                </Paragraph>
                <div className={b('list')}>
                    {customLocations.map(({ name, isSelected }) => {
                        return (
                            <div
                                className={b('list-item', { checked: isSelected })}
                                onClick={(): void => {
                                    handleCheck(name);
                                }}
                                key={name}
                            >
                                {name}
                                {isSelected ? (
                                    <img src={prefixedAsset('check.svg')} />
                                ) : (
                                    <img
                                        className={b('remove-icon')}
                                        src={prefixedAsset('remove.svg')}
                                        onClick={(e: React.MouseEvent<HTMLImageElement>): void => handleRemove(e, name)}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
                <TextField
                    value={newLocation}
                    placeholder="Введите название и нажмите Enter..."
                    classNames={b('input')}
                    onChange={setNewLocation}
                    onKeyPressed={handleKeyPressed}
                />
            </div>
            <Button onClick={saveLocations} type="action">
                Сохранить
            </Button>
        </div>
    );
};

export default CustomLocations;
