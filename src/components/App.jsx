import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { AppBar } from 'components/appBar/AppBar';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
// const HomePage = lazy(() => import('pages/homePage/HomePage'));
// const ContactsPage = lazy(() => import('pages/contactsPage/ContactsPage'));
// const LoginPage = lazy(() => import('pages/loginPage/LoginPage'));
// const RegisterPage = lazy(() => import('pages/registerPage/RegisterPage'));

import { HomePage } from 'pages/homePage/HomePage';
import { ContactsPage } from 'pages/contactsPage/ContactsPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { RegisterPage } from 'pages/registerPage/RegisterPage';
// import { PrivateRoute } from 'components/PrivateRoute';
// import { RestrictedRoute } from 'components/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {/* <Suspense fallback={null}> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};
