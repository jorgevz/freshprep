import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    } from 'react-router-dom'
    import {Nav} from 'react-bootstrap';
  import Home from '../components/Home';
  import Menu from '../Menus/Menu';
  import MealPlans from '../components/MealPlans';
import Aboutus from '../components/Aboutus';
import Checkout from '../components/Checkout';
import Checkout1 from '../components/Checkout1';
import Checkout2 from '../components/Checkout2';
import MenuSelection1 from '../Menus/MenuSelection1';
import Thankyou from '../components/Thankyou';
import MenuSelection3 from '../Menus/MenuSelection3';
import MenuSelection2 from '../Menus/MenuSelection2';
import Counter from '../components/Counter';
    
    
    
  
  function Routing() {
      return(
      

        <Router>
       
        <div>
     
        <Nav class="navbar fixed-top navbar-light bg-light">
  
        <Link id='my-logo' to="/">Freshprep🥕</Link>

       <ul id='nav-bar'>

       <li><Link to='/'>Home</Link></li>
       <li><Link to='/menu'>Menu</Link></li>
       <li> <Link to='/Mealplans'>Mealplans</Link></li>
        <li><Link to='/aboutus'>About us</Link></li>
      
      </ul>

        </Nav>
        
        <Switch>
        
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/menuselection1' component={MenuSelection1}/>
        <Route path='/Mealplans' component={MealPlans}/>
        <Route path='/aboutus' component={Aboutus}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/checkout1' component={Checkout1}/>
        <Route path='/checkout2' component={Checkout2}/>
        <Route path='/thankyou' component={Thankyou}/>
        <Route path='/menuselection2' component={MenuSelection2}/>
        <Route path='/menuselection3' component={MenuSelection3}/>
        <Route path='/counter' component={Counter}/>
        
        </Switch>
        
        </div>
      
       </Router> 
      
    );
  }
  
  export default Routing;
  