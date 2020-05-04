import React from 'react';
import './App.css';
import Header from './Components/Navbar/Header';
import Content from './Components/Content/Content';
import Content1 from './Components/Content1/Content1';
import Content2 from './Components/Content2/Content2';
import Footer from './Components/Footer/Footer';
import {  BrowserRouter as Router,  Switch,  Route  } from "react-router-dom";



function App() {
  return (
   
      <Router>
        <Header/>
          <Switch>
            <Route path="/vuelos" component={Content1}/>
            <Route path="/hoteles" component={Content2}/>
            <Route path="/atracciones" component={Content}/>
            <Route path="/" component={Content}/>
          </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;
