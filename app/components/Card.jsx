import React from 'react'
import Button from './Button'

export default function Card() {
  return (
       <div className='rounded-3xl shadow-xl p-5 bg-white hover:bg-gray-500 hover:text-white'>
      <div 
      id="image" className="">
          
      <img src={"/gg.jpg"} alt="img" className='rounded-3xl'></img> 
      <p id='' className='py-7' > These are some of the CSS properties you can use to style video
      elements in your web pages. Keep in mind that video elements also
      have their own set of attributes and JavaScript methods that can be
      used to control their playback and behavior, in addition to CSS
      styling. is simply dummy text of the printing and typesetting
      industry..</p> 
          <Button/>
      </div>
    </div>
  )
}

