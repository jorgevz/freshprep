import React from 'react';
import { Button } from 'react-bootstrap';



class Menu extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    meals: [],
   };
    
}
 
// https://www.themealdb.com/api/json/v1/1/filter.php?i=noodles
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican

async componentDidMount(){
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=italian";
const res = await fetch(url);
const data = await res.json();
this.setState ({ meals: data.meals });


}



render() {
  
  return(  
    <div>
  

 <div id='first-menu'>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>

 <h1 id= 'variety'>The varieties we offer !</h1>
 <h5 id= 'variety'>Proceed to Meal plans above for your meal selections.</h5>
 <br/>
 <br/>
 {this.state.meals.map(meals => (
  

  <div id='whole-menu'>
  
  <div>
  {meals.strMeal}
  </div>
  <br/>

  <div>
  </div>
<br/>
  <div>
  <img height='300px' width='300px' src={meals.strMealThumb}/>
  </div>
  <br/>
  <br/>
  <br/>
  </div>

 ))}
  </div>
  </div>
  )
}}


export default Menu;  