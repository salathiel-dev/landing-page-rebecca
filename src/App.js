import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans">
            <Header />
            <div>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
