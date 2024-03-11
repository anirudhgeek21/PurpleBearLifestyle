import React , { Fragment } from "react";

export default function Newproduct() {
    
    return(
        <Fragment>
            <div className="text-black pt-10 md:w-[40%] w-[90%] text-3xl font-thin mx-auto text-center ">Add A new product</div>
            <div className="flex flex-col items-center justify-center md:w-[50%] w-[100%] mx-auto">
                <form className="rounded-lg p-6 md:w-[100%] w-[90%]"
                >
                    <div className="mb-4">
                        
                        <input type="text" id="image" placeholder="Image Link *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                        />
                    </div>

                    <div className="mb-4">
                        
                        <input type="text" id="title" placeholder="Name *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                        />
                    </div>
                    <div className="mb-2">
                        
                        <textarea id="description" placeholder="Description" className="w-full border rounded-md p-2 focus:outline-none border-blue-500 bg-black text-[#CDF5FD] font-extralight text-center" rows="1"
                        >

                        </textarea>
                    </div>

                    <div className="mb-4">
                        
                        <input type="text" id="price" placeholder="Price *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                        />
                    </div>

                                <div className=" flex md:w-[100%] w-full mx-auto">
                                    <select name="category" id="category" className="w-[100%] text-center text-md font-extralight py-2 bg-black text-sky-100 border rounded-md border-blue-500"
                                    
                                    >
                                        <option value="general">Select One Category</option>
                                        
                                        <option value="NSUT">NSUT</option>
                                        <option value="DTU">DTU</option>
                                        <option value="IIITD">IIITD</option>
                                        <option value="IITD">IITD</option>
                                        <option value="DU">DU</option>
                                        <option value="MSIT">MSIT</option>
                                        <option value="IPU">IPU</option>
                                        <option value="IGDTU">IGDTU</option>
                                        
                                    </select>
                                </div>
                    
                   
                    <div className="text-center mt-7">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add Product</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}