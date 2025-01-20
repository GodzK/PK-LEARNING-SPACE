import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";


function Learning() {
  return (
    <div className="learn-container" data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="learning">
        <h1>This is Learning Page</h1>
        <Link to="/" className="button">Go Back to Home</Link>
      </div>
    </div>
  );
}

export default Learning;
