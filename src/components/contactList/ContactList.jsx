import { useSelector } from 'react-redux';
import { ContactItem } from 'components/contactItem/ContactItem';
import {
  selectContacts,
  selectValueFilter,
  selectVisibleContacts,
} from '../../redux/contacts/contactsSelectors';
// import { createSelector } from '@reduxjs/toolkit';

import css from './ContactList.module.css';

export const ContactList = () => {
  // const getVisibleContacts = () => {
  //   const normalizedFilter = FilterValue;
  //   return contacts.filter(contact => contact.name.includes(normalizedFilter));
  // };

  // ===========Функція в компонеті ========================================
  // const selectVisibleContacts = createSelector(
  //   [selectContacts, selectValueFilter],
  //   (contacts, filterValue) => {
  //     return contacts
  //       .filter(contact => {
  //         return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  //       })
  //       .sort((f, s) => f.name.localeCompare(s.name));
  //   }
  // );
  // =====================================================================

  // Получаем массив контактов из состояния Redux
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  // Получаем значение фильтра из состояния Redux======================= не отримуємо ?
  const FilterValue = useSelector(selectValueFilter);
  console.log(FilterValue);
  // ================ код який не працює ===== не працює   фільтр ==============================
  // Вычисляем массив контактов которые необходимо отображать в интерфейсе
  // const visibleContacts = getVisibleContacts();
  const visibleContacts = useSelector(selectVisibleContacts);
  // const visibleContacts = contacts;
  console.log(visibleContacts);
  // / ================ код який не працює ========================================
  return (
    <>
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
