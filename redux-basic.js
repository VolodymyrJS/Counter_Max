const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_VALUE':
            return {
                ...state,
                counter: state.counter + action.value
            };
    }
    return state;
}; 

const store = createStore(reducer);

store.subscribe(() => console.log('[Subscription: ]', store.getState()));

console.log(store.getState());

store.dispatch({type: 'INC'});
store.dispatch({type: 'ADD_VALUE', value: 10});

console.log(store.getState());