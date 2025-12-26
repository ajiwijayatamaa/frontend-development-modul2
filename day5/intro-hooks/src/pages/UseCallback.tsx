import { memo, useCallback, useState } from "react";

interface ComponentChildProps {
  increment: () => void;
}

const ComponentChild = memo((props: ComponentChildProps) => {
  console.log("COMPONENT CHILD RENDER!");
  return (
    <div>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<string>("dark");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <h1>UseCallback</h1>
      <p>{count}</p>
      <ComponentChild increment={increment} />

      <hr />

      <p>{theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default UseCallback;
