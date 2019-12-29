export const UPDATE_CUSTOM_LOCATIONS = 'UPDATE_CUSTOM_LOCATIONS';
export const SELECT_LOCATION = 'SELECT_LOCATION';

const initialState = {
    baseLocations: { locations: ['A1', 'A2', 'A3'], name: 'Базовые', isSelected: true },
    customLocations: { locations: ['Пусто!'], name: 'Кастомные', isSelected: false },
};

export default (state = initialState, action): typeof initialState => {
    let newState;
    switch (action.type) {
        case UPDATE_CUSTOM_LOCATIONS:
            return {
                ...state,
                customLocations: { ...state.customLocations, locations: action.locations },
            };
        case SELECT_LOCATION:
            newState = { ...state };
            if (action.name === newState.baseLocations.name)
                newState.baseLocations.isSelected = !newState.baseLocations.isSelected;

            if (action.name === newState.customLocations.name)
                newState.customLocations.isSelected = !newState.customLocations.isSelected;

            return newState;
        default:
            return state;
    }
};
