import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/Contacts/ContactList";
import { Container } from "./App.styled";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const contact = { id: uuidv4(), name, number };

    let isAdded = false;

    contacts.forEach((contact) => {
      if (contact.name === name) {
        isAdded = true;
        return;
      }
    });

    if (isAdded) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts((prev) => [...prev, contact]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  const filterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const filterBlur = (e) => {
    setFilter("");
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        filterBlur={filterBlur}
        filterChange={filterChange}
        filter={filter}
      />
      <ContactList list={filteredContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}
