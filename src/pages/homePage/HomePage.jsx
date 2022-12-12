// import { Navigation } from 'components/navigation/Navigation';

import css from './HomePage.module.css';

// const styles = {
// container: {
//   minHeight: 'calc(100vh - 50px)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to your Phonebook!</h1>
    </div>
  );
};
