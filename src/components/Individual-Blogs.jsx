// SingleBlog.js
import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Navbar from './Navbar';
import { BarLoader } from 'react-spinners';

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false)
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    setLoading(true)
    const fetchBlog = async () => {
      try {
    
          const response = await axios.get(`https://poshan-backend.onrender.com/blogs/`+ path, {
            withCredentials: true,
          });
          console.log(response)
          setBlog(response.data);
          setLoading(false)
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(true)
      }
    };
  
    fetchBlog();
  }, []);


    const text = parse(`${blog.content}`)


  return (
   <>
   <Navbar />
    <div className="container mx-auto mt-8 max-w-3xl rounded-lg overflow-hidden">
  {loading ? (
 <div className='flex justify-center items-center py-20'>
  <BarLoader color="#36d7b7" />
 </div>
) : (
  <>
  <img src={blog.photo} alt="Blog Cover" className="w-full h-72  object-center max-sm:px-4" />
   <div className="p-6 py-8">
     <h1 className="md:text-4xl text-2xl font-bold mb-4 text-black">{blog.title}</h1>
     <p className="text-gray-700 mb-4">By <span className='underline'>{blog.author}</span></p>
     <p className="text-gray-800 leading-relaxed md:text-xl text-lg shadow-md">{text}</p>
   </div>
  </>
)}
</div>
   </>
  );
};

export default SingleBlog;
