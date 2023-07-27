import React, { useState } from 'react';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Función para cerrar el menú cuando se selecciona una sección
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='flex items-center justify-between xl:justify-start w-full bg-[#1c229f] p-2 h-[10vh]'>
      <div className='m-4 p-1'>
        <h2 className='font-bold text-lg'>Medicina General</h2>
      </div>

      <nav
        className={`fixed w-[60%] md:w-[40%] xl:w-full h-full ${
          showMenu ? 'left-0 bg-[#1c229f]' : '-left-full'
        } top-0 xl:static flex-1 flex text-white justify-center items-center font-semibold gap-10 flex-col xl:flex-row transition-all duration-700 z-50`}
      >
        {/* Agregar onClick y texto descriptivo a cada enlace para cerrar el menú */}
        <a href='#hero' className='' onClick={closeMenu}>
          Inicio
        </a>
        <a href='#services' className='' onClick={closeMenu}>
          Servicios
        </a>
        <a href='#contact' className='' onClick={closeMenu}>
          Contacto
        </a>
      </nav>
      {/* Añadir atributo aria-label al botón */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className='text-white xl:hidden text-2xl'
        aria-label='Menú'
      >
        {showMenu ? <MdOutlineCancel /> : <RiMenuUnfoldFill />}
      </button>
    </header>
  );
};

export default Header;
