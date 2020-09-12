import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
    } from 'react-router-dom'
    import {Nav} from 'react-bootstrap';
  import Home from '../components/Home';
  import Menu from '../components/Menu';
  import MealPlans from '../components/MealPlans';
  import chef from '../images/chef.jpg';
  import delivery from '../images/delivery.jpg';
  import weeklyprep from '../images/weeklyprep.jpg';
import FAQs from '../components/FAQs';
    
    
    
  
  function Routing() {
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
      <Nav.Link eventKey="/menu"> <Link className="nav-link"   to="/menu">Menu</Link> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Meanl plans"> <Link className="nav-link"   to="/Mealplans">Meal-plans</Link> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="FAQs"> <Link className="nav-link"   to="/faqs">FAQs</Link> </Nav.Link>
    </Nav.Item>
    
  </Nav>
        <Switch>
        
  
        <Route exact path='/home' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/Mealplans' component={MealPlans}/>
        <Route path='FAQs' component={FAQs}/>
  
        </Switch>
      
        </div>
       </Router>
       
      
    );
  }
  
  export default Routing;
  