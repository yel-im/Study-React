/* eslint-disable */
import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import AccountDel from './components/Modal/AccountDel';
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return(
      <>
      <BrowserRouter>
        <Route path="/" exact>
          <Header></Header>
          <Main></Main>
        </Route>
        <Route path="/del" exact>
          <AccountDel></AccountDel>
        </Route>
      </BrowserRouter>
    </>
    )
  }
}

export default App;