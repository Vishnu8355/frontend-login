import React,{useState} from 'react'
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export default function Login() {

	const navigate = useNavigate();

    const[email,setEmail]=useState();
    const[password,setPassword]=useState();


    const lgnbtn=async()=>{
    	const formData={
    		email,
    		password
    	} 
    	
    	const loginApi=await axios.post("https://workit-apis.herokuapp.com/api/users/login",formData)
    	 
    	if(loginApi.status===200){ 
    		navigate("/home")

    	}else{
    		console.log(loginApi.data)
    	}



    }
	return (
		<div>
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
    <h3 className="text-2xl font-bold text-center">Login to your account</h3>
    <form action="">
      <div className="mt-4">
        <div>
          <label className="block" htmlFor="email">
            Email
            <label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
          </label>
        </div>
        <div className="mt-4">
          <label className="block">
            Password
            <label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </label>
          </label>
        </div>
        <div className="flex items-baseline justify-between">
          <button 
          type="button"
           onClick={(e)=>lgnbtn()}
          className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
            Login
          </button>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </form>
  </div>
</div>

			
		</div>
	)
}