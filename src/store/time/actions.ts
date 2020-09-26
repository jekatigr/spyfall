import { SET_DISCUSSION, SET_QUESTIONS, TOGGLE_SOUND } from './constants';

export const setQuestionsTime = (minutes: number) => ({ type: SET_QUESTIONS, payload: minutes } as const);
export const setDiscussionTime = (minutes: number) => ({ type: SET_DISCUSSION, payload: minutes } as const);
export const toggleSound = () => ({ type: TOGGLE_SOUND } as const);
