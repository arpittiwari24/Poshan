import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import axios from "axios"
import ContactUsPage from "./components/Contact"
import SingleBlog from "./components/Individual-Blogs"
import { ToastContainer } from "react-toastify"

const App = () => {
  const { setUser, setIsAuthenticated} = useContext(Context);

  useEffect(() => {
    axios
      .get("https://poshan-backend.onrender.com/users/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.name);
        console.log(res.data.name)
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/blogs/:blogId" element={<SingleBlog />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
