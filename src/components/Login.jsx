// import React, {useState} from 'react'




// const Login = () => {
//     return (
//         <div className='h-screen flex  justify-center items-center flex-grow text-white'>
//             <div className='w-full max-w-md m-auto bg-basedark rounded-lg shadow-xl py-10 px-16'>
//                 <h1 className='text-2xl font-semibold  mt-4 mb-12 text-center'>
//                     Log in to your account 🔐
//                 </h1>

//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor='text'>Login</label>
//                         <input
//                             type='text'
//                             className={`w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//                             id='login'
//                             placeholder='Your Login'
//                             onChange={e => setUserName(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor='password'>Password</label>
//                         <input
//                             type='password'
//                             className={`w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//                             id='password'
//                             placeholder='Your Password'
//                             onChange={e => setPassword(e.target.value)}
//                         />
//                     </div>

//                     <div className='flex justify-center items-center mt-6'>
//                         <button
//                             className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }     
  

// export default Login