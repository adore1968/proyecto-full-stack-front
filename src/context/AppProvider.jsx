import { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  loguearUser,
  registrarUser,
  updateContact,
} from '../api/requests';

const AppProvider = ({ children }) => {
  const userInitialState = { email: '', password: '', name: '' };
  const [user, setUser] = useState(userInitialState);

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const contactInitialState = { username: '', phone: '', email: '' };
  const [contact, setContact] = useState(contactInitialState);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registrarUsuario = async (user) => {
    try {
      const { status, data } = await registrarUser(user);
      if (status === 201) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loguearUsuario = async (user) => {
    try {
      const { status, data } = await loguearUser(user);
      if (status === 200) {
        localStorage.setItem('token', JSON.stringify(data.token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadContacts = async () => {
    try {
      const { status, data } = await getContacts();
      if (status === 200) {
        setContacts(data);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleContactChange = async (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const crearContact = async (contact) => {
    try {
      const { status, data } = await createContact(contact);
      if (status === 201) {
        setContacts([...contacts, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadContact = async (id) => {
    try {
      const { status, data } = await getContact(id);
      if (status === 200) {
        setContact(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarContact = async (id, contact) => {
    try {
      const { status, data } = await updateContact(id, contact);
      if (status === 200) {
        const newContacts = contacts.map((value) => {
          if (value.id === id) {
            return data;
          }
          return value;
        });
        setContacts(newContacts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarContact = async (id) => {
    try {
      const { status } = await deleteContact(id);
      if (status === 204) {
        const newContacts = contacts.filter((value) => value.id !== id);
        setContacts(newContacts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        handleUserChange,
        registrarUsuario,
        loguearUsuario,
        isLoading,
        contacts,
        contact,
        handleContactChange,
        crearContact,
        loadContact,
        actualizarContact,
        eliminarContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
