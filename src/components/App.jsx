import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const contactsLength = contacts.length;
  console.log(contacts);
  console.log(contactsLength);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contactsLength > 1 && <Filter />}
      {isLoading && !error && (
        <span className={css.load}>Request in progress...</span>
      )}
      {contactsLength > 0 && <ContactList />}
    </div>
  );
};
