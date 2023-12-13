import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from 'react-spinners';

// https://poshan-backend.onrender.com

// <ClipLoader color="#36d7b7" />


const Login = () => {
    const { isAuthenticated, setIsAuthenticated } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = () => {
    return(
        <ClipLoader color="#36d7b7" />
    )
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const {data}= await axios.post(
        "https://poshan-backend.onrender.com/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsAuthenticated(true);
    } catch (error) {
        toast.error("Oops!! Try Again", {
            position: toast.POSITION.TOP_CENTER,
          });
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />

  return (
    <div>
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
            <a href="/">
                <h3 className="text-4xl font-bold text-black">
                    Poshan
                </h3>
            </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form onSubmit={submitHandler}>
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Email
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" text-white block px-2 w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-white block px-2 w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="flex items-center mt-4 py-2">
                    <button type='submit' className="btn btn-info w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform  rounded-md " onClick={loading()}>
                        Login
                    </button>
                </div>
            </form>
            <div className="mt-4 text-grey-600 text-center">
                Don't have an account?{" "}
                <span>
                    <Link to="/signup" className="text-blue-500 underline">
                        Signup
                    </Link>
                </span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login