import React from 'react'
import "../src/App.css";
import transition from '../src/transition';
function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <h1>About Page</h1>
      </div>
    </div>
  )
}

export default transition(About)