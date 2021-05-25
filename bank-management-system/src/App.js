import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import AccountUpdate from './components/AccountUpdate/AccountUpdate';
import ApplyLoan from "./components/ApplyLoan/ApplyLoan";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import User from './components/User/User'
// import User from "./components/User/User";

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/url');
    const data = await response.json();
    this.setState(
      {
        user: data
      }
    )
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <LoginPage user={this.state.user}/>
            </Route>
            <Route path="/register" component={RegistrationPage} />
            <Route path="/update">
              <AccountUpdate user={this.state.user}/>
            </Route>
            <Route path="/applyLoan" component={ApplyLoan} />
            <Route path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
