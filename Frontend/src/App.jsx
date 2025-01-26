import "./App.css";
import React, { useEffect, useState } from "react";
import transition from "./transition";
import { useNavigate , Link } from "react-router-dom";
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
     <div className="home-container"><h2>SIT SANDBOX</h2>
     <button className="btn-53">
  <div className="original">
    <Link></Link>Explore</div>
  <div className="letters">
  <Link to="/about"><span>L</span>
    <span>E</span>
    <span>T</span>
    <span>S</span>
    <span>G</span>
    <span>O</span></Link>
  </div>
</button>
      </div>

    </div>
  );
}

export default  transition(App);
