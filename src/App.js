import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shoppage/ShopPage';
import HeaderComp from './components/headercomp/HeaderComp';
import SignInSignUp from './pages/signinsignup/SignInSignUp';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log("LOGGED ", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <HeaderComp currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
