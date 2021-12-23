import React from 'react'
import { useAxios } from "use-axios-client";

export default function Dishсard() {


    const { data, error, loading } = useAxios({
      url: "http://localhost:1337/foods"
    });

    const host = 'http://localhost:1337'

    if (loading || !data) return "not fuck you!";
    if (error) return "Error!";

    return (
        <div  className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start justify-center">
            {data.map(data => (
                <div key={data.id} className=" inline-block min-w-192">
                    <div className=" mt-9 bg-basedark pl-7 pr-7 pb-2 pt-0 rounded-2xl flex flex-col justify-center items-center content-center overflow-visible">
                         <img className=" w-36   transform -translate-y-9" src={(host)+data.image.url} alt="image1" />
                    <h4 className="transform -translate-y-4 text-sm font-medium w-36  text-center leading-5 h-10">
                             {data.title}
                    </h4>
                    <h4 className="mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                             {data.price}
                    </h4>
                    <h4 className=" text-t-2-gray mt-2 transform -translate-y-4 text-sm font-normal w-36 text-center leading-5">
                            {data.sum} Bowls available
                    </h4>

                    </div>
                </div>
            ))}
        </div>

    )
}

