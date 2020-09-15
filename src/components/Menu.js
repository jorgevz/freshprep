import React from 'react';


class Menu extends React.Component {

  constructor(props) {
  super(props)
  
    
}
  state = {
   meals: []
  
  };

async componentDidMount(){
const url = ("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
const res = await fetch(url);
const data = await res.json();
this.setState ({ meals: data });
console.log(data)
}

render() {
  return (
    <div>

  
   <div id='my-breed'>
  
   

   {this.state.meals.map(meals => (
    
    <div id='the-breeds'>
  
    <div id='breed-name'>
    Name:
    
    {meals.strMeal}
    </div>
    <div id='breed-behavior'>
    Picture:
    {meals.strMealThumb}
    </div>
    
  </div>
    
      ))}
  
      </div>
      </div>
     )
  }
  }

export default Menu;