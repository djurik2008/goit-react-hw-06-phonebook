import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import PhoneBookList from './PhoneBookList/PhoneBookList';
import css from './PhoneBook.module.css';
import {
  addContact,
  removeContact,
} from '../../redux/myPhoneBook/contacts/contactsSlice';
import { setFilter } from '../../redux/myPhoneBook/filter/filterslice';
import { getFilteredContacts } from '../../redux/myPhoneBook/contacts/contacts-selectors';

const PhoneBook = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const firstRender = useRef(true);

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const currentNumber = item.number;
      return (
        normalizedCurrentName === normalizedName || currentNumber === number
      );
    });

    return Boolean(dublicate);
  };

  const add_Contact = data => {
    if (isDublicate(data)) {
      return alert(
        `Contact with name ${data.name} and number ${data.number} already in list`
      );
    }
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  const changeFitler = ({ target }) =>
    dispatch(setFilter(target.value.toLowerCase()));

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <div>
      <PhoneBookForm onSubmit={add_Contact} />
      <div>
        <input
          onChange={changeFitler}
          name="filter"
          placeholder="Find contact"
          className={css.filterInput}
        />
        <PhoneBookList items={contacts} deleteContact={onDeleteContact} />
      </div>
    </div>
  );
};

export default PhoneBook;
