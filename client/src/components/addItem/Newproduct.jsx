import React , { Fragment , useState } from "react";

export default function Newproduct() {

    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [itemid,setItemid] = useState("");
    const [category,setCategory] = useState("");


    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {

            const body = { image , name, description , price , itemid , category };
            const response = await fetch('https://purple-bear-lifestyle-backend-three.vercel.app/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
        
            window.location = '/';
            
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return(
        <Fragment>
            <div className="text-black pt-10 md:w-[40%] w-[90%] text-3xl font-thin mx-auto text-center ">Add A new product</div>
            <div className="flex flex-col items-center justify-center md:w-[50%] w-[100%] mx-auto">
                <form className="rounded-lg p-6 md:w-[100%] w-[90%]" onSubmit={onSubmitForm}
                >
                    <div className="mb-4">
                        
                        <input type="text" id="image" placeholder="Image Link *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        
                        <input type="text" id="name" placeholder="Name *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        
                        <textarea id="description" placeholder="Description" className="w-full border rounded-md p-2 focus:outline-none border-blue-500 bg-black text-[#CDF5FD] font-extralight text-center" rows="1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                         
                        
                        >

                        </textarea>
                    </div>

                    <div className="mb-4">
                        
                        <input type="text" id="price" placeholder="Price *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>


                    <div className="mb-4">
                        
                        <input type="text" id="itemid" placeholder="Itemid *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                            value={itemid}
                            onChange={(e) => setItemid(e.target.value)}
                           
                        
                        />
                    </div>

                                <div className=" flex md:w-[100%] w-full mx-auto">
                                    <select name="category" id="category" className="w-[100%] text-center text-md font-extralight py-2 bg-black text-sky-100 border rounded-md border-blue-500"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
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