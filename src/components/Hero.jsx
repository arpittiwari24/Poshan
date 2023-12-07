import React from 'react'

const Hero = () => {

  return (
  <div className="hero min-h-screen " style={{backgroundImage: 'url(/khana-lete-bachhe.jpg)'}} >
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
      <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <a href="" target='_blank'><button  className="btn btn-primary text-black">Donate</button></a>
    </div>
  </div>
</div>
  )
}

export default Hero

