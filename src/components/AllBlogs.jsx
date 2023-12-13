import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const AllBlogs = () => {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get('https://poshan-backend.onrender.com/blogs/all', {
            withCredentials: true,
        }); 
        setBlogs(response.data.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(true)
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <div className='text-center pb-6 max-sm:pt-5'>
      <h1 className='text-5xl font-semibold'>All Blogs</h1>
    </div>
   {loading ? (
    <div >
      <ClipLoader color="#243ba3" /> 
    </div>
   ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
    {blogs.map((blog) => (
     <Link key={blog._id} to={`/blogs/${blog._id}`} >
     <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
       <img
         src={blog.photo}
         alt="Blog Cover"
         className="w-full h-48 object-cover object-center"
       />
       <div className="p-4">
         <h2 className="text-black text-xl font-bold mb-2">{blog.title}</h2>
         <p className="text-gray-600 mb-2">By {blog.author}</p>
       </div>
     </div>
   </Link>
    ))}
       <Outlet />
  </div>
   )}
  </>
  )
}

export default AllBlogs