import { useState } from "react"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import CarStuff from "./pages/CarStuff"

function App() {
  const [selectedPage, setSelectedPage] = useState<"home" | "projects" | "carstuff">("home")

  function renderPage() {
    switch (selectedPage) {
      case "home":
        return <Home />
      case "projects":
        return <Projects />
      case "carstuff":
        return <CarStuff />
      default:
        return <Home />
    }
  }

  return (
    <>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {renderPage()}
    </>
  )
}

export default App;
