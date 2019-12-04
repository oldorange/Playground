const applyMiddleware = function (...middlewares) {
    /*return rewrite createStore function*/
    return function rewriteCreateStoreFunc(oldCreateStore) {
        return function newCreateStore(reducer, initState) {
            const store = oldCreateStore(reducer, initState);
            /* const chain = [exception, time, logger]*/
            const chain = middlewares.map(middleware => middleware(store));
            let dispatch = store.dispatch;
            chain.reverse().map(middleware => {
                dispatch = middleware(dispatch);
            });

            /*rewrite dispatch*/
            store.dispatch = dispatch;
            return store;
        }
    }
}
module.exports = applyMiddleware;
