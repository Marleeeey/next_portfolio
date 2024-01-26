import React from 'react'
import Hero from './components/main/Hero';

const page = () => {
  return (
    <main className='w-full h-full'>
      <div className='flex flex-col gap-20 h-[850px]'>
        <Hero />
      </div>
    </main>
  )
}

export default page;