import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";


const UseCustomHook = () => {
    const { count, handleDecrement, handleIncrement} = useCounter();

  return (
    <div>
        <h1>UseCustomHook</h1>

        <button onClick={handleDecrement}>Decrement</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <Link to="/">Halaman Home</Link>
    </div>
  );
};

export default UseCustomHook