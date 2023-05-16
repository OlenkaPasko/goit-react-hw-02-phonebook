import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {} from './ContactForm.styled';

import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onSubmitForm = event => {
    event.preventDefault();
    
  }

  render() {
    return (
      <form>
        <div>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};