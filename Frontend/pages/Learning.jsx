import React from 'react';
import { motion } from "framer-motion";
import "./Learning.css";

function Learning() {
  // Mock data
  const data = {
    title: "Introduction to Docker",
    description: "พื้นฐานเเบบก้าวกระโดดสำหรับ Docker",
    lastUpdated: "03 May 2024",
    instructor: "Phakaphol Dherachaisuphakij",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit possimus est aspernatur reiciendis enim!",
    content: [
      { episode: "Hello" },
      { episode: "Introduction to Containers" },
      { episode: "Setting Up Docker" },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlZJAlEkU-Nb1I7lGheQVMXaBXphuA3oR4A&s",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="learning-pages"
    >
      <div className="hero">
        <div className="wrapper">
          <a href="#"><span>Get Back!</span></a>
        </div>
        <div className="learning">
          <div className="learning-header">
            <h5>{data.title}</h5>
            <h3>{data.description}</h3>
            <h3 className="secondary">อัพเดทเมื่อ {data.lastUpdated}</h3>
            <div className="section">
              {data.instructor}
            </div>
          </div>
          <div className="learning-pic">
            <div className="images">
              <img src={data.image} alt="Course Thumbnail" />
            </div>
          </div>
        </div>
        <div className="course-sec">
          <h3>เกี่ยวกับ</h3>
          <p>{data.about}</p>
          <div className="course-data">
            <h5>เนื้อหาใน course</h5>
            {data.content.length > 0 ? (
              data.content.map((item, index) => (
                <div key={index} className="course-episode">
                  <p>{item.episode}</p>
                </div>
              ))
            ) : (
              <p>No course content available.</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Learning;
