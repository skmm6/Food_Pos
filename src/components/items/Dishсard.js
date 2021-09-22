import React from 'react'
import slideImg1 from '../../assets/img/Image1.png';

export default function Dishсard() {
    return (
        <div className=" inline-block min-w-192">
            <div className=" mt-9 bg-basedark pl-7 pr-7 pb-2 pt-0 rounded-2xl flex flex-col justify-center items-center content-center overflow-visible">
                <img className=" w-36   transform -translate-y-9" src={slideImg1} alt="image1" />
                <h4 className="transform -translate-y-4 text-sm font-medium w-36  text-center leading-5">
                     Spicy seasoned seafood noodles
                </h4>
                <h4 className="mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                      $ 2.29
                </h4>
                <h4 className=" text-t-2-gray mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                     20 Bowls available
                </h4>

            </div>
        </div>
    )
}
