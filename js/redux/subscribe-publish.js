/*------count subscriber & publisher implementation------*/
let state = {
    count: 1
};
let listeners = [];

function subscribe(listener) {
  listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  /*publish*/
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}

/*FIRE*/
subscribe(() => {
  console.log(state.count);
});

changeCount(2);
changeCount(3);
changeCount(4);