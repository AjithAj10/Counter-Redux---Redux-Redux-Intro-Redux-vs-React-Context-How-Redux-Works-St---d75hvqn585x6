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

//STATE
const reducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state
};

export let store = createStore(reducer);
