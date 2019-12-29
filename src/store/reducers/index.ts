import { combineReducers } from 'redux';
import app from './app';
import game from './game';
import spies from './spies';
import locations from './locations';
import playersInfo from './playersInfo';
import settings from './settings';
import timeSettings from './timeSettings';

export default combineReducers({
    app,
    game,
    spies,
    locations,
    playersInfo,
    settings,
    timeSettings,
});
