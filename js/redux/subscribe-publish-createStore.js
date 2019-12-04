const createStore = function (initState) {
    let state = initState;
    let listeners = [];
  
    function subscribe(listener) {
      listeners.push(listener);
    }
  
    function changeState(newState) {
      state = newState;
      /*publish*/
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

  // fire
  let initState = {
    counter: {
      count: 0
    },
    info: {
      name: '',
      description: ''
    }
  }
  
  let store = createStore(initState);
  
  store.subscribe(() => {
    let state = store.getState();
    console.log(`${state.info.name}：${state.info.description}`);
  });
  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
  });
  
  store.changeState({
    ...store.getState(),
    info: {
      name: 'state_name',
      description: 'state_desc'
    }
  });
  
  store.changeState({
    ...store.getState(),
    counter: {
      count: 1
    }
  });