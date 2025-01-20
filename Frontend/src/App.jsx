import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetch("https://678dadbfa64c82aeb11dab32.mockapi.io/api/pages/header")
      .then((res) => res.json())
      .then((data) => setBlocks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="content">
        <p>`เขียนโค้ดมันง่าย เเต่อธิบายโค้ดมันยาก`</p>
        <h1>SIT Sandbox</h1>
        <div className="nav-role">
          <div className="sec">
            <div className="sec-pic"></div>Frontend
          </div>
          <div className="sec">
            <div className="sec-pic"></div>BackEnd
          </div>
          <div className="sec">
            <div className="sec-pic"></div>DataBase
          </div>
        </div>
      </div>
      <div className="asking">
        <h2>Explore for more!</h2>
      </div>
      <div className="scroll">
        {blocks.map((block) => (
          <div className="block" key={block.id}>
            <div className="top-card">
              <div className="logo">
                {block.card.logo.icon.svg.startsWith("http") ? (
                  <img
                    src={block.card.logo.icon.svg}
                    alt="icon"
                    className="svg-icon"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10vh"
                    viewBox="0 -960 960 960"
                    width="50px"
                    fill="#e8eaed"
                  >
                    <path d={block.card.logo.icon.svg} />
                  </svg>
                )}
                <div className="text-top">
                  <p className="secondary">{block.card.logo.text.secondary}</p>
                  <h4>{block.card.logo.text.heading}</h4>
                </div>
              </div>
              <div className="top-text">
                <p>{block.card.content.description}</p>
                <button
                  className="button"
                  onClick={() => (window.location.href = block.card.content.button.action)}
                >
                  {block.card.content.button.text}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
