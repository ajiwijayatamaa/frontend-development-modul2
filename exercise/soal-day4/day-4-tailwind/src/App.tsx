import Hero_Section from "./components/Hero_Section"
import Section from "./components/Section"

const App = () => {
  return (
    <div className="relative">
      <Hero_Section/>

      <div className="absolute inset-75 flex justify-center items-center">
        <Section />
      </div>

    </div>
  )
}

export default App