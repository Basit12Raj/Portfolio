import  Navbar  from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import {
  BrowserRouter,
  Routes
} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import Contact from './components/pages/Contact'
import WelcomeSection from './components/WelcomeSection'
import ProjectShowcase from './components/ProjectShowcase'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    </Routes>
      <Navbar />
      <HeroSection />
      <WelcomeSection/>
      <AboutPage/>
      <SkillsSection/>
      <ProjectShowcase/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
