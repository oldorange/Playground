/*action = {type:'',other:''} (reducer)*/
function plan(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

/*add parameter plan*/
const createStore = function (plan, initState) {
    let state = initState;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function changeState(action) {
        /*planed update state*/
        state = plan(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function getState() {
        return state;
    }

    return {
        subscribe,
        changeState,
        getState
    }
}

// Fire
let initState = {
    count: 0
}
let store = createStore(plan, initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(state.count);
});
store.changeState({
    type: 'INCREMENT'
});
store.changeState({
    type: 'DECREMENT'
});
store.changeState({
    count: 'abc'
});