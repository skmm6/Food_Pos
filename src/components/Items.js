import React from 'react'
import Home_corz from '../assets/img/home_corz.png';

export default function Items() {
    return (
        <div className="flex flex-col">
            <div className="flex gap-x-3 items-center">
                 <img className=" w-10 h-10" src={Home_corz} alt="Items" />
                 <div className="flex flex-col">
                    <h5 className=" text-sm font-medium leading-5">
                        Spicy seasoned sea...
                    </h5>
                    <div className=" text-xs leading-4 text-t-gray">
                         $ 2.29
                    </div>
                 </div>
                <input className=" text-center bg-in-gray border border-in-gray w-12 h-12 rounded-lg" placeholder="N" maxlength="1" />
            </div>
           
        </div>
    )
}
