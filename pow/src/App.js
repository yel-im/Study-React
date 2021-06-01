/* eslint-disable */
import React, { Component } from 'react';

import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Login from './components/Modal/Login';

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
      </BrowserRouter>
    </>
    )
  }
}

export default App;