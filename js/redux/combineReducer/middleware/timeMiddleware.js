const timeMiddleware = (store) => (next) => (action) => {
    console.log('time', new Date().getTime());
    next(action);
}

module.exports = timeMiddleware;