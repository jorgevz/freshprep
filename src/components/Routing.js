import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    } from 'react-router-dom'
    import {Nav} from 'react-bootstrap';
  import Home from '../components/Home';
  import Menu from '../components/Menu';
  import MealPlans from '../components/MealPlans';
import Aboutus from '../components/Aboutus';
import Checkout from '../components/Checkout';
    
    
    
  
  function Routing() {
      return(
      

        <Router>
       
        <div>
     
        <Nav class="navbar fixed-top navbar-light bg-light">
  
        <Link id='my-logo' to="/home">Freshprep🥕</Link>

       <ul id='nav-bar'>

       <li><Link to='/home'>Home</Link></li>
       <li><Link to='/menu'>Menu</Link></li>
       <li> <Link to='/Mealplans'>Mealplans</Link></li>
        <li><Link to='/aboutus'>About us</Link></li>
      
      </ul>

        </Nav>
        
        <Switch>
        
        <Route exact path='/home' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/Mealplans' component={MealPlans}/>
        <Route path='/aboutus' component={Aboutus}/>
        <Route path='/checkout' component={Checkout}/>
       
        
        </Switch>
        
        </div>
      
       </Router> 
      
    );
  }
  
  export default Routing;
  