import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6584695a4d1ee97c6bcfb104.mockapi.io';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const newContact = createAsyncThunk(
  'contacts/addContact',
  async payload => {
    const response = await axios.post('/contacts', payload);

    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async payload => {
    await axios.delete(`/contacts/${payload}`);
    return payload;
  }
);
