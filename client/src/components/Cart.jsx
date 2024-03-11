// Cart.js
import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = ({ isOpen }) => {
    const { cartItems, removeFromCart } = useCart();

    const handleRemoveAll = () => {
        localStorage.removeItem('cartItems');
        removeFromCart();
    };

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    return isOpen ? (
        <div className="cart md:w-[20%] w-[80%] text-center bg-[#070F2B] text-white rounded-md py-8 md:fixed fixed md:top-[59%] top-[50%] md:right-[3%] right-[10%] z-50 ">
            <h2 className="text-3xl">Shopping Cart</h2>
            <ul className="font-light p-4">
                {cartItems.map((item) => (
                    <li key={item.id} className="text-lg mt-3 flex justify-between w-[80%] mx-auto">
                        <div>{item.title}: ${item.price}</div>
                        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 px-2 rounded-md text-md ml-3 text-left items-end">Remove</button>
                    </li>
                ))}
            </ul>

            {cartItems.length > 0 && (
                <button onClick={handleRemoveAll} className="bg-red-400 px-2 py-1 rounded-md mt-5">Remove All</button>
            )}

            <h3 className="text-xl font-bold mb-8 mt-4">Total: <span className="text-green-900">${totalPrice}</span></h3>
            <div>
                <div className="px-3 text-lg font-light">
                    <Link to="/upload" className="text-white bg-green-600 px-3 py-1 rounded-md">Order Now</Link>
                </div>
            </div>
        </div>
    ) : null;
};

export default Cart;
