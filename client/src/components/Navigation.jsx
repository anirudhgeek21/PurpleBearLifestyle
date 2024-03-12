import React from "react";
import { Link } from "react-router-dom";
import Logo from './PBlogo.jpg'

export default function Navigation() {
    return (
        <div className="px-3 bg-white text-[#1B0044] border-b-[0.01px] py-7 border-black fixed top-0 w-full z-10">
            <div className="flex justify-between w-[89%] mx-auto">
                <div className="font-bold md:text-4xl text-lg flex justify-between md:w-[22%] w-[53%]">
                   
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div className="my-auto">
                            <Link to="/" className="text-[#1B0044] my-auto">Purple Bear</Link>
                        </div>
                    
                </div>
                <div className="flex justify-around items-center ">
                    <div className="px-3 text-lg font-extralight hover:font-light ">
                        <Link to="/" className="text-[#1B0044] mt-auto">Home</Link>
                    </div>
                    
                    <div className="px-3 text-lg font-extralight hover:font-light ">
                        <Link to="/cart" className="text-[#1B0044] mt-auto">Cart</Link>
                    </div>

                    <div className="px-3 text-lg font-extralight hover:font-light ">
                        <Link to="/newitem" className="text-[#1B0044] mt-auto">Add</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
