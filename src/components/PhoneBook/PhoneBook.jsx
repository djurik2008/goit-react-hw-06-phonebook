import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import PhoneBookList from './PhoneBookList/PhoneBookList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';

const PhoneBook = () => {
  return (
    <div>
      <PhoneBookForm />
      <PhoneBookFilter />
      <PhoneBookList />
    </div>
  );
};

export default PhoneBook;
