import Image from 'next/image';
import React from 'react'

export const Hero= () => {
  const yearsOfExp = new Date().getFullYear() - 2020;
  return (<>
    <div className='h-[80vh] w-full bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url(https://img.freepik.com/premium-photo/shoulder-view-software-developers-programming-desktop-computer-startup-office_35674-15889.jpg?w=900)`,backgroundRepeat:`no-repeat`, backgroundSize:`cover`}}>
            <div className='h-[80vh] w-full flex justify-center items-end bg-gradient-to-tr from-[#002B6B]/60 via-[#100110A]/90 to-[#070643]/90 bg-blend-multiply'>
              <div className="h-f[66vh] w-1/3 space-y-10 pt-15px pb-20">
              
                <h1 className='text-6xl text-white'> 
                🤗Hi, I am 
                <span className="italic text-yellow-500"> Felix</span> </h1>
                <p className='text-slate-300 text-lg font-normal leading-relaxed tracking-wider'>Felix is a seasoned UI/UX designer with over a decade of experience in the industry. With more than ten years of dedicated work in user interface and user experience design, Felix brings a wealth of knowledge and expertise to every project he tackles.

                </p>
                
                  
                </div>
                <div id="Home" className='h-[60vh] w-1/3 relative'>
                  <Image src={"/IMG_3189.png"} fill priority={true} className="object-contain opacity-80"  />
                </div>
              </div>
            </div>

    
    </>)
}
