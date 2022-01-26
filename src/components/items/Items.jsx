import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';



export default function Items(props) {
    const {item} = props
     const ctx = useContext(CartContext)
     
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-3 items-center">
                 <img className=" w-10 h-10" src={('http://localhost:1337')+item.image.url} alt="Items" />
                 <div className="flex flex-grow items-center justify-between">
                    <h5 className=" text-sm font-medium leading-5">
                         {item.title}
                    </h5>
                    <div className='flex items-center items-center'>
                        <button 
                        className='bg-rose-500 text-white py-3 px-5 disabled:pointer-events-none disabled:opacity-50'
                        onClick={() => {if(item.quantity > 1){ctx.decreaseQuanrtity(item.id)}}}

                        >
                              -
                        </button>
                         {item.quantity}
                        <button 
                        className='bg-rose-500 text-white py-3 px-5 disabled:pointer-events-none disabled:opacity-50'
                        onClick={() => ctx.increaseQuantity(item.id)}

                        >
                              +
                        </button>
                    </div>
                    
                 </div>
                
                <div className=" text-right  ml-4 flex items-center justify-center">
                    {item.price} <span>$</span>
                </div>
            </div>
           <div className="flex gap-x-3 items-center ">
             <button className="flex w-full items-center justify-center border rounded-lg border-navitem text-navitem hover:border-red hover:text-red focus:border-red focus:text-red disabled:pointer-events-none disabled:opacity-50"
             onClick={() => ctx.removeFromCart(item.id)}
             ><i className="icon-trash p-4"></i></button>
           </div>
        </div>
    )
}

