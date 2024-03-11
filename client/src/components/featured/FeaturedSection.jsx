import React from "react";
import ImageBig from './pic.jpg';

export default function FeaturedSection() {
  return (
    <div
      className="w-screen md:h-[88vh] h-[30vh]"
      style={{
        backgroundImage: `url(${ImageBig})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '50% 100%'
      }}
    >
      <div className="flex flex-col-reverse md:flex-row mt-auto">
        
          <div className="absolute bottom-10 md:left-[35%] flex flex-col text-center mx-auto rounded-xl  font-semibold max-md:max-w-full bg-neutral-80 text-zinc-800 px-7 w-[30%]">
            <div className="hidden md:block mt-2 text-3xl text-center space-around tracking-tight leading-12 max-md:max-w-full max-md:text-1xl max-md:leading-10 text-black mix-blend-screen bg-white font-noemal py-2">
              Bangle 
            </div>
            
          </div>
        </div>
        
      
      
    </div>
  );
}
