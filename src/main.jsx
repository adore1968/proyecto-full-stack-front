import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AppProvider from './context/AppProvider.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CrearContact from './pages/CrearContact.jsx';
import Error from './pages/Error.jsx';
import ActualizarContact from './pages/ActualizarContact.jsx';
import RegistrarUser from './pages/RegistrarUser.jsx';
import LoguearUser from './pages/LoguearUser.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/crear-contact',
        element: <CrearContact />,
      },
      {
        path: '/actualizar-contact/:id',
        element: <ActualizarContact />,
      },
      {
        path: '/registrar-user',
        element: <RegistrarUser />,
      },
      {
        path: '/loguear-user',
        element: <LoguearUser />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
