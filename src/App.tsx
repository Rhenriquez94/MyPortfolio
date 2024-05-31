import Hero from './components/Hero.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <main className='relative p-0 flex flex-col items-center w-auto'>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
