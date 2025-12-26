import { useCounter } from "../stores/userCounter";

const GlobalState1 = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h1>GlobalState1</h1>
      <hr />
      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default GlobalState1;
