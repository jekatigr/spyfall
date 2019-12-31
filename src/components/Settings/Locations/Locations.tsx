import * as React from 'react';
import { block } from 'bem-cn';

import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Paragraph from 'components/common/Paragraph/Paragraph';
import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Edit from 'components/common/Edit/Edit';

import prefixedAsset from 'utils/assetPrefix';

import { useStore } from 'store';
import {
    SET_SETTINGS_PHASE_TO_EDIT_BASIC_LOCATIONS,
    SET_SETTINGS_PHASE_TO_EDIT_CUSTOM_LOCATIONS,
    SET_SETTINGS_PHASE_TO_TIME_SETTINGS,
} from 'store/reducers/settings/settings';
import { SET_APP_STATE_TO_GAME } from 'store/reducers/app';
import {
    SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS,
    SET_LOCATION,
    SET_SPIES,
    SET_QUESTIONS_TIME,
    SET_DISCUSSION_TIME,
} from 'store/reducers/game';
import { SELECT_LOCATION } from 'store/reducers/settings/locations';

import './Locations.less';

const b = block('location-category');
const Locations: React.FunctionComponent = () => {
    const {
        state: {
            settings: {
                locations: {
                    baseLocations: { isSelected: basicSelected, name: basicName, locations: basicLocations },
                    customLocations: { isSelected: customSelected, name: customName, locations: customLocations },
                },
                playersInfo,
                timeSettings,
                spies,
            },
        },
        dispatch,
    } = useStore();

    const startGame = (): void => {
        // Select spies
        let { spiesCount } = spies;
        if (!spies.specificSpiesCount) spiesCount = Math.floor(Math.random() * playersInfo.players.length) + 1;
        const gameSpies = playersInfo.players.map(p => p.name);
        while (gameSpies.length !== spiesCount) gameSpies.splice(Math.floor(Math.random() * gameSpies.length), 1);
        dispatch(SET_SPIES, { gameSpies });

        // Select location
        const allLocations = [];
        if (basicSelected) allLocations.push(...basicLocations.filter(l => l.isSelected).map(l => l.name));
        if (customSelected) allLocations.push(...customLocations);
        const selectedLocation = allLocations[Math.floor(Math.random() * allLocations.length)];
        dispatch(SET_LOCATION, { location: selectedLocation });

        // Set round durations
        dispatch(SET_QUESTIONS_TIME, { time: timeSettings.roundTime * 1000 * 60 });
        dispatch(SET_DISCUSSION_TIME, { time: timeSettings.roundTime * 1000 * 60 });

        // Start game
        dispatch(SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS);
        dispatch(SET_APP_STATE_TO_GAME);
    };

    return (
        <div className={b()}>
            <Header>Локации</Header>
            <div className={b('inner')}>
                <Paragraph weight="light" hasMargin>
                    Нажмите на иконку, чтобы выбрать категории локаций:
                </Paragraph>
                <div className={b('block', { muted: !basicSelected })}>
                    <div className={b('circle')} onClick={(): void => dispatch(SELECT_LOCATION, { name: basicName })}>
                        <img
                            className={b('basic-image')}
                            src={prefixedAsset(basicSelected ? 'basic.svg' : 'basic-muted.svg')}
                        />
                    </div>
                    <div className={b('block-inner')}>
                        <span className={b('name')}>{basicName}</span>
                        <div
                            className={b('edit')}
                            onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_EDIT_BASIC_LOCATIONS)}
                        >
                            <div className={b('edit-text')}>Редактировать категорию</div>
                            <Edit classNames={b('edit-icon')} />
                        </div>
                    </div>
                </div>
                <div className={b('block', { muted: !customSelected })}>
                    <div className={b('circle')} onClick={(): void => dispatch(SELECT_LOCATION, { name: customName })}>
                        <img
                            className={b('custom-image')}
                            src={prefixedAsset(customSelected ? 'custom.svg' : 'custom-muted.svg')}
                        />
                    </div>
                    <div className={b('block-inner')}>
                        <span className={b('name')}>{customName}</span>
                        <div
                            className={b('edit')}
                            onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_EDIT_CUSTOM_LOCATIONS)}
                        >
                            <div className={b('edit-text')}>Редактировать категорию</div>
                            <Edit classNames={b('edit-icon')} />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_TIME_SETTINGS)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={startGame} type="action">
                        Вперед
                    </Button>
                }
            />
        </div>
    );
};

export default Locations;
