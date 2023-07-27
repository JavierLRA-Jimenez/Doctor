import React from 'react'
import {BsHospital} from 'react-icons/bs'
import {BiSolidDirectionRight} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi'

const Contact = () => {
  return (
    <section className='h-[85vh] md:grid md:grid-cols-4' id='body'>
  {/* Area de contacto */}
  <div className='md:col-span-2 p-4 flex flex-col justify-center bg-blue-800'>
    <h1 className='text-5xl md:text-6xl font-semibold m-2 p-2 text-center' id='contact'>Contacto</h1>
    <div className='text-4xl md:text-6xl pl-12'>
		  <div style={{ display: 'flex', alignItems: 'center' }} >
        <BsHospital style={{ marginRight: '20px' }} />
        <p className='font-normal text-xl pt-8'>
          <span className='font-semibold'>Consulta Médica: </span> 1° Piso Hospital Clínico UA
        </p>
      </div>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }} >
        <BiSolidDirectionRight style={{ marginRight: '20px' }} />
        <p className='font-normal text-xl pt-8'>
          <span className='font-semibold'>Dirección: </span> Av. Argentina #1962
        </p>
      </div>
			<br/>
			<div style={{ display: 'flex', alignItems: 'center' }}>
        <BiPhoneCall style={{ marginRight: '20px' }} />
        <p className='font-normal text-xl pt-8'>
          <span className='font-semibold'>Solicitud de Hora: </span> 552 719091 - 552 719092
        </p>
      </div>
    </div>
  </div>

  {/* Mapa o QR */}
  <div className='w-auto h-40 md:w-auto md:h-auto md:col-span-2 flex justify-center'>
  {/* Inserta el código de inserción del mapa de Google Maps aquí */}
  <iframe
    title="Mapa de Google"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    src="https://www.google.com/maps/embed/v1/place?q=AV%20Argentina%201961%2C%20Antofagasta&key=AIzaSyBfr6C0cCDxtx62NkUyNE_POa2rKiNoHho"
    allowFullScreen
  ></iframe>
</div>
</section>

  )
}

export default Contact