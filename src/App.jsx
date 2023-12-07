import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Toaster } from "react-hot-toast"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import axios from "axios"
import ContactUsPage from "./components/Contact"

const App = () => {
  const { setUser, setIsAuthenticated} = useContext(Context);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/me", {
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
    </Routes>
    <Toaster />
    </BrowserRouter>
  )
}

export default App
