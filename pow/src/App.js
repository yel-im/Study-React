import React from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Login from './components/Modal/Login';
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <Header></Header>
          <Main></Main>
        </Route>
        <Route path="/Login" exact>
          <Login></Login>
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;