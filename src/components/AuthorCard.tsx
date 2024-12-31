import React from 'react'
import Image from 'next/image'

export default function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">

    <Image 
    className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
    src="/images/Aamna.jpg"
    alt="Author Image"
    width={64}
    height={64}
    />
    
<div>
  <h3 className="text-xl font-bold">Aamna Rana</h3>
  <p className='text-slate-500 '>IT Engineer| UI/UX Designer| Web developer </p>
</div>
      </div>




<div>
      <p className='mt-4 text-black leading-relaxed'>Aamna Rana is an experienced IT Engineer with a passion for web development and sharing knowledge through articles.</p>
      </div>
      <div className='flex mt-4 space-x-3'>
      <a href="https://www.linkedin.com/in/aamna-rana-b0760121a" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300' >
      LinkedIn
     </a>

     <a href="https://github.com/aamna847" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300' >
      Github
     </a>
   
      </div>
    </div>
  )
}
//leading-relaxed is used to set the line height of the text to 1.625
//rounded-md is used to set the border-radius to 0.375rem
//The transition-duration CSS property sets the length of time a transition animation should take to complete.