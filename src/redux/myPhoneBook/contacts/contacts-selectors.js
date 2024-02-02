export const getFilteredContacts = store => {
  const { contacts, filter } = store;
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
