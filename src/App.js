import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import Accueil from "./Components/Accueil";
import Group from "./Components/Group";
import {Container} from 'reactstrap';



class App extends Component {
  render() {
      return (
        <BrowserRouter>
        <Container>
                  <Route path="/" exact component={Accueil}/>
                  <Route path="/group/:slug" component={Group}/>                 
        </Container>
        </BrowserRouter>
      )
  }
}

export default App;
