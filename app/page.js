import { Nova_Script } from "next/font/google";
import React from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Social } from "./components/Social";

export default function Home() {return(
<>
<main className="bg-slate-50 h-fit w-screen relative flex flex-col justify-center items-center">
<Header />
<Hero />
<About />
<Experience />
<Project />
<Social />
<Contact />
</main>
</>

)}

