import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Components
import Contact from './components/contact/Contact.component';
import Navbar from './components/navbar/Navbar.component';
import MyWork from './components/myWork/MyWork.component';
import OnLoad from './containers/onLoad.component';
function App() {
  return (
    <Router>
      <OnLoad />
      <Navbar />
      <MyWork />
      <Contact />
    </Router>
  );
}

export default App;
