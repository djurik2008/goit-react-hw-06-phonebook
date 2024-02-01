import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import PhoneBookList from './PhoneBookList/PhoneBookList';
import css from './PhoneBook.module.css';

const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('my-contacts'));
    return data?.length
      ? data
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

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

  const addContact = data => {
    if (isDublicate(data)) {
      return alert(
        `Contact with name ${data.name} and number ${data.number} already in list`
      );
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(4),
        ...data,
      };

      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };

  const changeFitler = ({ target }) => setFilter(target.value);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();

      return (
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter)
      );
    });

    return filteredContacts;
  };

  const inems = getFilteredContacts();

  return (
    <div>
      <PhoneBookForm onSubmit={addContact} />
      <div>
        <input
          onChange={changeFitler}
          name="filter"
          placeholder="Find contact"
          className={css.filterInput}
        />
        <PhoneBookList items={inems} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default PhoneBook;
