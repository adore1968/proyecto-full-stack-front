import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-zinc-800 flex justify-between px-10 py-5 items-center'>
      <Link to='/' className='hover:text-white transition-colors'>
        Pre entrega del proyecto
      </Link>
      <nav>
        <ul className='flex gap-5 items-center'>
          <li className='hover:text-white transition-colors'>
            <Link to='/'>Contactos</Link>
          </li>
          <li className='hover:text-white transition-colors'>
            <Link to='/crear-contact'>Crear contacto</Link>
          </li>

          <li className='hover:text-white transition-colors'>
            <Link to='/registrar-user'>Registrarse</Link>
          </li>
          <li className='hover:text-white transition-colors'>
            <Link to='/loguear-user'>Loguearse</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
