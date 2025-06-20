import React from 'react'
import imgpro from '/src/assets/pro.avif'

export default function AboutUS() {
    const Button=[
    {num:5.5,str:'Year Work Experience'},
     {num:35,str:'Project Challenge'},
      {num:850,str:'Positive Reviews'},
       {num:"100K",str:'Trusted Student'}
    ]
  return (
    <div className='mt-5 bg-blue-50   mb-4' >
         <h1 className='text-4xl font-semibold mb-4'> About <span className='text-red-500'>US</span></h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
            <div className=''>
                <section className='text-6xl font-bold'>Our Dream is Global Learing Transformation</section>
                <section className='mt-5 p-5'>We conduct full/short term courses for the students in these far flung, rural & district areas of the country. 
            It is only to make Information Technology as a basic knowledge to people of Rural & Urban area. Working in different fields of Programme
             & Commercial training conducted by the State Government & Central Government to approach every class of the society. IIJS Successfully running 
             from 2015, conducting various commercial training and Skill Development programs.</section>
          <h1 className='text-xl font-serif text-red-600'> - Satish maurya</h1>  </div>
            <div className='grid grid-rows-2  '>
            <div className='  justify-items-center'>
                <img className='rounded-xl h-[250px] ' src={imgpro} alt="" />
            </div>
            <div className=' rounded-3xl gap-4 p-7 grid grid-cols-2'>
                {Button.map((But, index)=>(
                <div className='bg-white shadow-2xl border-1 border-blue-100 rounded-2xl text-2xl text-left ps-5'>{But.num} 
                 <h className="text-sm"><br/>{But.str}</h>
                </div>
  ))}
            </div>
            </div>
        </div>
    </div>
  )
}
