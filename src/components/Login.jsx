import React, {useState} from 'react'
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:1337/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

    return (
        <div className='h-screen flex  justify-center items-center flex-grow text-white'>
            <div className='w-full max-w-md m-auto bg-basedark rounded-lg shadow-xl py-10 px-16'>
                <h1 className='text-2xl font-semibold  mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default Login