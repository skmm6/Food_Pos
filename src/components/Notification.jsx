import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

export default function Notification() {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/newsbases')
        .then(res =>{
            console.log(res);
            setNews(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
            <div className='p-10 overflow-auto notscrollbar'>
            <h1 className=' text-5xl text-primory text'>News</h1>
                   <div className='p-10 flex justify-center items-center flex-wrap gap-x-4 gap-y-4'>
                   {news.length > 0 && news.map(newe => (
                            <div key={newe.id} className='p-10 bg-basedark flex flex-col rounded-2xl shadow-xl w-full'>
                                        <h3 className=' text-fafafa text-5xl flex flex-col'>
                                            {newe.newstitle}
                                            <img className='m-10 max-w-3xl shadow-2xl '  src={('http://localhost:1337')+newe.newsimg.url} alt="123" />
                                        </h3>
                                        <span className='text-fafafa text-xl pt-10'>{newe.newsbase}</span>
                            </div>
                     ))}
                     </div>
         
              </div>
     
    )
}
