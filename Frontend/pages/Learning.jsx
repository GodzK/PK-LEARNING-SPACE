import React from 'react';
import { motion } from "framer-motion";
import "./Learning.css";

function Learning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='learning-pages'
    >
      <div className='hero'>
        <div className='learning'>
          <div className='learning-header'>
            <h5>Introduction to Docker</h5>
            <h3>พื้นฐานเเบบก้าวกระโดดสำหรับ Docker</h3>
            <h3 className='secondary'>อัพเดทเมื่อ 03 May 2024</h3>
            <div className="sec">
            <div className="sec-pic"></div>Phakaphol Dherachaisuphakij
          </div>
          </div>
          <div className='learning-pic'>
            <div className='images'></div>
          </div>
        </div>
        <div className='course-sec'>
          <h3>เกี่ยวกับ</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit possimus est aspernatur reiciendis enim!</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Learning;
