import React from 'react'
import {BsHospital} from 'react-icons/bs'
import {BiSolidDirectionRight} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi'

// ... (previous imports)

const Contact = () => {
  return (
    <section className='h-[85vh] md:grid md:grid-cols-4' id='body'>
      {/* Area de contacto */}
      <div className='md:col-span-2 p-4 flex flex-col md:pt-20 bg-blue-800'>
        <h1 className='text-5xl md:text-7xl font-semibold m-2 p-2 text-center' id='contact'>Contacto</h1>
				<br></br>
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
			<div className='w-full h-40 md:w-auto md:h-auto md:col-span-2 flex justify-center items-center'>
        <iframe
          title="Mapa de Google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4368342690636!2d-70.3961198!3d-23.660331299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd50f7a454aa5%3A0x616f9deeab0399cf!2sAv.%20Argentina%201962%2C%20Antofagasta!5e0!3m2!1ses-419!2scl!4v1690427541457!5m2!1ses-419!2scl"
          style={{ width: '100%', height: '100%', border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
