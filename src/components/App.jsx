import PhoneBook from './PhoneBook/PhoneBook';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <PhoneBook />
    </div>
  );
};
