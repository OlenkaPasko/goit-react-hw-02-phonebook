import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';



export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList onDelete={this.deleteContact} />
      </div>
    );
  }
}
