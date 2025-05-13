import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function UserForm({ buttonText }) {
  const { user, handleUserChange, registrarUsuario, loguearUsuario } = useApp();
  const navigate = useNavigate();

  const buttonColor = buttonText == 'Registrarse' ? 'rose' : 'emerald';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonText === 'Registrarse') {
      registrarUsuario(user);
    } else {
      loguearUsuario(user);
    }
    navigate('/');
  };

  return (
    <div className='max-w-sm mx-auto'>
      <form
        onSubmit={handleSubmit}
        className='bg-zinc-700 p-5 shadow-lg rounded-xl flex flex-col gap-5'
      >
        <div>
          <label htmlFor='email' className='block mb-1.5'>
            Your email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={user.email}
            onChange={(e) => handleUserChange(e)}
            className='bg-zinc-50 w-full rounded p-2 text-zinc-950'
          />
        </div>

        <div>
          <label htmlFor='password' className='block mb-1.5'>
            Your password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            value={user.password}
            onChange={(e) => handleUserChange(e)}
            className='bg-zinc-50 w-full rounded p-2 text-zinc-950'
          />
        </div>

        {buttonText === 'Registrarse' && (
          <div>
            <label htmlFor='name' className='block mb-1.5'>
              Your name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={user.name}
              onChange={(e) => handleUserChange(e)}
              className='bg-zinc-50 w-full rounded p-2 text-zinc-950'
            />
          </div>
        )}

        <button
          type='submit'
          className={`px-8 py-2 rounded bg-${buttonColor}-600 hover:bg-${buttonColor}-700 transition-colors cursor-pointer w-fit mx-auto`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
