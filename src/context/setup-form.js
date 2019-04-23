import React, {createContext, useReducer, useContext} from 'react';

const SetupFormContext = createContext({});

const initialState = {
    name: '',
    startDate: '',
    endDate: '',
    numTeams: ''
};

const TYPES = {
    SET_NAME: 'SET_NAME',
    SET_START_DATE: 'SET_START_DATE',
    SET_END_DATE: 'SET_END_DATE',
    SET_NUM_TEAMS: 'SET_NUM_TEAMS'
};

function setupFormReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.SET_NAME:
            return {...state, name: action.payload};
        case TYPES.SET_START_DATE:
            return {...state, startDate: action.payload};
        case TYPES.SET_END_DATE:
            return {...state, endDate: action.payload};
        case TYPES.SET_NUM_TEAMS:
            return {...state, numTeams: action.payload};
        default:
            throw new Error('Invalid action for setup form reducer');
    }
}

export function useSetupForm() {
    const context = useContext(SetupFormContext);
    if (!context) {
        throw new Error(`useCount must be used within a CountProvider`)
    }
    return context
}

export function SetupFormProvider(props) {
    const [state, dispatch] = useReducer(setupFormReducer, initialState);
    const setName = (name) => dispatch({type: TYPES.SET_NAME, payload: name});
    const setStartDate = (startDate) => dispatch({type: TYPES.SET_START_DATE, payload: startDate});
    const setEndDate = (endDate) => dispatch({type: TYPES.SET_END_DATE, payload: endDate});
    const setNumTeams = (numTeams) => dispatch({type: TYPES.SET_NUM_TEAMS, payload: numTeams});
    return (
        <SetupFormContext.Provider value={{state, dispatch, setName, setStartDate, setEndDate, setNumTeams}} {...props} />
    );
}