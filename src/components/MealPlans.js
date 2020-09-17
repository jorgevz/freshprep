import React from 'react';
import Checkout from './Checkout';
import {Button} from 'react-bootstrap';

function MealPlans(){
let price1 = "$10.50";
let price2 = "$8.99";
let price3 = "$7.99"

return(
<div>

<br/>
<br/>
<br/>
<br/>
<br/>


<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
<h1 class="display-4">Choose your weekly meal needs below</h1>
<p class="lead">Here at FreshPrep your satisfaction is our best reward, we are obssed with customer satisfaction.</p>
</div>

<div class="container">
<div class="card-deck mb-3 text-center">
  <div class="card mb-4 box-shadow">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">4 Meals per week</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">{price1}<small class="text-muted">/ meal</small></h1>
      <h4>We care🍚</h4>
      <Button href="/MenuSelection1" variant="info" type="button" class="btn btn-lg btn-block btn-outline-primary" >Purchase</Button>
    </div>
  </div>
  <div class="card mb-4 box-shadow">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">6 Meals per week</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">{price2}<small class="text-muted">/ meal</small></h1>
      <h4>about your👨🏾‍🍳</h4>
      <Button href="/Checkout" variant="info" type="button" class="btn btn-lg btn-block btn-outline-info">Purchase</Button>
    </div>
  </div>
  <div class="card mb-4 box-shadow">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">8 Meals per week</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title"> {price3} <small class="text-muted">/ meal</small></h1>
      <h4>health❤️</h4>
      <Button href="/Checkout" variant="info" type="button" class="btn btn-lg btn-block btn-outline-info">Purchase</Button>
    </div>
  </div>
</div>

    </div>
 </div> 
)
}

export default MealPlans;