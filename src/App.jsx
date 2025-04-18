import './App.css'
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Education from './components/Education/Education';
import Portfolio from './components/projects/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';


const App = () =>{
  return (
   <>
   <Header />

   <main className="main">
    <Home />
    <About />
    <Skills/>
    <Education/>
    <Portfolio/>
    <Contact/>
    <Footer/>
   </main>
   </>
  )
}

export default App;