import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'

export default function Dishсard(props) {

//     const[products, setProducts] = useState([])

//   useEffect(() => {
//     axios
//         .get('http://localhost:1337/foods')
//         .then(res =>{
//           setProducts(res.data)
//           console.log(products);
//       })
//       .catch(err => {
//           console.log(err);
//       })
//   }, [products])



    const ctx = useContext(CartContext)

    let id = props.idCateg

    let UrlAx = `http://localhost:1337/Categories/${id}`

    const [category, setCategory] = useState([])
    const [foods, setFoods] = useState([])

    console.log(id)

    useEffect(() => {
        axios
        .get(UrlAx)
        .then(res =>{
            console.log(res);
            setCategory(res.data)
            setFoods(res.data.foods)
        })
        .catch(err => {
            console.log(err);
        })
    }, [UrlAx])
    console.log(category);


    
 

    return (
        <div className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start justify-center">
            
               {foods.length > 0 && foods.map(food => (
                    <div key={food.id} className="inline-block min-w-192 relative shadow-xl hover:shadow-2xl">
                        <div className=" mt-9 bg-basedark pl-7 pr-7 pb-2 pt-0 rounded-2xl flex flex-col justify-center items-center content-center overflow-visible">
                            <img className=" w-36   transform -translate-y-9" src={('http://localhost:1337')+food.image.url} alt="image1" />
                            <h4 className="transform -translate-y-4 text-sm font-medium w-36  text-center leading-5 h-10 "> 
                                {food.title}
                            </h4>
                            <h4 className="mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                                $ {food.price}
                            </h4>
                            <h4 className=" text-t-2-gray mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                                {food.sum} Bowls available
                            </h4>
                        </div>
                        <button 
                        className=' rounded-2xl opacity-0 absolute bg-gray-900 hover:opacity-90 top-0 bottom-0 left-0 right-0 m-auto w-full d-flex justify-center items-center ease duration-300 disabled:pointer-events-none disabled:opacity-50'
                        onClick={() => ctx.addToCart(food)}
                        disabled={ ctx.isInCart(food.id) }
                        >
                                <span className=' bg-navitem p-5 rounded-full'>ADD to cart</span>
                        </button>
                    </div>  
               ))}
                     
        </div>
    )
}

