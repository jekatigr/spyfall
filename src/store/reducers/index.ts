import combineReducers from 'combine-reducers';

import app from 'store/reducers/app';
import game from 'store/reducers/game';
import settings from 'store/reducers/settings/settings';
import screen from 'store/screen/reducer';
import players from 'store/players/reducer';
import spies from 'store/spies/reducer';
import time from 'store/time/reducer';
import locations from 'store/locations/reducer';

export default combineReducers({
    app,
    game,
    settings,

    screen,
    players,
    spies,
    time,
    locations,
});
