import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <footer className="footer">
        <p>© 2024 Developer Portfolio. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
