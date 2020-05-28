import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Components
import Contact from './components/contact/Contact.component';
import Navbar from './components/navbar/Navbar.component';
import MyWork from './components/myWork/MyWork.component';
import OnLoad from './containers/onLoad.component';
import Hero from './containers/hero.component';
import Skills from './containers/skills.component';
import About from './components/about/about.component';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <Router>
      {loading ? (
        <OnLoad />
      ) : (
        <div>
          <Hero loading={loading} />
          <About />
          <MyWork />
          <Skills />
          <Contact />
        </div>
      )}
    </Router>
  );
}

export default App;
