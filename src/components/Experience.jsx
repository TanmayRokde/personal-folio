import React from 'react'

function ExperienceRow({ singleExperience }) {
  return (
    <div className='flex justify-between items-center border-b border-b-white/50 py-2 '>
      <p className=' w-[60%] font-[500] text-[25px] sm:text-[32px] leading-10 tracking-[0%]  '> {singleExperience?.role} </p>
      <div className='flex flex-col items-end  w-max'>
        <p className='sm:text-[24px] font-[600] leading-8 tracking-[0%] '> {singleExperience.company} </p>
        <p className='poppins-text-date   ' > {singleExperience?.startDate} - {singleExperience?.endDate} </p>
      </div>
    </div>
  )
}

export default ExperienceRow