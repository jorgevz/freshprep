import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
    } from 'react-router-dom'
    import {Nav, NavItem,NavLink} from 'react-bootstrap';
  import Home from '../components/Home';
  import Menu from '../components/Menu';
  import MealPlans from '../components/MealPlans';
  import chef from '../images/chef.jpg';
  import delivery from '../images/delivery.jpg';
  import weeklyprep from '../images/weeklyprep.jpg';
import Aboutus from '../components/Aboutus';
    
    
    
  
  function Routing() {
      return(
      

        <Router>
        <div>
        <nav  id='nav-bar'>
  
        <Link id='my-logo' to="/home">Freshprep 🥕</Link>
        <Link to='/home'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/Mealplans'>Mealplans</Link>
        <Link to='/aboutus'>About us</Link>
      
        </nav>
        
        <Switch>
        
        <Route exact path='/home' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/Mealplans' component={MealPlans}/>
        <Route path='/aboutus' component={Aboutus}/>
        
       
        
        </Switch>
        
        </div>
      
       </Router> 
      
    );
  }
  
  export default Routing;
  