import { combineReducers } from 'redux';
import app from './app';
import game from './game';
import settings from './settings/settings';

export default combineReducers({
    app,
    game,
    settings,
});
