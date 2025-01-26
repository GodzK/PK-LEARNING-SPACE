import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lessonsData from "../src/data.js";
import "../src/App.css";
import { motion } from "framer-motion";
import Loading from "./Loading";

function Learning() {
  const { course } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // ใช้ข้อมูลจาก data.js แทนการดึงข้อมูลจาก API
    const lesson = lessonsData[course.toLowerCase()]; // แปลง course เป็นตัวพิมพ์เล็ก
    if (lesson) {
      setData(lesson);
    } else {
      console.error("Lesson not found");
    }
  }, [course]);

  if (!data) return <Loading />;

  return (
    <div className="about">
      <div className="about-container">
        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 25 }} transition={{ duration: 0.5 }}>
          <div>
            <h1>{data.title}</h1>
            <h2>{data.content}</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Learning;