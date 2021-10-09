import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/Contacts/ContactList";
import { Container } from "./App.styled";

import * as actions from "./redux/phonebook/phonebook-actions";
import { connect } from "react-redux";

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

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (contact) => dispatch(actions.addContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(App);
