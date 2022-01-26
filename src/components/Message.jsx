import React from 'react'

export default function Message() {
    return (
        <div className='p-10 w-full'>
        <h1 className=' text-5xl text-primory text pb-10'>Feedback</h1>
        <div className='text-white text-xl pb-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis tempore saepe eligendi, recusandae molestias magni ad ipsa repudiandae quidem officia porro, est necessitatibus ullam fuga impedit adipisci labore ab!
        </div>
        <div className='flex justify-center items-center '>
        <form className="w-full max-w-lg p-10 bg-basedark rounded-2xl shadow-2xl">
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        First Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
        <p className=" text-gray-50 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Last Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        E-mail
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
        <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Message
        </label>
        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
        <p className="text-gray-200 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
        </div>
        </div>
        <div className="md:flex md:items-center">
        <div className="md:w-1/3">
        <button className="shadow w-full bg-primory hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
        </button>
        </div>
        <div className="md:w-2/3"></div>
        </div>
        </form>
        </div>
        
        </div>
    )
}
