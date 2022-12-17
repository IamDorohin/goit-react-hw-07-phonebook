import { useSelector } from 'react-redux';
import { AppContainer, AppSection } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const contactsArray = useSelector(state => state.contacts.contacts);

  return (
    <AppContainer>
      <AppSection>
        <h1 style={{ marginTop: '0px' }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ marginTop: '0px' }}>Contacts</h2>
        <Filter />
        {contactsArray.length >= 1 ? (
          <ContactList />
        ) : (
          <p>Oooops, You have not added any contact yet</p>
        )}
      </AppSection>
    </AppContainer>
  );
}
