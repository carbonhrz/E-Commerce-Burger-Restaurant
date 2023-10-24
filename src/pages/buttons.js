import React, { useState, useEffect } from 'react';
import products from './products.json'

// Component that renders the buttons where you can select the different categories of food
function Buttons({handleFilterChange}) {
  const [activeButtons, setActiveButtons] = useState(["Burger", "Vegan", "Getränke", "Beilage"]);
  

  const toggleButton = (buttonName) => {
    if (activeButtons.includes(buttonName)) {
      setActiveButtons(activeButtons.filter((name) => name !== buttonName));
    } else {
      setActiveButtons([...activeButtons, buttonName]);
    }
  };

  useEffect(() => {
    handleFilterChange(activeButtons); // Filterwert aktualisieren
  }, [activeButtons]);

  return (
    <div className="flex justify-center gap-4 pb-4">
      <button
        className={`rounded-full ${
          activeButtons.includes('Burger')
            ? 'bg-red-500 text-white'
            : 'bg-white text-red-500 border border-red-500'
        } py-2 px-4 font-semibold shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300`}
        onClick={() => toggleButton('Burger')}
      >
        Burger
      </button>
      <button
        className={`rounded-full ${
          activeButtons.includes('Getränke')
            ? 'bg-red-500 text-white'
            : 'bg-white text-red-500 border border-red-500'
        } py-2 px-4 font-semibold shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300`}
        onClick={() => toggleButton('Getränke')}
      >
        Getränke
      </button>
      <button
        className={`rounded-full ${
          activeButtons.includes('Vegan')
            ? 'bg-red-500 text-white'
            : 'bg-white text-red-500 border border-red-500'
        } py-2 px-4 font-semibold shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300`}
        onClick={() => toggleButton('Vegan')}
      >
        Vegan
      </button>
      <button
        className={`rounded-full ${
          activeButtons.includes('Beilage')
            ? 'bg-red-500 text-white'
            : 'bg-white text-red-500 border border-red-500'
        } py-2 px-4 font-semibold shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300`}
        onClick={() => toggleButton('Beilage')}
      >
      Beilage
      </button>
      <button
        className={`rounded-full ${
          activeButtons.includes('aktion')
            ? 'bg-red-500 text-white'
            : 'bg-white text-red-500 border border-red-500'
        } py-2 px-4 font-semibold shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300`}
        onClick={() => toggleButton('aktion')}
      >
        Aktion
      </button>
    </div>
  );
}

export default Buttons;