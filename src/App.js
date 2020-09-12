import React from 'react';
import './App.css';
import {Nav} from 'react-bootstrap';
import Home from './components/Home';
import logo from './images/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  } from 'react-router-dom'
  
  
  
  

function App() {
    return(
      <div>
      <Router>
      <Nav id="my-nav">
  <Nav.Item>
  <Nav.Link eventKey="home" id="my-logo">FreshPrep</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="menu">Menu</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Meanl plans">Meal Plans</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="FAQs">FAQs</Nav.Link>
  </Nav.Item>
  
</Nav>
      <Switch>
      
      <Route exact path='/home' component={Home}/>
     
      
      </Switch>
      
    
     </Router>
    </div>
  );
}

export default App;
