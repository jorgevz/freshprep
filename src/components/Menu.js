import React from 'react';


class Menu extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    meals: []
   
   };
    
}
 

async componentDidMount(){
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
const res = await fetch(url);
const data = await res.json();
this.setState ({ meals: data.meals });

}

render() {
  let meals = this.state.meals
  console.log(meals)
  let loaded = this.state.meals.length ? true : false
  let rendermeals = ''
    if (loaded ) {
      
    
  rendermeals = this.state.meals.map (meals => { 
    return (
      <div >
  
      <div >
      Name:
      {meals.strMeal}
      </div>
      
      <div >
      <image>
      Picture:
      {meals.strMealThumb}
      </image>
      </div>
      
    </div>
    )
  
  }) 
}
  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <p>Meal: {rendermeals}</p>
    </div>
  )
  }
}

export default Menu;