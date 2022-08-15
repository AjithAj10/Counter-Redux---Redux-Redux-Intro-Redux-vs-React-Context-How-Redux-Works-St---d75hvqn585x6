import React from "react";
import { decrement, increment, store } from "../reducers";
import { useDispatch, useSelector } from "react-redux";

function Btn(props) {
  const dispatch = useDispatch();
  const val = useSelector(state => state.counter);
 // console.log(val);
  return (
    <div>
      <h1 data-testid="counter">{val}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Btn;
