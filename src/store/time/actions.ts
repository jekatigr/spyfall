import {
    SET_DISCUSSION_TIME_LIMIT,
    SET_DISCUSSION_TIME_START,
    SET_QUESTIONS_TIME_LIMIT,
    SET_QUESTIONS_TIME_START,
    TOGGLE_SOUND,
} from './constants';

export const setQuestionsTimeLimit = (minutes: number) =>
    ({ type: SET_QUESTIONS_TIME_LIMIT, payload: minutes } as const);
export const setQuestionsTimeStart = (timestamp: number) =>
    ({ type: SET_QUESTIONS_TIME_START, payload: timestamp } as const);
export const setDiscussionTimeLimit = (minutes: number) =>
    ({ type: SET_DISCUSSION_TIME_LIMIT, payload: minutes } as const);
export const setDiscussionTimeStart = (timestamp: number) =>
    ({ type: SET_DISCUSSION_TIME_START, payload: timestamp } as const);
export const toggleSound = () => ({ type: TOGGLE_SOUND } as const);
