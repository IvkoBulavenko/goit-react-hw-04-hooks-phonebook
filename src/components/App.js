import { useState, useEffect } from 'react';
import Section from './Section/Section.js';
import Form from './Form/Form.js';
import Contacts from './Contacts/Contacts.js';
import Filter from './Filter/Filter.js';
import { nanoid } from 'nanoid';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { Container, Contactscss } from '../Styles/Container.styled';
import usedlocalStorage from '../localstorage/localStorage';

function App() {
  const [contacts, setContacts] = usedlocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([...contacts]);

  useEffect(() => {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, [setContacts]);

  useEffect(() => {
    setFilteredContacts(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const changeFilter = filter.toLowerCase();
    setFilteredContacts([
      ...contacts.filter((contact) =>
        contact.name.toLowerCase().includes(changeFilter)
      ),
    ]);
  }, [contacts, filter]);

  function addContact(data) {
    const contact = {
      id: nanoid(),
      ...data,
    };
    contacts.some((contact) => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  }

  function changefilter(event) {
    setFilter(event.target.value);
  }

  function deleteContact(id) {
    setContacts([...contacts.filter((contact) => contact.id !== id)]);
  }

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={addContact} />
      </Section>
      <section>
        <Contactscss>Contacts</Contactscss>
        <Filter value={changefilter} changesfilter={filter} />
        <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
      </section>
    </Container>
  );
}

export default App;
