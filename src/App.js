import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import AppRoutes from './routes';
import history from './services/history';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <AppRoutes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
