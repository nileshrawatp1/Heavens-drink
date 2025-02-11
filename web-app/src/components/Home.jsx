import React, { useState } from 'react';
import Bottleimg from "../assets/jeera.png";
import '../style/Home.css'


const Home = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const flavors = ['Orange Blast', 'Berry Boom', 'Lime Lightning', 'Mango Wave'];

  return (
    <div className="homepage-container">
      {/* Main Content */}
      <div className="content-wrapper">
        {/* Animated Header */}
        <div className="header-animation">
          <h1 className="main-title">FIZZ<span className="title-accent">POP</span>!</h1>
          <p className="subtitle">Taste the Electric Refreshment!</p>
        </div>

        {/* Product Showcase */}
        <div className="product-showcase">
          {/* Left Side - Animated Can */}
          <div className="can-container">
            <img
              src={Bottleimg}
              alt="FizzPop Can"
              className="can-image"
            />
            <div className="can-glow-effect" />
            <div className="bubble-effect">
              <span>✨</span>
            </div>
          </div>

          {/* Right Side - Interactive Content */}
          <div className="interactive-content">
            {/* Flavor Selector */}
            <div className="flavor-grid">
              {flavors.map((flavor, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFlavor(index)}
                  className={`flavor-button ${selectedFlavor === index ? 'active-flavor' : ''}`}
                >
                  {flavor}
                </button>
              ))}
            </div>

            {/* Flavor Description */}
            <div className="description-box">
              <h3 className="flavor-title">{flavors[selectedFlavor]}</h3>
              <p className="flavor-text">
                Experience the explosive combination of tropical fruits and
                electrifying fizz that will dance on your taste buds!
              </p>
            </div>

            {/* Call to Action */}
            <div className="cta-container">
              <button className="cta-button orange-button">
                Buy Now ➔
              </button>
              <button className="cta-button blue-button">
                Mix Flavors 🎉
              </button>
            </div>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div className="bubble-wrapper">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                width: `${Math.random() * 32 + 8}px`,
                height: `${Math.random() * 32 + 8}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner">
        <h2 className="promo-text">
          🎉 Limited Time Offer! 2x Fizz for 24 Hours! 🎉
        </h2>
      </div>
    </div>
  );
};

export default Home;
