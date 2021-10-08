import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/Contacts/ContactList";
import { Container } from "./App.styled";

import store from "./redux/store";

import * as actions from "./redux/phonebook/phonebook-actions";
import { connect } from "react-redux";

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

function App({ onAddContact }) {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </Container>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.contacts.items,
//     filter: state.contacts.filter,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (contact) => dispatch(actions.addContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(App);
// export default App;
