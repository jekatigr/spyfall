import combineReducers from 'combine-reducers';

import screen from 'store/screen/reducer';
import players from 'store/players/reducer';
import spies from 'store/spies/reducer';
import time from 'store/time/reducer';
import locations from 'store/locations/reducer';

export default combineReducers({
    screen,
    players,
    spies,
    time,
    locations,
});
