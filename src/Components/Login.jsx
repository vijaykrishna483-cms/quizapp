import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate()
    const LoginClick=()=>{
        navigate('/instru')
    }
  return (
    <div className='flex flex-row '>
      <div className="flex flex-col justify-center w-[30vw] overflow-hidden h-[100vh]">
      <div className=" text-4xl font-black text-white text-center flex flex-col justify-center items-center w-[30vw] h-[100vh] bg-[#35a88f]">
        TENSORS JUNIOR OLYMPIAD <br /> 2025
      </div>
      </div>
      <div className="w-[70vw] h-[100vh] flex gap-[2vh] flex-col justify-center items-center">
      {/* <h1 className='text-3xl font-bold text-[#35a88f]'>TENSORS OLYMPIAD 2025</h1> */}

      <h1 className='text-3xl font-bold text-[#35a88f]'>Login Here..!</h1>
      <label className='text-xl'>Name: <br/>
       <input placeholder='Enter Your Name'  className='w-[25vw] border-1 px-[10px] border-[#67666697] rounded-lg h-[50px]'/>
       </label>
       <label className='text-xl'>Email: <br/>
       <input placeholder='Enter Your Name'  className='w-[25vw] border-1 px-[10px] border-[#67666697] rounded-lg h-[50px]'/>
       </label>
       <label className='text-xl'>Password: <br/>
       <input placeholder='Enter Your Name'  className='w-[25vw] border-1 px-[10px] border-[#67666697] rounded-lg h-[50px]'/>
       </label>
       <button onClick={LoginClick} className='w-[150px] text-xl h-[45px] bg-[#35a88f] rounded-xl text-white'>Login</button>
    </div>

    </div>
  )
}

export default Login
