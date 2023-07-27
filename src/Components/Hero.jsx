import React from 'react'
import drfuentes from '../assets/DR.FUENTES.png'

const Hero = () => {
  return (
    <section className='h-[85vh] md:grid md:grid-cols-4' id='body'>
      {/*Informacion Welcome */}
      <div className='md:col-span-2 p-4 flex items-center justify-center md:p-8 bg-blue-800'>
        <div>
          <h1 className='text-5xl md:text-8xl font-bold m-2 p-2' id='hero'>Dr. Rodrigo Fuentes</h1>
          <br/>
          <p className=' text-sm text-justify p-2 m-2'>Bienvenidos a mi consulta médica, donde ofrezco atención personalizada y de calidad a cada uno de mis pacientes. Mi enfoque está centrado en el bienestar integral de quienes me consultan, diseñando planes de tratamiento efectivos y adaptados a sus necesidades únicas. Mi compromiso es guiarlos hacia una vida más saludable y prevenir enfermedades, trabajando juntos en cada etapa de su atención médica.</p>
          <br/>
          <div className='flex justify-center p-2  text-gray-300 font-semibold md:w-[40rem]'>
            <p className='pr-20'>Convenios</p>
            <p className='pr-20'>Fonasa</p>
            <p>Particular</p>
          </div>
        </div>
        
      </div>


      {/*Imagen Welcome */}
      <div className='w-auto h-40 md:w-auto md:h-auto md:col-span-2 flex justify-center bg-blue-800'>
        <img src={drfuentes} className='object-cover flex w-[60rem] bg-cover'/>
      </div>
    </section>
    
  )
}

export default Hero