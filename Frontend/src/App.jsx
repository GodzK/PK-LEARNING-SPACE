import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <p>"เขียนโค้ดมันง่าย เเต่อธิบายโค้ดมันยาก"</p>
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
        <div className="block">
          <div className="top-card">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="10vh"
                viewBox="0 -960 960 960"
                width="50px"
                fill="#e8eaed"
              >
                <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z" />
              </svg>
              <div className="text-top">
                <p className="secondary">Writing</p>
                <h4>Writing Blog</h4>
              </div>
            </div>
            <div className="top-text">
              <p>Blogหลักๆ ที่ผมเขียน มักจะเป็นเกี่ยวกับการทำWeb site เเละส่วนมากจะหนักไปทางfrontend เเละกำลังจะเพิ่มเนื้อหาใ้หครอบคลุมในการพาทำFullStack ครับผม </p>
            <button className="button">See My Blog</button>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="top-card">
            <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" height="10vh" viewBox="0 -960 960 960" width="50px" ><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              <div className="text-top">
                <p className="secondary">Video</p>
                <h4>Coding</h4>
              </div>
            </div>
            <div className="top-text">
              <p>Coding Courseในเว็บนี้จะมาจากการเรียนรู้ของผมทั้งหมด ตั้งเเต่ปี 1 จนถึงปี 4 ผมพยายามถ่ายทอดมันออกมาให้ง่ายสำหรับคนที่ะเริ่มเรียนการเขียนโค้ด หรือคนที่อยาก<span > ADVANCE </span>ผมก็มีหลักสูตรให้นะครับ </p>
            <button className="button">See My Blog</button>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="top-card">
            <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" height="10vh" viewBox="0 -960 960 960" width="50px" ><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              <div className="text-top">
                <p className="secondary" >Rich of course </p>
                <h4 style={{paddingLeft:"40px"}}> All Stack Web Developer</h4>
              </div>
            </div>
            <div className="top-text">
              <p>ทุกความรู้ของผมอยู่ในนี้หมดเเล้ว ถ้าอยากจะเริ่มเรียนรู้เพื่อไปต่อสู้กับโลกที่โหดร้าย เรียนเลย! เว็บเรามีทั้ง <span >Frontend</span> <span >Backend</span>  <span >Database</span>  <span>Devops</span> เเละอีกมากมาย</p>
            <button className="button">See My Blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
