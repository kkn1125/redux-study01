import React from "react";
import Counter from "../component/Counter";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../modules/counter";

function Container() {
  const { number } = useSelector((state) => ({
    number: state.counter.number,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default Container;
