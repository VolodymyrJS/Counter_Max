import * as actionTypes from './actionTypes';

export const deleteResult = (elementId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        elementId: elementId
    };
};

const prepareResult = res => {
    return {
        type: actionTypes.SHOW_RESULT,
        res: res
    }
};

export const showResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(prepareResult(res));
        }, 1000);
    };
};