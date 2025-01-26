import React, { useState, useEffect } from "react";
import "../src/App.css";
import { motion } from "framer-motion";
import transition from "../src/transition";
import { useNavigate } from "react-router-dom";

const cardsData = [
  { title: "Frontend", gradientId: "a", stopColor1: "#387EB8", stopColor2: "#366994", path: "/frontend" },
  { title: "Backend", gradientId: "b", stopColor1: "#F7E018", stopColor2: "#FFCE44", path: "/backend" },
  { title: "Database", gradientId: "c", stopColor1: "#68A063", stopColor2: "#4CAF50", path: "/database" },
  { title: "Programming", gradientId: "d", stopColor1: "#FF5733", stopColor2: "#FF8D1A", path: "/programming" },
  { title: "Ux/Ui", gradientId: "e", stopColor1: "#61DAFB", stopColor2: "#21A1F1", path: "/uxui" },
  { title: "Devops", gradientId: "f", stopColor1: "#E44D26", stopColor2: "#F16529", path: "/devops" },
  { title: "Networking", gradientId: "g", stopColor1: "#264DE4", stopColor2: "#2965F1", path: "/networking" },
  { title: "Security", gradientId: "h", stopColor1: "#8E44AD", stopColor2: "#9B59B6", path: "/security" },
];
function Course() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentIndex < cardsData.length) {
      const timer = setTimeout(() => {
        setCards((prevCards) => [...prevCards, cardsData[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <div className="about">
      <div className="about-container">
        <h1>Course</h1>
        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              className="card"
              key={index}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 25 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="App-logo"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                  fill={`url(#${card.gradientId})`}
                ></path>
                <defs>
                  <linearGradient
                    id={card.gradientId}
                    x1="19.075"
                    y1="18.782"
                    x2="34.898"
                    y2="34.658"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={card.stopColor1}></stop>
                    <stop offset="1" stopColor={card.stopColor2}></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="header">
                <center>
                  <span className="welcometo">Welcome to</span>{" "}
                  <span className="python">{card.title}</span>
                </center>
              </div>
              <button className="App-button" onClick={() => handleNavigation(card.path)}>Start learning now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default transition(Course);