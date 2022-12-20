import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  Contacts,
  ContactItem,
  ContactDetails,
  ContactButton,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contactsArray = useSelector(state => state.contacts.items);
  const filteredNames = useSelector(state => state.filter);
  let normalizedFilter = filteredNames.toLowerCase();
  const filteredContactsArray = contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const dispatch = useDispatch();

  return (
    <Contacts>
      {filteredContactsArray.map(({ id, name, phone }) => {
        return (
          <ContactItem key={id}>
            <ContactDetails> {name} </ContactDetails>
            <ContactDetails> {phone} </ContactDetails>
            <ContactButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactButton>
          </ContactItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
