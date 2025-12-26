import ComponentA from "../components/ComponentA";
import { UserContext } from "../context/UserContext";



const UseContext = () => {
  return (
    <UserContext.Provider value={{ name: "Budi" }}>
      <div>
        <h1>UseContext</h1>
        <ComponentA/>
      </div>
    </UserContext.Provider>
  );
};

export default UseContext;
