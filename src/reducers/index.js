import { createStore } from "redux";

//Actions
export let increment = () => {
  return {
    type: "INCREMENT",
  };
};

export let decrement = () => {
  return {
    type: "DECREMENT",
  };
};
const init = {
    counter : 0
}
//STATE
const reducer = (state = init, action) => {
  if (action.type === "INCREMENT") {
    return {counter :state.counter + 1}
  } else if (action.type === "DECREMENT") {
    return {counter :state.counter - 1}
  }
  return state
};

export let store = createStore(reducer);
