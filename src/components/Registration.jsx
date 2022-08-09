import React,{useState,useEffect} from 'react'
import axios from 'axios';

import{ Link} from "react-router-dom";

export default function Registration() {

  const [fname,setFname]=useState();
  const [lname,setLname]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [uname,setUname]=useState();

  const lgnbtn= async()=>{
    
    const regData={
      fname,
      lname,
      email,
      password,
      uname
    }

    const apidata= await axios.post("https://workit-apis.herokuapp.com/api/users/reg",regData)

      console.log(apidata.data);
  }

 

	return (
		
		<>
  {/* component */}
  <div className="bg-grey-600 min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-gray-500 px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-white  text-center">Sign up</h1>
         <input
          // type="password"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirmPassword"
          placeholder="Username"
          
         onChange={(e)=>setUname(e.target.value)}
        />
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
         onChange={(e)=>setFname(e.target.value)}

        />
          <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="Lastname"
          placeholder="Last Name"
         onChange={(e)=>setLname(e.target.value)}

        />
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
           
         onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          // type="password"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
           
         onChange={(e)=>setPassword(e.target.value)}
        />
       
        <button
          type="button"
          className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          onClick={(e)=>lgnbtn()}
        >
          Create Account
        </button>
        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-grey-dark mt-6">
        Already have an account?
        <Link to="/login"
          className="no-underline border-b border-blue text-blue"
        
        >
          Log in
        </Link>
        
      </div>
    </div>
  </div>
</>

			
		
	)
}