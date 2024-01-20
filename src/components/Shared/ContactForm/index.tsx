import { Button, TextField } from '@mui/material';
import styles from './styles.module.scss';
import { useState } from 'react';
import * as apiService from '../../../apiService';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const templateFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(templateFormData);
  const { width, height } = useWindowDimensions();

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await apiService.createContactSubmission(formData);

      if (response.status === 200) {
        setFormData(templateFormData);
      }
    } catch (error: any) {
      console.log(`🚨🚨🚨🚨🚨🚨 Error: ${error.message}`);
    }
  };

  const textFieldStyles = {
    input: { color: 'white', width: width / 1.5, maxWidth: '400px' },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },

    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
  };

  return (
    <form className={styles.container} onSubmit={submit}>
      <div className={styles.input}>
        <TextField
          label='First Name'
          variant='outlined'
          name='firstName'
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          required
          sx={textFieldStyles}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label='Last Name'
          variant='outlined'
          name='lastName'
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          required
          sx={textFieldStyles}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label='Email'
          variant='outlined'
          name='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          sx={textFieldStyles}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label='Phone (optional)'
          name='phone'
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          variant='outlined'
          sx={textFieldStyles}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label='Message'
          name='message'
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          variant='outlined'
          required
          sx={textFieldStyles}
        />
      </div>

      <div>
        <Button variant='contained' type='submit' color='success'>
          Get in Touch
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
