import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <main>
    <ul id="scene" 
      data-friction-x="0.1"
      data-friction-y="0.1"
      data-scalar-x="25"
      data-scalar-y="15"
      data-limit-y="50"
      className="scene">
      <li className="layer" data-depth="0.40">
        <div className="content">
        <h1 id="title">The Insurance Ug</h1>
          <h1 id="title">Site Launching Soon!</h1>
          <p>We are working hard on our awesome new website. Stay Tuned!</p>
        </div>
      </li>
      <li className="layer" data-depth="1.00">
        <div className="footer"></div>
      </li>
      <li className="layer" data-depth="0.65">
        <div className="cloud-back">
          <img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/rocket_cloud_back.svg" alt="Site Launching Soon!" />
        </div>
      </li>
      <li className="layer" data-depth="0.70">
        <div className="rocket">
          <img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/rocket.svg" alt="Site Launching Soon!" />
        </div>
      </li>
      <li className="layer" data-depth="0.75">
        <div className="cloud-front">
          <img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/rocket_cloud_front.svg" alt="Site Launching Soon!" />
        </div>
      </li>
    </ul>
    <div className="social">Follow Us: <a className="social__link" href="#"><img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/facebook.svg" alt="Facebook" /></a></div> 
  </main>
  );
}

export default App;
