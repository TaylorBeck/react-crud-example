import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

const App = () => (
  <div className='app'>
    <Header />
    <Route exact path='/' component={HomePage} />
  </div>
);

export default App;
