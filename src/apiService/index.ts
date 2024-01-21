import axios from 'axios';
import { FormData } from '../components/Contact/ContactForm';

export const baseUrl = process.env.REACT_APP_BASE_URL;

export const createContactSubmission = async (contactSubmission: FormData) => {
  try {
    return await axios.post(`${baseUrl}/contact`, {
      contactSubmission,
    });
  } catch (error: any) {
    console.log(`🚨🚨🚨🚨🚨🚨 Error: ${error.message}`);
    return error;
  }
};
