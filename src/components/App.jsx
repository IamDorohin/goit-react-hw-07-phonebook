import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AppContainer, AppSection } from 'components/App.styled';
import { fetchContacts } from 'redux/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const contactsArray = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
