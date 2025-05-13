import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-5 py-10'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
