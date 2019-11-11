import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_RESULT:
            return {
                ...state,
                result: state.result.concat({id: Math.random(), result: action.res})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter(element => element.id !== action.elementId);
            return {
                ...state,
                result: updatedArray
            }
        default:
            return state;
    }
};

export default reducer; 