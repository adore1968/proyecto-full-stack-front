import { FaSpinner } from 'react-icons/fa';

function Loader() {
  return (
    <div className='flex justify-center'>
      <FaSpinner className='animate-spin text-4xl' />
    </div>
  );
}

export default Loader;
