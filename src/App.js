import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shoppage/ShopPage';
import HeaderComp from './components/headercomp/HeaderComp';

function App() {
  return (
    <div >
      <HeaderComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
