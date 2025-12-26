import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseReducer from "./pages/UseReducer";
import UseCallback from "./pages/UseCallback";
import UseCustomHook from "./pages/useCustomHook";

const App = () => {
  return (
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<UseState/>} path="/use-state" />
      <Route element={<UseReducer/>} path="/use-reducer" />
      <Route element={<UseCallback/>} path="/use-callback" />
      <Route element={<UseCustomHook/>} path="/use-customhook" />
    </Routes>
  );
};

export default App;
