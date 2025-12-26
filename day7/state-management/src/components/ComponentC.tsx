import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const ComponentC = () => {
    const context = useContext(UserContext)

  return (
    <div>
        <h1>Component C</h1>
        <p>{context?.name}</p>
    </div>
  )
}

export default ComponentC