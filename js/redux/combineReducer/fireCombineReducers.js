const combineReducers = require('./combineReducer.js');
const counterReducer = require('./counterReducer');
const InfoReducer = require('./InfoReducer');
const createStore = require('./createStore');


const reducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
});

let store = createStore(reducer);
console.dir(store.getState());
store.subscribe(() => {
    let state = store.getState();
    // console.log(state.counter.count, state.info.name, state.info.description);
});

store.dispatch({
    type: 'INCREMENT'
});


store.dispatch({
    type: 'SET_NAME',
    name: 'state2'
});