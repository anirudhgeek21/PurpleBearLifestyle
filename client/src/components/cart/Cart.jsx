import React , { Fragment } from "react";
import ImageBig from './pic.jpg';


export default function Cart( ) {
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
    return(
        <Fragment>
            <div className="font-thin text-3xl text-center pt-10">Your Cart</div>

            <div className="bg-white grid grid-cols-2 md:grid-cols-5 gap-0 md:mx-8 mx-2 md:mt-7 mt-5">
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
                
            </div>
            ))}
            </div>

            <div className="md:w-[30%] w-[90%] mx-auto border-[0.5px] border-black rounded-md mt-3 mb-20 px-5 py-7">
                <div className="text-xl font-thin text-center">Summary</div>
                <div className="flex flex-col w-[95%] mx-auto mt-5">
                <div className="flex justify-between">
                        <div className="font-semibold">Items</div>
                        <div className="font-semibold">Price</div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <div>Title1</div>
                        <div>200</div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <div>Title1</div>
                        <div>200</div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <div>Title1</div>
                        <div>200</div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <div>Title1</div>
                        <div>200</div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="font-black">Total</div>
                        <div className="font-black">10000</div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}