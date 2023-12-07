import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const ContactUsPage = () => {
  return (
    <>
    <nav>
            <Navbar />
        </nav>
    <div className="bg-gray-100 min-h-screen text-center">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 underline">Get in Touch</h2>
          <p className="text-gray-600 max-sm:px-2 md:text-xl">
            We'd love to hear from you! Feel free to reach out to us using the following contact information.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 underline">Contact Details</h2>
          <div className="flex flex-wrap items-center justify-center space-x-4">
            <div>
              <p className="text-gray-600">
                <strong>Email:</strong><br />
                <a href="mailto:info@yourngo.org" className="text-blue-600">feedwithposhan.org@gmail.com</a>
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Phone:</strong><br />
                +91 9873776999
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 underline">Visit Us</h2>
          <p className="text-gray-600 md:text-xl">
          Poshan<br />
            Rohini, Delhi 110085, IN
          </p>
        </div>

        <div>
            <Link to="/" className="underline text-blue-500">Home</Link>
        </div>

        {/* <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-600">Your Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600">Your Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-gray-600">Your Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-800">
                Send Message
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
    </>
  );
};


export default ContactUsPage;
