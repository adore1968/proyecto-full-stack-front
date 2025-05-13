import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='2xl pt-5 mb-5'>Dang!</h1>
      <Link
        to='/'
        className='px-4 py-2 bg-emerald-600 hover:bg-emerald-700 transition-colors rounded'
      >
        Go back
      </Link>
    </div>
  );
}

export default Error;
