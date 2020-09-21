import React from 'react';
import { Button } from 'react-bootstrap';
import Counter from '../components/Counter';



class MenuSelection1 extends React.Component {

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

increment() {
  this.setState({
    
  });
};

render() {
  
  return(  
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <div>
    
  <Counter/>
    
    </div>

 <div id='first-menu'>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <h1 id= 'variety'>The fun part, choose your 4 Meals!</h1>
 <br/>
 <br/>
 
 <div className= 'selection'>
  
 <select class="mdb-select md-form" searchable="Search here..">
  <option value="" disabled selected>Choose your meal</option>
  <option value="2" data-secondary-text="Production year: 2012">Budino Di Ricotta</option>
  <option value="3" data-secondary-text="Production year: 2017">Chicken Alfredo Primavera</option>
  <option value="3" data-secondary-text="Production year: 2015">Chilli prawn linguine</option>
  <option value="3" data-secondary-text="Production year: 2019">Fettucine alfredo</option>
  <option value="3" data-secondary-text="Production year: 2016">Lasagne</option>
  <option value="3" data-secondary-text="Production year: 2016">Mediterranean Pasta Salad</option>
  <option value="3" data-secondary-text="Production year: 2016">Osso Buco alla Milanese</option>
  <option value="3" data-secondary-text="Production year: 2016">Pilchard puttanesca</option>
  <option value="3" data-secondary-text="Production year: 2016">Pizza Express Margherita</option>
  <option value="3" data-secondary-text="Production year: 2016">Ribollita</option>
  <option value="3" data-secondary-text="Production year: 2016">Salmon Prawn Risotto</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti alla Carbonara</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti Bolognes</option>
  <option value="3" data-secondary-text="Production year: 2016">Spicy Arrabiata Penne</option>
  <option value="3" data-secondary-text="Production year: 2016">Squash linguinei</option>
  <option value="3" data-secondary-text="Production year: 2016">Vegan Lasagna</option>
  <option value="3" data-secondary-text="Production year: 2016">Venetian Duck Ragu</option>
 

</select>

  
 <select class="mdb-select md-form" searchable="Search here..">
  <option value="" disabled selected>Choose your meal</option>
  <option value="2" data-secondary-text="Production year: 2012">Budino Di Ricotta</option>
  <option value="3" data-secondary-text="Production year: 2017">Chicken Alfredo Primavera</option>
  <option value="3" data-secondary-text="Production year: 2015">Chilli prawn linguine</option>
  <option value="3" data-secondary-text="Production year: 2019">Fettucine alfredo</option>
  <option value="3" data-secondary-text="Production year: 2016">Lasagne</option>
  <option value="3" data-secondary-text="Production year: 2016">Mediterranean Pasta Salad</option>
  <option value="3" data-secondary-text="Production year: 2016">Osso Buco alla Milanese</option>
  <option value="3" data-secondary-text="Production year: 2016">Pilchard puttanesca</option>
  <option value="3" data-secondary-text="Production year: 2016">Pizza Express Margherita</option>
  <option value="3" data-secondary-text="Production year: 2016">Ribollita</option>
  <option value="3" data-secondary-text="Production year: 2016">Salmon Prawn Risotto</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti alla Carbonara</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti Bolognes</option>
  <option value="3" data-secondary-text="Production year: 2016">Spicy Arrabiata Penne</option>
  <option value="3" data-secondary-text="Production year: 2016">Squash linguinei</option>
  <option value="3" data-secondary-text="Production year: 2016">Vegan Lasagna</option>
  <option value="3" data-secondary-text="Production year: 2016">Venetian Duck Ragu</option>
 

</select>

  
 <select class="mdb-select md-form" searchable="Search here..">
  <option value="" disabled selected>Choose your meal</option>
  <option value="2" data-secondary-text="Production year: 2012">Budino Di Ricotta</option>
  <option value="3" data-secondary-text="Production year: 2017">Chicken Alfredo Primavera</option>
  <option value="3" data-secondary-text="Production year: 2015">Chilli prawn linguine</option>
  <option value="3" data-secondary-text="Production year: 2019">Fettucine alfredo</option>
  <option value="3" data-secondary-text="Production year: 2016">Lasagne</option>
  <option value="3" data-secondary-text="Production year: 2016">Mediterranean Pasta Salad</option>
  <option value="3" data-secondary-text="Production year: 2016">Osso Buco alla Milanese</option>
  <option value="3" data-secondary-text="Production year: 2016">Pilchard puttanesca</option>
  <option value="3" data-secondary-text="Production year: 2016">Pizza Express Margherita</option>
  <option value="3" data-secondary-text="Production year: 2016">Ribollita</option>
  <option value="3" data-secondary-text="Production year: 2016">Salmon Prawn Risotto</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti alla Carbonara</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti Bolognes</option>
  <option value="3" data-secondary-text="Production year: 2016">Spicy Arrabiata Penne</option>
  <option value="3" data-secondary-text="Production year: 2016">Squash linguinei</option>
  <option value="3" data-secondary-text="Production year: 2016">Vegan Lasagna</option>
  <option value="3" data-secondary-text="Production year: 2016">Venetian Duck Ragu</option>
 

</select>

  
 <select class="mdb-select md-form" searchable="Search here..">
  <option value="" disabled selected>Choose your meal</option>
  <option value="2" data-secondary-text="Production year: 2012">Budino Di Ricotta</option>
  <option value="3" data-secondary-text="Production year: 2017">Chicken Alfredo Primavera</option>
  <option value="3" data-secondary-text="Production year: 2015">Chilli prawn linguine</option>
  <option value="3" data-secondary-text="Production year: 2019">Fettucine alfredo</option>
  <option value="3" data-secondary-text="Production year: 2016">Lasagne</option>
  <option value="3" data-secondary-text="Production year: 2016">Mediterranean Pasta Salad</option>
  <option value="3" data-secondary-text="Production year: 2016">Osso Buco alla Milanese</option>
  <option value="3" data-secondary-text="Production year: 2016">Pilchard puttanesca</option>
  <option value="3" data-secondary-text="Production year: 2016">Pizza Express Margherita</option>
  <option value="3" data-secondary-text="Production year: 2016">Ribollita</option>
  <option value="3" data-secondary-text="Production year: 2016">Salmon Prawn Risotto</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti alla Carbonara</option>
  <option value="3" data-secondary-text="Production year: 2016">Spaghetti Bolognes</option>
  <option value="3" data-secondary-text="Production year: 2016">Spicy Arrabiata Penne</option>
  <option value="3" data-secondary-text="Production year: 2016">Squash linguinei</option>
  <option value="3" data-secondary-text="Production year: 2016">Vegan Lasagna</option>
  <option value="3" data-secondary-text="Production year: 2016">Venetian Duck Ragu</option>
 

 

</select>
<br/>
<br/>
<br/>

<Button id='button-select' href='/checkout' variant='info'>Proceed</Button>


</div>

 <br/>
 <br/>
 {this.state.meals.map(meals => (
  

  <div id='whole-menu'>
  


  
 <h3>{meals.strMeal}</h3> 
  
  <br/>

<div>
<Button variant='secondary' value="select" name='select' />
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


export default MenuSelection1;  