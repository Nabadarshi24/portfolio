import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Achivement from './components/Achivement'
import Experience from './components/Experience'
import Port from './components/Port'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Port />}>
          <Route index element={<About />} /> 
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="achivement" element={<Achivement />} /> */}
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
