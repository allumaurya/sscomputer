import React from 'react'

export default function Admin() {
  const Adm=[
    {name:"My Course",backgroundColor:'red'},
     {name:"Student",backgroundColor:'blue'},
      {name:" Fee ",backgroundColor:'green'},
       {name:"Admission",backgroundColor:'pink'}
  ]
  return (
    <div className='grid grid-cols-12 '>
      <div className='bg-amber-200 grid col-span-2' >
        <section className='font-bold text-2xl'>Admin</section>
      </div>
      <div className='bg-blue-200 col-span-10 grid grid-cols-4 gap-3 p-4'>
        {Adm.map((a, index)=>
        <div key={index} className=' p-3'   style={{ backgroundColor: a.backgroundColor }}><section className='text-xl font-semibold text-white'>{a.name}</section></div>
        )}
        
        
        </div>  
    </div>
  )
}
