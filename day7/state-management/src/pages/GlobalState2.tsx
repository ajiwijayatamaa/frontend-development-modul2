import { Link } from "react-router-dom";
import { useCounter } from "../stores/userCounter";

const GlobalState2 = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h1>GlobalState2</h1>
      <Link to="/global-state-1">
        <p>Halaman Global State 1</p>
      </Link>
      <hr />
      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default GlobalState2;
