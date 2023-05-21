import React from 'react';
import PropTypes from 'prop-types';
//import {} from './ContactForm.styled';
//import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmitForm }) => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    onSubmitForm(value);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Name:
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number:
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}
            ?\)?[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
            title="Phone number must be digits and can contain spaces, dashes,
            parentheses and can start with +"
            required
          ></Field>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired
};
