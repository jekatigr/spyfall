import { combineReducers } from 'redux';
import app from './app';
import game from './game';
import playersInfo from './playersInfo';
import settings from './settings';

export default combineReducers({
    app,
    game,
    playersInfo,
    settings,
});
