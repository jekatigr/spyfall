import useStore from 'hooks/useStore';
import { setSpies } from 'store/players/actions';
import { setLocationForGame } from 'store/locations/actions';
import { Location } from 'store/locations/types';

type UseGameType = {
    setLocationAndSpies: () => void;
};

const useGame = (): UseGameType => {
    const {
        state: {
            spies: { count, isRandom },
            players: { list },
            locations: {
                basic: { isActive: isBasicActive, list: basicLocations },
                custom: { isActive: isCustomActive, list: customLocations },
            },
        },
        dispatch,
    } = useStore();

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
        const allLocations: Location[] = [];
        if (isBasicActive) {
            allLocations.push(...basicLocations.filter(l => l.isActive));
        }
        if (isCustomActive) {
            allLocations.push(...customLocations.filter(l => l.isActive));
        }

        const index = Math.floor(Math.random() * allLocations.length);
        const selectedLocation = allLocations[index];

        dispatch(setSpies(playersIds));
        dispatch(setLocationForGame(selectedLocation.name));
    };

    return { setLocationAndSpies };
};

export default useGame;
