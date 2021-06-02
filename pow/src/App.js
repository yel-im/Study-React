/* eslint-disable */
import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import NewPw from './components/Modal/NewPw';
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
        <Route path="/pw" exact>
          <NewPw></NewPw>
        </Route>
      </BrowserRouter>
    </>
    )
  }
}

export default App;