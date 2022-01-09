import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Dishсard() {
    
    const [category, setCategory] = useState([])
    const [foods, setFoods] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/Categories/1')
        .then(res =>{
            console.log(res);
            setCategory(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    if (category.length > 0) {
        setFoods([foods] = category.foods)
        console.log(foods);
    }
    
    



    
 

    return (
        <div className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start justify-center">
               {foods.length > 0 && foods.map(food => (
                    <div key={food.id} className="inline-block min-w-192">
                    <div className=" mt-9 bg-basedark pl-7 pr-7 pb-2 pt-0 rounded-2xl flex flex-col justify-center items-center content-center overflow-visible">
                        <img className=" w-36   transform -translate-y-9" src={('http://localhost:1337')+food.image.url} alt="image1" />
                        <h4 className="transform -translate-y-4 text-sm font-medium w-36  text-center leading-5 h-10"> 
                            {food.title}
                        </h4>
                        <h4 className="mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                         $ {food.price}
                        </h4>
                        <h4 className=" text-t-2-gray mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                       {food.sum} Bowls available
                        </h4>
                    </div>
                    </div>  
               ))}
                     
        </div>
    )
}

