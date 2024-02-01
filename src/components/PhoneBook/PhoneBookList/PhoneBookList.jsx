import css from './PhoneBookList.module.css';

const PhoneBookList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}{' '}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.buttonDel}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default PhoneBookList;
