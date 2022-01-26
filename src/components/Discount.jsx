import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'


export default function Discount() {


    const [discounts, setDiscount] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/discounts')
        .then(res =>{
            console.log(res);
            setDiscount(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='p-10 overflow-auto notscrollbar'>
            <h1 className=' text-5xl text-primory text'>Discounts</h1>
            <div className='p-10 flex justify-center items-center flex-wrap gap-x-4 gap-y-4'>
            {discounts.length > 0 && discounts.map(discount => (
                 <div key={discount.id} className='p-10 bg-basedark flex flex-col rounded-2xl shadow-xl w-full'>
                    <h3 className=' text-fafafa text-5xl flex flex-col'>
                        {discount.titledisc}
                        <span className='text-primory text-3xl'>
                            Discount - {discount.prozentdisc}%
                        </span>
                    </h3>
                    <span className='text-fafafa text-xl pt-10'>{discount.basetextdisc}.</span>
                </div>
            ))}

            </div>
         
        </div>
    )
}
