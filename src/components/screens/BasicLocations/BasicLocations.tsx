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
import { updateBasicLocations } from 'store/locations/actions';

import './BasicLocations.less';

const b = block('basic-locations');
const BasicLocations: React.FC = () => {
    const {
        state: {
            locations: {
                basic: { list: basicLocations },
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const [locations, setLocations] = React.useState(basicLocations);

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

    const saveLocations = (): void => {
        dispatch(updateBasicLocations(locations));
        dispatch(setSettingsScreen(SETTINGS_SCREENS.LOCATIONS));
    };

    return (
        <div className={b()}>
            <Header>{text('basicLocations.title')}</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    {text('basicLocations.choose_locations')}
                </Paragraph>
                <div className={b('list')}>
                    {locations.map(({ name, isActive }) => (
                        <div className={b('list-item', { checked: isActive })} onClick={handleCheck(name)} key={name}>
                            {name}
                            {isActive && <CheckIcon className={b('check-icon')} />}
                        </div>
                    ))}
                </div>
            </div>
            <Button onClick={saveLocations} type="action">
                {text('basicLocations.save')}
            </Button>
        </div>
    );
};

export default BasicLocations;