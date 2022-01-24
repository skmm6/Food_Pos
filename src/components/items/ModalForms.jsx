import React from 'react';

function ModalForms(props) {
  return (
         <div className='flex justify-center items-center flex-grow text-white'>
                 <div className='w-full max-w-md m-auto bg-basedark rounded-lg shadow-xl py-10 px-16'>
                     <h1 className='text-2xl font-semibold  mt-4 mb-12 text-center'>
                     Your contacts
                     </h1>
    
                     <form>
                         <div className='flex flex-col items-start'>
                             <label htmlFor='text'>Name </label>
                             <input
                                 type='text'
                                 className={`w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                 id='Name'
                                 placeholder='Your Name'
                               
                             />
                         </div>
                         <div className='flex flex-col items-start'>
                             <label htmlFor='tel'>Telephone </label>
                             <input
                                 type='tel'
                                 className={`w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                 id='tel'
                                 placeholder='Your telephone '
                                
                             />
                         </div>
    
                         <div className='flex justify-center items-center mt-6'>
                             <button
                                 className={`bg-green py-2 px-4 text-sm text-white  bg-navitem rounded border border-green focus:outline-none focus:border-green-dark`}
                                
                             >
                                 To order
                             </button>
                         </div>
                    </form>
                </div>
            </div>
  );
}

export default ModalForms;
