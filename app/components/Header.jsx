"use client"
// import {usePathName} from 'next/navigation'
import React,{ useState } from 'react'
import Link from 'next/link'
export default function Header() {
  const [active, setActive] = useState('Home');
  return (
    <>
      <header className="w-3/5 h-fit py-3 px-8 bg-white/70 fixed top-8 rounded-full shadow-xl z-50">
    <nav>
      <ul className="flex justify-around">
        {navs.map((navItem, idx)=> (
          <Link href={`${navItem.url}`} key={idx}>
             <li  
         onClick={()=>setActive(navItem.title)} 
          className={`${active=== navItem.title ? 'bg-white text-black' : ''} py-2 px-6 rounded-full hover:bg-white hover:shadow-xl hover:duration-300 cursor-pointer`}> {navItem.title} </li> 
          </Link>
        
        ))}
      </ul>
    </nav>

  </header></>
  )
}

const navs =
[
  {url: '/#home',title: 'Home'},
  {url: '/#about',title: 'About'},
  {url: '/#experience',title: 'Experience'},
  {url: '/#project',title: 'Project'},
  {url: '/#socials',title: 'Socials'},
  {url: '/#contact',title: 'Contact'},
]