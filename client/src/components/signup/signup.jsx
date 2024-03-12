import React ,{Fragment} from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return(
        <Fragment>
            <div className="md:w-[70%] mx-auto md:pt-16 pt-24">
                <div className="text-center text-3xl font-thin">
                    Join Us
                </div>


                <form action="">
                    <div className="text-center">
                        <div className="md:w-[50%] w-[60%] mx-auto mt-5">
                            <input type="text" placeholder="What should we call you" className="w-[100%] text-center mx-auto border-[0.01px] px-2 py-1 border-black"/>
                        </div>
                        <div className="md:w-[50%] w-[60%] mx-auto mt-3">
                            <input type="text" placeholder="email" className="w-[100%] text-center mx-auto border-[0.01px] px-2 py-1 border-black"/>
                        </div>
                        <div className="md:w-[50%] w-[60%] mx-auto mt-3">
                            <input type="text" placeholder="password" className="w-[100%] text-center mx-auto border-[0.01px] px-2 py-1 border-black"/>
                        </div>

                        <div className="button md:w-[7%] w-[14%] rounded-md mx-auto mt-6 py-1 border-[0.05px] border-black hover:bg-black hover:text-white duration-200 font-thin hover:font-normal">
                            <button className="hover:text-white">Join</button>
                        </div>


                        <div className="text-base mt-6 font-thin">
                            Already a customer ? <Link to="/login" className="text-blue-700 mt-auto">Login</Link>
                        </div>
                    </div>
                    
                </form>
            </div>
        </Fragment>
    )
}