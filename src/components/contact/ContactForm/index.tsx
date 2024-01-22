import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import * as apiService from '../../../apiService';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import SnackbarWrapper from '../../shared/SnackbarWrapper';
import styles from './styles.module.scss';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const placeholderData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [displaySnack, setDisplaySnack] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(placeholderData);
  const { width } = useWindowDimensions();

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await apiService.createContactSubmission(formData);

      if (response.status === 200) {
        setFormData(placeholderData);
        setDisplaySnack(true);
      }
    } catch (error: any) {
      console.log(`🚨🚨🚨🚨🚨🚨 Error: ${error.message}`);
    }
  };

  const textFieldStyles = {
    input: { color: 'white', width: width / 1.5, maxWidth: '400px' },
    textArea: { color: 'white', width: width / 1.5, maxWidth: '400px' },

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
    <>
      <form className={styles.container} onSubmit={submit}>
        <div className={styles.input}>
          <TextField
            label='Name'
            variant='outlined'
            name='name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            sx={textFieldStyles}
          />
        </div>

        <div className={styles.input}>
          <TextField
            label='Phone (optional)'
            name='phone'
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
            multiline
            rows={5}
          />
        </div>

        <div>
          <Button
            variant='contained'
            type='submit'
            color='success'
            sx={{ width: '100%' }}
          >
            Get in Touch
          </Button>
        </div>
      </form>

      <SnackbarWrapper
        message="Success! 🎉 I'll be in touch shortly."
        open={displaySnack}
        close={() => setDisplaySnack(!displaySnack)}
      />
    </>
  );
};

export default ContactForm;
