import { useSelector } from 'react-redux';
import { ContactItem } from '../contactItem/ContactItem';
import { selectContacts, selectValueFilter } from '../../redux/selectors';

// // import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = () => {
  const getVisibleContacts = () => {
    const normalizedFilter = FilterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Получаем массив контактов из состояния Redux
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  // Получаем значение фильтра из состояния Redux
  const FilterValue = useSelector(selectValueFilter);
  console.log(FilterValue);
  // Вычисляем массив контактов которые необходимо отображать в интерфейсе
  const visibleContacts = getVisibleContacts(contacts, FilterValue);
  console.log(visibleContacts);

  return (
    <>
      <h2 className={css.listTitle}>Contacts</h2>
      <div className={css.listContainer}>
        <ul className={css.phoneList}>
          {visibleContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
