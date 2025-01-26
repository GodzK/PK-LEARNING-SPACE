import React from 'react'
import transition from '../src/transition'
import { motion } from 'framer-motion'
import './About.css'
function About() {
  return (
    <div className='contact'>
        <div className='contact-container'>
        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 25 }} transition={{ duration: 0.5 }}>
          <div className='about-page'>
            <h1>About</h1>
            <div className='description'>
              <p>นี่คือสรุปจากพี่สู่น้อง ใครที่กำลังหาสิ่งที่ตัวเองชอบ ใครที่สนใจในเรื่องDevelop สามารถเริ่มเรียนจากตรงนี้ได้เลย พี่ทำเพื่อสนองความต้องการของตัวเองตอนเด็กที่ไม่มีครูสอนดีๆ ให้พี่ตั้งเเต่ตอนนั้น เพราะงั้น ตั้งใจเรียนหล่ะ โค้ดดิ้งอย่างมีความสุขครับ</p>  
            </div>
            
          </div>
        </motion.div>
            
        </div>
    </div>
  )
}

export default transition(About)