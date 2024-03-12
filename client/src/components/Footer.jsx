import React,{Fragment} from "react";

export default function Footer() {
    return(
        <Fragment >
            <hr className="mt-20"/>
            <div className="bg-white w-[100%] flex md:flex-row flex-col mt-10 justify-around md:text-left text-center cursor-default">
                
                
                
                <div className="flex flex-col">
                    <div className="md:font-thin text-base font-light">
                        GET TO KNOW US
                    </div>
                    <div className="font-thin text-sm mt-4 hover:font-light duration-300">
                        Contact Us
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        FAQ's
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        Blogs
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        Terms and Conditions
                    </div>
                </div>


                
                
                <div className="flex flex-col md:mt-0 mt-7">
                    <div className="md:font-thin text-base font-light">
                        RETURN / EXCHANGE ORDER
                    </div>
                    <div className="font-thin text-sm mt-4 hover:font-light duration-300">
                        Place Exchange
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        Place Return
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        Exchange / Return Policy
                    </div>
                    
                </div>




                <div className="flex flex-col md:mt-0 mt-7">
                    <div className="md:font-thin text-base font-light">
                        CUSTOMER CARE
                    </div>
                    <div className="font-thin text-sm mt-4 hover:font-light duration-300">
                        timmings : 10 AM - 7 PM (Mon - Sat)
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        Whatsapp : +91 7838433208
                    </div>
                    <div className="font-thin text-sm mt-2 hover:font-light duration-300">
                        Instagram : @anirudh.ppt
                    </div>
                    
                </div>


            </div>

            <div className="flex flex-col text-center mt-14 pb-14">
                <div className="font-extralight text-xs">
                    © 2024 Purple Bear
                </div>
                <div className="font-bold text-xs">
                    From India, to the world 🌏 
                </div>   
            </div>

            
        </Fragment>
    )
}