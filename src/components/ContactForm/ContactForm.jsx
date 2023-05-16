import React from 'react';
//import PropTypes from 'prop-types';
//import {} from './ContactForm.styled';
//import { nanoid } from 'nanoid';
import { Formik } from 'formik';
 

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  return (
    <Formik initialValues={initialValues}>
      <form>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </Formik>
  );
}