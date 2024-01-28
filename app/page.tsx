import React from 'react'
import Hero from './components/main/Hero';
import Skills from './components/main/Skills';

const page = () => {
  return (
    <main className='w-full h-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
      </div>
    </main>
  )
}

export default page;