import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../main';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [isButtonDisabled, setButtonDisabled] = useState(false);


const submitHandler = async (e) => {
  e.preventDefault();
  setButtonDisabled(true);

  try {
    const {data}= await axios.post(
      "https://poshan-backend.onrender.com/users/signup",
      {
        name,
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
    setButtonDisabled(false);
    setIsAuthenticated(true);
  } catch (error) {
    toast.error("Oops!! Try Again", {
        position: toast.POSITION.TOP_CENTER,
      });
    setIsAuthenticated(false);
    setButtonDisabled(false);
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
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Name
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-white px-2 block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
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
                            className=" text-white px-2 block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                            className="text-white px-2 block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="flex items-center mt-4 py-2">
                    <button 
                            disabled={isButtonDisabled}  
                            type='submit' 
                            className="btn btn-info w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform  rounded-md ">
                        Register
                    </button>
                </div>
            </form>
            <div className="mt-4 text-grey-600 text-center">
                Already have an account?{" "}
                <span>
                    <Link to="/login" className="text-blue-500 underline">
                        Log in
                    </Link>
                </span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Signup