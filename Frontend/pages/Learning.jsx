import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import {motion} from "framer-motion"
function Learning() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5, delay: 0.3 }} 
    className='learning-pages'
  >
    <h1>SIT Sandbox</h1>
  </motion.div>
  );
}

export default Learning;
