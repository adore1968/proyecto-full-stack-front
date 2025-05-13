import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useEffect } from 'react';

function ContactForm() {
  const params = useParams();
  const { id } = params;
  const {
    contact,
    handleContactChange,
    crearContact,
    loadContact,
    actualizarContact,
  } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actualizarContact(id, contact);
    } else {
      crearContact(contact);
    }
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      loadContact(id);
    }
  }, []);

  const buttonColor = id ? 'rose' : 'emerald';

  return (
    <div className='max-w-sm mx-auto'>
      <form
        onSubmit={handleSubmit}
        className='bg-zinc-700 p-5 shadow-lg rounded-xl flex flex-col gap-5'
      >
        <div>
          <label htmlFor='username' className='block mb-1.5'>
            Your username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Username'
            value={contact.username}
            onChange={(e) => handleContactChange(e)}
            className='bg-zinc-50 w-full rounded p-2 text-zinc-950'
          />
        </div>

        <div>
          <label htmlFor='phone' className='block mb-1.5'>
            Your phone
          </label>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Phone'
            value={contact.phone}
            onChange={(e) => handleContactChange(e)}
            className='bg-zinc-50 w-full rounded p-2 text-zinc-950'
          />
        </div>

        <div>
          <label htmlFor='email' className='block mb-1.5'>
            Your email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={contact.email}
            onChange={(e) => handleContactChange(e)}
            className='bg-zinc-50 w-full rounded p-2 text-zinc-950'
          />
        </div>

        <button
          type='submit'
          className={`px-8 py-2 rounded bg-${buttonColor}-600 hover:bg-${buttonColor}-700 transition-colors cursor-pointer w-fit mx-auto`}
        >
          {id ? 'Actualizar' : 'Crear'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
