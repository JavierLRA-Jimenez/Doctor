import React from 'react' 

import {FaHandHoldingMedical} from 'react-icons/fa'
import {FaSuitcaseMedical} from 'react-icons/fa6'
import {FaUserDoctor} from 'react-icons/fa6'
const Services = () => {
  return (
    <section className='min-h-[30vh] flex flex-col md:flex-row m-7 items-center  md:justify-between pt-[2rem] md:pt-[9rem]' id='services'>
  <div className='w-[20rem] h-[12rem] flex flex-col items-center justify-center'>
    <FaHandHoldingMedical className='w-[9rem] h-[12rem] text-blue-500' />
    <h2 className='text-black font-semibold text-center text-md md:text-xl'>Atención integral para adulto mayor</h2>
  </div>
  <br/>
  <div className='w-[20rem] h-[12rem] flex flex-col items-center justify-center'>
    <FaSuitcaseMedical className='w-[9rem] h-[12rem] text-blue-500' />
    <h2 className='text-black font-semibold text-center text-md md:text-xl'>Medico Cirujano, manejo de enfermedades crónicas</h2>
  </div>
  <br/>
  <div className='w-[20rem] h-[12rem] flex flex-col items-center justify-center'>
    <FaUserDoctor className='w-[9rem] h-[12rem] text-blue-500' />
    <h2 className='text-black font-semibold text-center text-md md:text-xl'>Pacientes desde 2 años en adelante</h2>
  </div>
</section>
  )
}

export default Services    