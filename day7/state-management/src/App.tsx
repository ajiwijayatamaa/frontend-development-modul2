import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UseContext from "./pages/UseContext"
import GlobalState1 from "./pages/GlobalState1"
import GlobalState2 from "./pages/GlobalState2"

const App = () => {
  return (
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<UseContext/>} path="/use-context" />
      <Route element={<GlobalState1/>} path="/global-state-1" />
      <Route element={<GlobalState2/>} path="/global-state-2" />
    </Routes>
  )
}

export default App