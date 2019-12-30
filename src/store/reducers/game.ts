export const SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS = 'SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS';
export const SET_GAME_PHASE_TO_QUESTIONS = 'SET_GAME_PHASE_TO_QUESTIONS';
export const SET_GAME_PHASE_TO_DISCUSSION = 'SET_GAME_PHASE_TO_DISCUSSION';
export const SET_GAME_PHASE_TO_IDENTIFY_SPIES = 'SET_GAME_PHASE_TO_IDENTIFY_SPIES';
export const SET_GAME_PHASE_TO_RESULTS = 'SET_GAME_PHASE_TO_RESULTS';

export const SET_QUESTIONS_TIME = 'SET_QUESTIONS_TIME';
export const SET_START_QUESTIONS = 'SET_START_QUESTIONS';

export const SET_DISCUSSION_TIME = 'SET_DISCUSSION_TIME';
export const SET_START_DISCUSSION = 'SET_START_DISCUSSION';

export const SET_LOCATION = 'SET_LOCATION';
export const SET_SPIES = 'SET_SPIES';
export const SET_IDENTIFIED_PLAYERS = 'SET_IDENTIFIED_PLAYERS';

export const GAME_PHASES = {
    ROLES_DISTRIBUTION: 'ROLES_DISTRIBUTION',
    QUESTIONS: 'QUESTIONS',
    DISCUSSION: 'DISCUSSION',
    IDENTIFY_SPIES: 'IDENTIFY_SPIES',
    RESULTS: 'RESULTS',
};

const initialState = {
    phase: GAME_PHASES.ROLES_DISTRIBUTION,
    questions: {
        questionsTime: 5000,
        startQuestions: null,
    },
    discussion: {
        discussionTime: 5000,
        startDiscussion: null,
    },
    spies: [],
    location: '',
    identifiedPlayers: [],
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SET_GAME_PHASE_TO_ROLES_DISTRIBUTIONS:
            return {
                ...state,
                phase: GAME_PHASES.ROLES_DISTRIBUTION,
            };
        case SET_GAME_PHASE_TO_QUESTIONS:
            return {
                ...state,
                phase: GAME_PHASES.QUESTIONS,
            };
        case SET_GAME_PHASE_TO_DISCUSSION:
            return {
                ...state,
                phase: GAME_PHASES.DISCUSSION,
            };
        case SET_GAME_PHASE_TO_IDENTIFY_SPIES:
            return {
                ...state,
                phase: GAME_PHASES.IDENTIFY_SPIES,
            };
        case SET_GAME_PHASE_TO_RESULTS:
            return {
                ...state,
                phase: GAME_PHASES.RESULTS,
            };
        case SET_QUESTIONS_TIME:
            return {
                ...state,
                questions: { ...state.questions, questionsTime: action.time },
            };
        case SET_START_QUESTIONS:
            return {
                ...state,
                questions: { ...state.questions, startQuestions: action.time },
            };
        case SET_DISCUSSION_TIME:
            return {
                ...state,
                discussion: { ...state.discussion, discussionTime: action.time },
            };
        case SET_START_DISCUSSION:
            return {
                ...state,
                discussion: { ...state.discussion, startDiscussion: action.time },
            };
        case SET_LOCATION:
            return {
                ...state,
                location: action.location,
            };
        case SET_SPIES:
            return {
                ...state,
                spies: action.gameSpies,
            };
        case SET_IDENTIFIED_PLAYERS:
            return {
                ...state,
                identifiedPlayers: action.identifiedPlayers,
            };
        default:
            return state;
    }
};