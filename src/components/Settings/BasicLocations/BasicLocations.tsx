import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Paragraph from 'components/common/Paragraph/Paragraph';

import CheckIcon from 'icons/check.svg?sprite';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_LOCATIONS } from 'store/reducers/settings/settings';
import { UPDATE_BASIC_LOCATIONS } from 'store/reducers/settings/locations';

import './BasicLocations.less';

const b = block('basic-locations');
const BasicLocations: React.FC = () => {
    const {
        state: {
            settings: {
                locations: {
                    baseLocations: { locations: basicLocations },
                },
            },
        },
        dispatch,
    } = useStore();

    const [locations, setLocations] = React.useState(basicLocations || []);

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

    const saveLocations = (): void => {
        dispatch(UPDATE_BASIC_LOCATIONS, { locations });
        dispatch(SET_SETTINGS_PHASE_TO_LOCATIONS);
    };

    return (
        <div className={b()}>
            <Header>Базовые локации</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    Выберите локации, которые будут участвовать в игре:
                </Paragraph>
                <div className={b('list')}>
                    {basicLocations.map(({ name, isSelected }) => {
                        return (
                            <div
                                className={b('list-item', { checked: isSelected })}
                                onClick={(): void => {
                                    handleCheck(name);
                                }}
                                key={name}
                            >
                                {name}
                                {isSelected ? <CheckIcon className={b('check-icon')} /> : null}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Button onClick={saveLocations} type="action">
                Сохранить
            </Button>
        </div>
    );
};

export default BasicLocations;
