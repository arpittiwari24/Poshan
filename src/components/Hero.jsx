import React from 'react'
import { motion } from 'framer-motion';
import haste_hue from "/haste-hue.png"
import khana_lete from "/khana-lete.png"
import parle_g from "/parle-g.png"
import thali from "/thali.png"

const Hero = () => {

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (


<div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="text-center py-32"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className=" md:text-6xl text-4xl font-bold text-blue-600 mb-4">
          Nourishing Dreams, One Meal at a Time
        </h1>
        <p className="md:text-2xl md:py-1 text-lg text-gray-700 mb-8 max-sm:px-1">
          In the heart of Delhi, we are on a mission to eradicate hunger and nurture hope among the little ones who need it the most.
        </p>
        <a href="https://cosmofeed.com/vp/6571d7f72b881d001d9e6ab8" target='_blank'><button className="animate-bounce bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-800">
          Make a Difference Today!
        </button></a>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="w-full mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Feature 1 */}
        <div className="mb-8 px-2 md:p-10 flex flex-col items-center md:flex-row-reverse">
          <div className="mb-4 md:mb-0 md:w-1/2 md:pr-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img
                src={haste_hue}
                alt="Nurturing the Future"
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:px-2">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">Nurturing the Future</h2>
            <p className="text-gray-600 mb-4 md:text-xl">
              At Poshan, we understand the power of a single meal. With your support, we provide daily nutritious meals to underprivileged children in Delhi. From rice and lentils to fresh fruits, every contribution helps us create a foundation for a healthier, happier future.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="mb-8 px-2 md:p-10 flex flex-col items-center md:flex-row">
          <div className="mb-4 md:mb-0 md:w-1/2 md:pr-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img
                src={khana_lete}
                alt="Community Impact"
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:px-2">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">Community Impact</h2>
            <p className="text-gray-600 mb-4 md:text-xl">
              We believe in the strength of unity. Join our community of compassionate donors, volunteers, and supporters working hand in hand to alleviate hunger. Your involvement not only feeds hungry stomachs but also fosters a sense of belonging and shared responsibility.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="mb-8 px-2 md:p-10 flex flex-col items-center md:flex-row-reverse">
          <div className="mb-4 md:mb-0 md:w-1/2 md:pr-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img
                src={parle_g}
                alt="Transparent Giving"
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:px-2">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">Transparent Giving</h2>
            <p className="text-gray-600 mb-4 md:text-xl">
              We take pride in transparency. Your donations directly fund our feeding programs, and we ensure every penny is accounted for. Our commitment to openness means you can witness the impact of your generosity firsthand, making your contribution a personal investment in the lives of these children.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="mb-8 px-2 md:p-10 flex flex-col items-center md:flex-row">
          <div className="mb-4 md:mb-0 md:w-1/2 md:pr-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img
                src={thali}
                alt="Stories of Transformation"
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:px-2">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">Stories of Transformation</h2>
            <p className="text-gray-600 mb-4 md:text-xl">
              Explore the heartwarming stories of children whose lives have been transformed through your support. From dreams sparked by a full belly to the confidence that comes with regular meals, see the tangible difference your donations make in the lives of these precious souls.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mb-12">
       <a href="https://cosmofeed.com/vp/6571d7f72b881d001d9e6ab8" target='_blank'>
       <button className="animate-bounce bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-800">
            Join Our Mission, Spark Change!
          </button>
        </a>   
        </div>
      </motion.div>

       {/* Footer Section */}
       <motion.div
        className="text-center py-4 text-gray-600"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        &copy; {new Date().getFullYear()} Poshan. All rights reserved.
      </motion.div>
    </div>


  )
}

export default Hero

