import React from 'react';
import { Button } from 'react-bootstrap';




class MenuSelection1 extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    meals: [],
    count:0

   };
    
}
 
// https://www.themealdb.com/api/json/v1/1/filter.php?i=noodles
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican


increment=(e)=>{

if (this.state.count >= 4) {
  this.setState({count: 0});
  
}else{
  this.setState ({ count: this.state.count + 1 });
}
if (this.state.count >= 4) {
  alert('You can only choose 4 meals')
}
}



async componentDidMount(){
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=italian";
const res = await fetch(url);
const data = await res.json();
this.setState ({ meals: data.meals });


}



render() {

  return(  
    <div>
    <br/>
    <br/>
  
   
    <div>
    
  
    
    </div>

 <div id='first-menu'>
 <br/>
 <br/>
 <br/>
 <br/>
<br/>

<div className='variety'>
<h1>The fun part, choose your 4 Meals!</h1>
<Button className='variety' href='/checkout' variant='info'>Proceed</Button>
</div>

 <br/>
<br/>
<br/>

</div>

<div className='menu-counter'>
<p>Meals Selected</p>
<small>🥗🍲</small>
<h2>{this.state.count}</h2>
</div>

 <br/>
 <br/>
 {this.state.meals.map(meals => (
  

  <div id='whole-menu'>
  


  
 <h3>{meals.strMeal}</h3> 
  
  <br/>



<div>
<Button variant='info' name="select" onClick={this.increment}>Select</Button>
</div>


<br/>
  <div>
  <img id='api-imgs' height='300px' width='300px' src={meals.strMealThumb}/>
  </div>
  <br/>
  <br/>
  <br/>
  </div>

 ))}
  </div>

  )
}}


export default MenuSelection1;  