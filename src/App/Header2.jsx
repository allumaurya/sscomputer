import React from 'react'
import img from '/src/assets/chatl.jpeg';

export default function Updiv2() {
  return (
    <div>
        <section className='grid grid-cols-'>
     <div className=' col-span- flex p-4'>
      <img className='h-[150px]' src={img} alt="" />
      <div>
     <section className='lg:text-6xl  sm:text-xl font-bold font-serif   text-red-600 '>SS Computer Instiuite of Technolgy</section>
     
     <h1 className='text-2xl font-semi-bold'>
      The Best Quality of Software Proframing Computer Education
     </h1>
     <p className='hidden lg:hidden' >Registered Under the Comanies Act 1958,Ministry of Corporate</p>
     <p>| UDYAM -UP-30-003756 Affairs Govt of India |</p>
     <p>AN ISO 9001:2015 Certified</p>
     </div>
     </div>
     {/* <div className=' col-span-3'></div> */}
        </section>
    </div>
  )
}
