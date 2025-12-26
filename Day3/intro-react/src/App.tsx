import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<About />} path="/about"/>
      <Route element={<Contact />} path="/contact"/>
      <Route element={<NotFound />} path="*"/>
      <Route element={<Product/>} path="/product"/>
    </Routes>
  );
}

export default App;


