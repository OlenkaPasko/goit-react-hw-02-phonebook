import React from 'react';
import PropTypes from 'prop-types';
//import {} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
 

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ newContact }) => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    newContact({ id: nanoid(), ...value });
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};