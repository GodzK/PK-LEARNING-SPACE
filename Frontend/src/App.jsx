import "./App.css";
import React, { useEffect, useState } from "react";
import transition from "./transition";
import { useNavigate } from "react-router-dom";
function App() {
  const [blocks, setBlocks] = useState([]);
  const navigate = useNavigate();  // ใช้ useNavigate สำหรับเปลี่ยนเส้นทาง
  useEffect(() => {
    fetch("https://678dadbfa64c82aeb11dab32.mockapi.io/api/pages/header")
      .then((res) => res.json())
      .then((data) => {
        setBlocks(data);
      })
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <div className="container">
     <div className="home-container"><h2>Hello World</h2>
      </div>

    </div>
  );
}

export default  transition(App);
