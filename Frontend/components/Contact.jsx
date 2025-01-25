import React from 'react'
import '../src/App.css';
import transition from '../src/transition'
function Contact() {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <h1 >This is Contact Page</h1>
      </div>
        
    </div>
  )
}

export default transition(Contact)