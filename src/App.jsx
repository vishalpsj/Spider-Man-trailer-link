import { SpidermanMovies } from "./components/SpidermanMovies"
import "./components/Spiderman.css"

const App = () => {
  return(
    <section className="container">
      <h1 className="containerHeading">Spider-Man Movies</h1>
      <SpidermanMovies />
    </section>
  )
}

export default App