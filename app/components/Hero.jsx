import Image from 'next/image';
import React from 'react'

export const Hero= () => {
  const yearsOfExp = new Date().getFullYear() - 2020;
  return (<>
    <div className='h-[80vh] w-full bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url(https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-125.jpg?w=900&t=st=1695828253~exp=1695828853~hmac=0dccc9399d52b6e81d2c5b4fb386a04f0da2b14c67b97f8953f37f8d95daccb4)`,backgroundRepeat:`no-repeat`, backgroundSize:`cover`}}>
            <div className='h-[80vh] w-full flex justify-center items-end bg-gradient-to-tr from-[#002B6B]/60 via-[#100110A]/90 to-[#070643]/90 bg-blend-multiply'>
              <div className="h-f[66vh]">
              
                <h1 className='text-6xl text-white pl-40 justify-center'> 
                🤗Hi, I am 
                <span className="italic text-yellow-500"> Felix</span> </h1>
                <p className='text-slate-300 text-lg font-normal leading-relaxed items-center tracking-wider pb-40 p-20 pl-40'>Felix is a seasoned UI/UX designer with over a decade of experience in the industry. With more than ten years of dedicated work in user interface and user experience design, Felix brings a wealth of knowledge and expertise to every project he tackles.

                </p>
                
                  
                </div>
                <div id="Home" className='h-full w-full pr-40 relative z-10'>
                  <Image src={"/front-view.webp"} fill priority={true} className="object-contain opacity-95" alt='img'  />
                </div>
              </div>
            </div>

    
    </>)
}
