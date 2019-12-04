let initState = {
  count: 0
}

function counterReducer(state, action) {
  if(!state){
    state = initState;
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
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

module.exports = counterReducer;