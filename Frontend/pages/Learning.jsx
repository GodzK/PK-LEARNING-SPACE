import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lessonsData from "../src/data.js";
import "../src/App.css";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function Learning() {
  const { course } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const lesson = lessonsData[course.toLowerCase()];
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
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 25 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1>{data.title}</h1>
            <h2>{data.content}</h2>
          </div>
          <div className="learn">
            <h2>Year 1</h2>
            <div className="about-grid">
              {data.courses.map((lesson, index) => (
                <div key={index} className="lesson-card">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                  <button
                    className="view-more-btn"
                    onClick={() => window.open(lesson.notionLink, "_blank")}
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Learning;
