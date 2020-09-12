import React from 'react';
import './App.css';
import logo from './images/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  } from 'react-router-dom'
  import {Nav} from 'react-bootstrap';
import Home from './components/Home';
import Menu from './components/Menu';
  
  
  

function App() {
    return(
      <Router>
      <div>
    
      <Nav id="my-nav">
  <Nav.Item>
  <Nav.Link to="/home" id="my-logo"> <Link className="nav-link" to="/home">Freshprep</Link> </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/home"> <Link className="nav-link" to="/home">Home</Link> </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/menu"> <Link className="nav-link"   to="/">Menu</Link> </Nav.Link>
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
      <Route path='/menu' component={Menu}/>

      </Switch>
    
      </div>
     </Router>
     
    
  );
}

export default App;
