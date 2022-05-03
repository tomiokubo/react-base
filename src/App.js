import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import AppRoutes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <AppRoutes />
      <GlobalStyle />
      <button>Enviar</button>
    </Router>
  );
}

export default App;
