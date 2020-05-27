import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <div></div>
      <nav>
        <Link>Home</Link>

        <Link>About</Link>

        <Link>Contact</Link>
      </nav>
    </Router>
  );
};

export default Navbar;
