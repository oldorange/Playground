function combineReducers(reducers) {
    /* reducerKeys = ['counter', 'info']*/
    const reducerKeys = Object.keys(reducers)

    /*merged reducer function*/
    return function combination(state = {}, action) {
        /*new state*/
        const nextState = {}

        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i]
            const reducer = reducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey
        }
        return nextState;
    }
}

module.exports = combineReducers;