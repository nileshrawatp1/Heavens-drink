import { useState } from 'react';
import BottleJeera from  '../assets/jeera.png'

const Home = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const flavors = ['Orange Blast', 'Berry Boom', 'Lime Lightning', 'Mango Wave'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-bounce">
          <h1 className="text-6xl font-bold text-orange-600 drop-shadow-lg">
            FIZZ<span className="text-blue-600">POP</span>!
          </h1>
          <p className="mt-4 text-2xl text-gray-700 font-semibold">
            Taste the Electric Refreshment!
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Can */}
          <div className="relative group flex justify-center">
            <img
              src={BottleJeera}
              alt="FizzPop Can"
              className="h-96 transform transition-transform duration-500 group-hover:rotate-12 hover:scale-110"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff5_10%,_transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-8 animate-bubble">
              <span className="text-4xl">✨</span>
            </div>
          </div>

          {/* Right Side - Interactive Content */}
          <div className="space-y-8">
            {/* Flavor Selector */}
            <div className="grid grid-cols-2 gap-4">
              {flavors.map((flavor, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFlavor(index)}
                  className={`p-6 rounded-2xl text-xl font-bold transition-all duration-300 ${
                    selectedFlavor === index
                      ? 'bg-orange-500 text-white scale-105 shadow-lg'
                      : 'bg-white hover:bg-orange-100 hover:scale-100'
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>

            {/* Flavor Description */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">
                {flavors[selectedFlavor]}
              </h3>
              <p className="text-gray-600 text-lg">
                Experience the explosive combination of tropical fruits and
                electrifying fizz that will dance on your taste buds!
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center space-x-6">
              <button className="bg-orange-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-orange-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                Buy Now ➔
              </button>
              <button className="bg-blue-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                Mix Flavors 🎉
              </button>
            </div>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div className="hidden lg:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-white/30 rounded-full animate-float"
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
      <div className="mt-24 bg-orange-500/90 p-6 rounded-2xl text-center backdrop-blur-sm animate-pulse-slow">
        <h2 className="text-3xl font-bold text-white">
          🎉 Limited Time Offer! 2x Fizz for 24 Hours! 🎉
        </h2>
      </div>
    </div>
  );
};

export default Home;
