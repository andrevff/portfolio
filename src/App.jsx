import { AboutMe } from "./components/AboutMe"
import { Education } from "./components/Education"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {

  return (
    <div className="flex-col">
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
