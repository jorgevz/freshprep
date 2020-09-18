import React from 'react';
import { Button } from 'react-bootstrap';




class Checkout extends React.Component{
constructor(props){
 super(props);
this.state = {
firstName: '',
lastName: '',
email:'',
address:'',
address2:'',
country: '',
state:'',
zip:''
}
}



handleSubmit = (e) => {
e.preventDefault()
}

handleChange = (e) => {
let {name,value} = e.target 
this.setState({[name]: value})
console.log(this.state)
}



render(){
return(
    <div class="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="py-5 text-center">
    <p id='my-logo'>Freshprep🥕</p>
        <p class="lead">Proceed with the checkout process.</p>
    </div>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
               
                
            </h4>
           
                <br/>
                <br/>
                
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total 10.50 (USD)</span>
                    <strong></strong>
                    
                </li>
            
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form onSubmit={this.handleSubmit} class="needs-validation" novalidate="">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input name='firstName' value={this.state.firstName} onChange={this.handleChange} type="text" class="form-control" id="firstName" placeholder=""  required=""/>
                        <div class="invalid-feedback"> Valid first name is required. </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input name='lastName' type="text" value={this.state.lastName} onChange={this.handleChange} class="form-control" id="lastName" placeholder="" required=""/>
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
               
                    
                <div class="mb-3">
                    <label for="email">Email <span class="text-muted">(Optional)</span></label>
                    <input name='email' type="email" value={this.state.email} onChange={this.handleChange} class="form-control" id="email" placeholder="you@example.com"/>
                    <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input name='address' type="text" value={this.state.address} onChange={this.handleChange} class="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="mb-3">
                    <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                    <input name='address2' type="text" value={this.state.address2} onChange={this.handleChange} class="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>
                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option name='country' value={this.state.country} onChange={this.handleChange}>United States</option>
                        </select>
                        <div class="invalid-feedback"> Please select a valid country. </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select name='state' value={this.state.state} onChange={this.handleChange} class="custom-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                          <option>Alabama</option> 
                                  <option>Alaska</option>  
                                    <option>Arizona</option>
                                  <option> Arkansas</option> 
                                  <option> California</option>
                                  <option>Colorado</option>  
                                  <option>Connecticut</option>
                                  <option>Delaware</option>
                                  <option>Florida</option>
                                  <option>Georgia</option>
                                  <option>Hawaii</option>
                                  <option>Idaho</option>
                                  <option>Illinois</option>
                                  <option>Indiana</option>
                                  <option>Iowa</option>
                                  <option>Kansas</option>
                                 <option>Louisiana</option>
                                 <option>Maine</option>
                                 <option>Maryland</option>
                                 <option>Massachusetts</option>
                                 <option>Michigan</option>
                                 <option>Minnesota</option>
                                 <option>Mississippi</option>
                                 <option>Missouri</option>
                                 <option>Nebraska</option>
                                 <option>Nevada</option>
                                 <option>New Hampshire</option>
                                 <option>New Jersey</option>
                                 <option>New Mexico</option>
                                 <option>New York</option>
                                 <option>North Carolina</option>
                                 <option>North Dakota</option>
                                 <option>Ohio</option>
                                 <option>Oklahoma</option>
                                 <option>Oregon</option>
                                 <option>Pennsylvania</option>
                                 <option>Rhode Island</option>
                                 <option>South Carolina</option>
                                 <option>Tennessee</option>
                                 <option>Texas</option>
                        </select>
                        <div class="invalid-feedback"> Please provide a valid state. </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input name='zip' value={this.state.zip} onChange={this.handleChange} type="text" class="form-control" id="zip" placeholder="" required=""/>
                        <div class="invalid-feedback"> Zip code required. </div>
                    </div>
                </div>
                
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="same-address"/>
                    <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                
                
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input"  required=""/>
                        <label class="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="paypal">PayPal</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback"> Name on card is required </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                        <div class="invalid-feedback"> Credit card number is required </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                        <div class="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                        <div class="invalid-feedback"> Security code required </div>
                    </div>
                   
                <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button href='/thankyou' type='submit' variant='primary'>Submit Payment</Button>
                <br/>
                <br/>
                <br/>
                </div>
                </div>
                           
                  <form/>
    
    </form>
    </div>
    </div>
</div>




)}
}

export default Checkout;