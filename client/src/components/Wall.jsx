// Wall.js
import React, { Fragment, useState } from "react";
import Featured from "./featured/FeaturedSection";
import ImageBig from "./pic.jpg";
import Cart from "./Cart";
import { useCart } from "./CartContext";
import Alert from "./Alert";
import Category from './Categories';

export default function Wall() {
  const { cartItems, addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide the alert after 3 seconds
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const dummyCards = [
    {
      id: 1,
      title: "Title 1",
      price: 30,
      image: ImageBig,
    },
    {
      id: 2,
      title: "Title 2",
      price: 2,
      image: ImageBig,
    },
    {
      id: 3,
      title: "Title 3",
      price: 130,
      image: ImageBig,
    },
    {
      id: 4,
      title: "Title 1",
      price: 300,
      image: ImageBig,
    },
    {
      id: 5,
      title: "Title 2",
      price: 90,
      image: ImageBig,
    }
  ];

  return (
    <Fragment>
      <div>
        <Featured />
      </div>
      <div className="md:mt-9 mt-4">
        <Category />
      </div>
      <Cart cartItems={cartItems} isOpen={cartOpen} />
      {showAlert && (
        <Alert
          message="Item added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}
      
      <div className="bg-white grid grid-cols-2 md:grid-cols-5 gap-0 md:mx-8 mx-2 md:mt-9 mt-5">
        {dummyCards.map((card) => (
          <div
            key={card.id}
            className=" md:pb-6 pb-3 md:m-2 m-2 flex flex-col justify-center "
            style={{ backdropFilter: "blur(20px)" }}
          >

            <div className="description font-light mb-2 hover:m-[-2%] hover:mb-2 duration-200" >
              <img src={card.image} className="hover:w-[120%] hue-rotate-15 hover:hue-rotate-0" alt="" />
            </div>

            <div className="title font-light font-sans tracking-wider text-lg md:text-xl text-black text-center mb-0">
              <h1>{card.title}</h1>
            </div>
            
            <div className="file text-center font-light text-sm text-black">
              <p>${card.price}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  addToCart(card);
                  toggleAlert();
                }}
                className="border-fuchsia-900 border-[0.1px] text-black hover:border-fuchsia-800 hover:bg-black hover:text-white font-light px-4 py-1 text-sm mt-2 rounded-md"
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="md:mt-9 mt-0">
        <Category />
      </div>
      
      
      <div className="bg-white grid grid-cols-2 md:grid-cols-5 gap-0 md:mx-8 mx-2 md:mt-9 mt-5">
        {dummyCards.map((card) => (
          <div
            key={card.id}
            className=" md:pb-6 pb-4 md:m-2 m-2 flex flex-col justify-center "
            style={{ backdropFilter: "blur(20px)" }}
          >

            <div className="description font-light mb-2 hover:m-[-2%] hover:mb-2 duration-200" >
              <img src={card.image} className="hover:w-[120%] hue-rotate-15 hover:hue-rotate-0" alt="" />
            </div>

            <div className="title font-light font-sans tracking-wider text-lg md:text-xl text-black text-center mb-0">
              <h1>{card.title}</h1>
            </div>
            
            <div className="file text-center font-light text-sm text-black">
              <p>${card.price}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  addToCart(card);
                  toggleAlert();
                }}
                className="border-fuchsia-900 border-[0.1px] text-black hover:border-fuchsia-800 hover:bg-black hover:text-white font-light px-4 py-1 text-sm mt-2 rounded-md"
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-10 right-10">
        <button
          onClick={toggleCart}
          className="border-blue-500 z-[2000%] border-[2px] bg-black font-light px-4 py-2 text-xl mt-6 rounded-md text-white"
        >
          {cartOpen ? "Close Cart" : "Open Cart"}
        </button>
      </div>
    </Fragment>
  );
}
