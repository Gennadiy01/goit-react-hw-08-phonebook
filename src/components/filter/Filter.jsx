import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectValueFilter } from '../../redux/contacts/contactsSelectors';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(selectValueFilter);
  console.log(filter);

  // const onChange = e => {
  //   dispatch(setFilter(e.target.value));
  // };

  const onChange = e => {
    const filterValue = e.target.value;
    console.log(filterValue);
    dispatch(setFilter(filterValue));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        className={css.input}
        onChange={onChange}
      />
    </label>
  );
};
