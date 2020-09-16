import React from 'react';


class Menu extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    meals: [],
    meals1: []
   };
    
}
 

async componentDidMount(){
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
const url1 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=italian";
const res = await fetch(url);
const res1 = await fetch(url1);
const data = await res.json();
const data1 = await res1.json();
this.setState ({ meals: data.meals });


}

render() {
  
  return(  
    <div>
  

 <div >

 <br/>
 <br/>
 <br/>
 <br/>
 
 
 {this.state.meals.map(meals => (
  
  <div >

  <div >
  Meal:
  {meals.strMeal}
  </div>
  <div id='breed-behavior'>
  Demo:
  <img src={meals.strMealThumb}/>
  </div>
  </div>
 ))}
  </div>
  </div>
  )
}}


export default Menu;  