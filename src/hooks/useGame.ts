import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { setSpies } from 'store/players/actions';
import { setLocationForGame } from 'store/locations/actions';

type UseGameType = {
    setLocationAndSpies: () => void;
};

const useGame = (): UseGameType => {
    const {
        state: {
            spies: { count, isRandom },
            players: { list },
            locations: {
                basic: { isActive: isBasicActive, selected: basicLocations },
                custom: { isActive: isCustomActive, list: customLocations },
            },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    const setLocationAndSpies = (): void => {
        // Select spies
        let spiesCount = count;
        if (isRandom) spiesCount = Math.floor(Math.random() * list.length) + 1;

        const playersIds = list.map(p => p.id);

        while (playersIds.length > spiesCount) {
            const indexToRemove = Math.floor(Math.random() * playersIds.length);
            playersIds.splice(indexToRemove, 1);
        }

        // Select location
        const allLocations: string[] = [];
        if (isBasicActive) {
            allLocations.push(...basicLocations.map(index => text(['basicLocations', 'list', index])));
        }
        if (isCustomActive) {
            allLocations.push(...customLocations.filter(l => l.isActive).map(l => l.name));
        }

        const index = Math.floor(Math.random() * allLocations.length);
        const selectedLocation = allLocations[index];

        dispatch(setSpies(playersIds));
        dispatch(setLocationForGame(selectedLocation));
    };

    return { setLocationAndSpies };
};

export default useGame;
