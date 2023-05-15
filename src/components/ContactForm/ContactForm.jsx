import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    render() {
        return (
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        );
    }
}