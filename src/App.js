import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import TestimonialsSection from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Skills/>
      <Experience/>
      <TestimonialsSection/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
