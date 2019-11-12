import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
 
const initialState = {
    result: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.result.filter(element => element.id !== action.elementId);
    return updateObject(state, {result: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_RESULT:
            return updateObject(state, {result: state.result.concat({id: Math.random(), result: action.res})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer; 