import React from 'react'
import Button from './Button'

export const Project = () => {
  return (
    <div id="project"className='flex px-20 py-20'>
    <div className=''>
    <div id="image" className="mb-7">
      <img src={"/hh.png"} alt="img" className='rounded-lg hover:shadow-orange-600 hover:duration-300'></img>
      <p className='px-7 pt-7 w-4.5/5'>These are some of the CSS properties you can use to style video elements in your web pages. Keep in mind that video elements also have their own set of attributes and JavaScript methods that can be used to control their playback and behavior, in addition to CSS styling. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
      </div>

      <Button/>

      </div>
        <div className='items-center flex-row pl-10'>
          <div className=''>
        <div className='bg-gray-400 text-white rounded-3xl hover:text-slate-950 hover:shadow-xl hover:bg-white hover:duration-300 cursor-pointer mb-5 '>
            <img src={"/tt.jpg"} alt="img" className='rounded-3xl p-5 '></img>
            <p className='py-5 px-5'>These are some of the CSS properties you can use to style video elements in your web pages. Keep in mind that video elements also have their own set of attributes and JavaScript methods that can be used to control their playback and behavior</p>
            </div>
            </div>
          
            <div className='bg-gray-400 text-white rounded-3xl hover:text-slate-950 hover:shadow-xl hover:bg-white hover:duration-300 cursor-pointer'>
            <img src={"/tt.jpg"} alt="img" className='rounded-3xl p-5 '></img>
            <p className='py-5 px-5'>These are some of the CSS properties you can use to style video elements in your web pages. Keep in mind that video elements also have their own set of attributes and JavaScript methods that can be used to control their playback and behavior</p>
            </div>
          </div>
       
          <div className='flex-row px-5'>
          <div className='bg-gray-400 text-white rounded-3xl hover:text-slate-950 hover:shadow-xl hover:bg-white hover:duration-300 cursor-pointer mb-5'>
            <img src={"/tt.jpg"} alt="img" className='rounded-3xl p-5 '></img>
            <p className='py-5 px-5'>These are some of the CSS properties you can use to style video elements in your web pages. Keep in mind that video elements also have their own set of attributes and JavaScript methods that can be used to control their playback and behavior</p>
            </div>

            <div className='bg-gray-400 text-white rounded-3xl hover:text-slate-950 hover:shadow-xl hover:bg-white hover:duration-300 cursor-pointer mb-10'>
            <img src={"/tt.jpg"} alt="img" className='rounded-3xl p-5 '></img>
            <p className='py-5 px-5'>These are some of the CSS properties you can use to style video elements in your web pages. Keep in mind that video elements also have their own set of attributes and JavaScript methods that can be used to control their playback and behavior</p>
            </div>
            </div>
            </div>
  )
}