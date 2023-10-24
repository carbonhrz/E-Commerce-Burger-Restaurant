import { useEffect } from 'react';
import products from './products.json'
import Example from "./quickview"
import { useState } from "react";
import Header from "./header";
import Hero from './hero';
import { Footer } from 'react-daisyui';
import Buttons from './buttons';
  
  export default function Bucket() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(products.burger[0]);
    const [burgerCart, setBurgerCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [filter, setFilter] = useState("Burger" );


    function openModal(product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    
    }

    function closeModal() {
      setIsModalOpen(false);
    }

    function addToCart(productToAdd, quantity, extras) {
      const newProduct = { ...productToAdd, id: Date.now(), quantity: quantity, extrawuensche: extras}; // Eindeutige ID generieren um Produkte genau löschen zu können
      setBurgerCart((prevCart) => [...prevCart, newProduct]);
      setCounter((prevCounter) => prevCounter + parseInt(quantity,10));
      closeModal();
    }

    function removeFromCart(productId) {
      const productToRemove = burgerCart.find((product) => product.id === productId);
      if (productToRemove) {
        setBurgerCart((prevCart) => prevCart.filter((product) => product.id !== productId));
        setCounter((prevCounter) => prevCounter - productToRemove.quantity);
      }
    }

    function handleFilterChange(newFilters) {
      setFilter(newFilters);
    }

    return (
        
      <div className="bg-sky-50">
       <Header cart={burgerCart} counter={counter} removeFromCart={removeFromCart} />
       <Hero />
     
       <h1 className="font-pacifico text-5xl mt-8 text-center underline">Menü</h1>
       
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <Buttons handleFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 rounded p-2 shadow-2xl">
            {products.burger.filter((product) => filter.includes(product.category)).map((product) => (
              <div key={product.id} className="group relative" onClick={() => openModal(product)}>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                src={product.image_url}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"  
              />
            
              <span className="sr-only">{product.name}</span>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
               
              </div>
            ))}
          </div>
         {isModalOpen && ( <Example status={isModalOpen} close={setIsModalOpen} data={selectedProduct} addToCart={addToCart}/>
         )}
        </div>
        <Footer className="p-10 bg-primary text-secondary-content bg-red-600" >
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>
          The Burger Bar
          <br />
          Made in Germany since 1994
        </p>
      </div>

      <div>
        <Footer.Title>Services</Footer.Title>
        <a className="link link-hover">Speisekarte</a>
        <a className="link link-hover">Bestellungen</a>
        <a className="link link-hover">Lieferung</a>
        <a className="link link-hover">Reservierung</a>
      </div>
      <div>
        <Footer.Title>Unternehmen</Footer.Title>
        <a className="link link-hover">Über uns</a>
        <a className="link link-hover">Kontakt</a>
        <a className="link link-hover">Karriere</a>
        <a className="link link-hover">Presse</a>
      </div>
      <div>
        <Footer.Title>Rechtliches</Footer.Title>
        <a className="link link-hover">Impressum</a>
        <a className="link link-hover">Datenschutz</a>
        <a className="link link-hover">Nutzungsbedingungen</a>
      </div>
    </Footer>
      </div>
    )
  }