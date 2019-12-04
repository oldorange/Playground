const combineReducers = require('./combineReducer.js');
const counterReducer = require('./counterReducer');
const InfoReducer = require('./InfoReducer');
const createStore = require('./createStore');
const applyMiddleware = require('./middleware/applyMiddleware');
const exceptionMiddleware = require('./middleware/exceptionMiddleware');
const timeMiddleware = require('./middleware/timeMiddleware');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const reducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
});
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
const store = createStore(reducer, {}, rewriteCreateStoreFunc);

console.dir(store.getState());
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