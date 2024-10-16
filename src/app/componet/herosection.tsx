import React from 'react'
import Image from 'next/image'

function Herosection() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>  
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Hello! I am Aqsa
          </h1>
          <p className='text-white text-lg lg:text-xl'>
            My name is AQSA. I am a student of GIAIC. I am learning web development, AI, and the metaverse. I am a front-end developer.
          </p>
        </div>
        <div className='col-span-5'>
          <Image 
            src="/public/WhatsApp Image 2024-10-02 at 14.46.02_6bee285d.jpg"
            alt="picture"
            width={800} 
            height={800} 
          />
        </div>
      </div>
    </section>
  )
}

export default Herosection
