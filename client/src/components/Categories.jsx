import React, { Fragment } from "react";

export default function Footer(prop) {
    const Categories = [
        { title: "Ring" },
        { title: "Bangles" },
        { title: "Ear Ring" },
        { title: "Bracelets" },
        { title: "Neclace" },
        { title: "Bands" }
        
    ];

    return (
        <Fragment>
            <div>
                
                <div className="md:w-[50%] w-[100%] grid md:grid-cols-6 grid-cols-6 md:mt-7 mt-0 mx-auto">
                    {Categories.map((category, index) => (
                        <div key={index} className="mt-3 font-normal md:w-[90%] w-[87%] mx-auto hover:bg-black md:py-1 py-2 md:text-base text-xs border-[1px] border-black text-slate-700 hover:text-white rounded-full duration-200">
                            <div className=" text-center">{category.title}</div>
                        </div>
                    ))}
                </div>

                
            </div>
        </Fragment>
    );
}
