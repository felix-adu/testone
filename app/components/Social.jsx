import React from 'react'
import Button from './Button'

export const Social = () => {
  return (
    <div className='flex p-20 gap-10 bg-white'>
    <div className='w-1/2 items-center'>
      <p className='text-sky-950 text-center text-7xl mb-5'>OUR SOCIAL</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation.
Contrary to popular belief, Lorem Ipsum is not simply random text. 

</p>
<div className='text-sky-950 justify-evenly text-7xl pt-20'>
<p className=''>
The standard chunk of Lorem Ipsum used since the 1500s...
</p>
</div>
<Button/>
    </div>
    <div id="socials" className=' w-1/2'>

    <div id="project" className=''>
    <img src={"/pp.jpg"} alt="img" className='rounded-lg hover:shadow-2xl border hover:duration-300'></img>
    </div>
    </div>
    </div>
  )
}
