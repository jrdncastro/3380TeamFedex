import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Components/LoginPageJca80/LoginPageJca80'
import NavBar from './Components/NavBarJca80/NavBarJca80'
import Header from './Components/HeaderJca80/HeaderJca80'
import HomePage from './Components/HomePageJca80/HomePageJca80'
import SearchPage from './Components/SearchPageJca80/SearchPageJca80'
import EmployeePage from './Components/EmployeePageJca80/EmployeePageJca80'
import AboutPage from './Components/AboutPageJca80/AboutPageJca80'
import ContactPage from './Components/ContactPageJca80/ContactPageJca80'
import Footer from './Components/FooterJca80/FooterJca80'

var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:"

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken = {setToken} />
  }

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Header/>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/search" exact component = {SearchPage} />
          <Route path = "/employees" exact component = {EmployeePage} />
          <Route path = "/about" exact component = {AboutPage} />
          <Route path = "/contact" exact component = {ContactPage} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
