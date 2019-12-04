const combineReducers = require('./combineReducer.js');
const counterReducer = require('./counterReducer');
const InfoReducer = require('./InfoReducer');
const createStore = require('./createStore');


const reducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
});

let initState = {
    counter: {
        count: 0
    },
    info: {
        name: 'state',
        description: 'state_desc'
    }
}

let store = createStore(reducer, initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count, state.info.name, state.info.description);
});

store.dispatch({
    type: 'INCREMENT'
});


store.dispatch({
    type: 'SET_NAME',
    name: 'state2'
});