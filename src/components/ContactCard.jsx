import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

function ContactCard({ contact }) {
  const { eliminarContact } = useApp();

  return (
    <div className='bg-zinc-700 shadow-lg rounded-xl p-5'>
      <div className='mb-5'>
        <h4>{contact.username}</h4>
        <p className='mt-1 mb-2'>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div className='flex items-center gap-5'>
        <Link
          className='bg-emerald-600 hover:bg-emerald-700 transition-colors px-4 py-2 rounded'
          to={`/actualizar-contact/${contact.id}`}
        >
          Update
        </Link>
        <button
          type='button'
          onClick={() => eliminarContact(contact.id)}
          className='bg-rose-600 hover:bg-rose-700 cursor-pointer transition-colors px-4 py-2 rounded'
          to={`/actualizar-contact/${contact.id}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
