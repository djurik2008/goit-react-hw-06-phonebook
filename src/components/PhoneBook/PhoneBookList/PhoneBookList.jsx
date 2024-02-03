import css from './PhoneBookList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/myPhoneBook/contacts/contactsSlice';
import { getFilteredContacts } from '../../../redux/myPhoneBook/contacts/contacts-selectors';

const PhoneBookList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => dispatch(removeContact(id))}
        className={css.buttonDel}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default PhoneBookList;
