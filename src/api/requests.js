import axios from './axiosInstance.js';

export const getContacts = () => axios.get('/api/contacts');

export const getContact = (id) => axios.get(`/api/contacts/${id}`);

export const createContact = (contact) => axios.post('/api/contacts', contact);

export const updateContact = (id, contact) =>
  axios.put(`/api/contacts/${id}`, contact);

export const deleteContact = (id) => axios.delete(`/api/contacts/${id}`);

export const registrarUser = (user) => axios.post('/api/auth/register', user);

export const loguearUser = (user) => axios.post('/api/auth/login', user);
