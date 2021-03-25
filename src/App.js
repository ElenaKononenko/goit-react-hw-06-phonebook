import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/action';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uui } from 'uuid';
import './index.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const contactsLocal = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLocal) {
      this.setState({ contacts: contactsLocal });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log(2222);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps)(App);
