import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cred, setcred] = useState({email: "", password:""})


  const handleChange = (e) => {
    const { name, value } = e.target;
    setcred({ ...cred, [name]: value });
  };

  const handleSignin = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3000/api/v1/signIn", cred).then((res) => {
      if(res.data.message === "Password is Incorrect"){
        toast.error("Password is Incorrect")
      }
      else if(res.data.message === "Please SignUP first"){
        toast.info("Please Sign Up first")
      }
      sessionStorage.setItem("id", res.data._id)
      dispatch(authActions.login())
      navigate("/todo")
    })
    
  
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-130px)] bg-gradient-to-b from-purple-200 to-gray-200">
      <ToastContainer/>
      <div className="flex flex-col md:flex-row p-8 md:space-x-8 min-w-[100vw]">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center gap-5">
          <h2 className="text-7xl text-orange-500 font-bold">Sign In</h2>
          <p className="mt-4  text-green-600 text-3xl">Sign In to use iTodo</p>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mx-10">
          <h1 className="text-3xl font-bold mb-4 text-center">Sign In</h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                value={cred.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                value={cred.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" onClick={handleSignin}
              >
                Sign In
              </button>
              <p className="mt-4">
                Not registered yet?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
