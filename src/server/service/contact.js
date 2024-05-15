import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getAllContacts = async (id) => {
  const response = await axios.get(`${API_ENDPOINT}/contact/all?received=${id}`);
  return response;
};

export const getContact = async (id) => {
  const response = await axios.get(`${API_ENDPOINT}/contact`);
  return response;
};

export const Contact = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/contact`, data);
  return response;
};