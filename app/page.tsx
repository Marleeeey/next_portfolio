import React from 'react'
import Hero from './components/main/Hero';
import Skills from './components/main/Skills';
import Encryptions from './components/sub/Encryptions';
import Projects from './components/main/Projects';
import Footer from './components/main/Footer';

const page = () => {
  return (
    <main className='w-full h-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Encryptions />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}

export default page;