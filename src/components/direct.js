import React from 'react';
import { Route } from 'react-router-dom';
import Thankyou from './Thankyou';


function direct (){
return(
<div>
<Route path='/thankyou' component={Thankyou}/>
</div>
)

}

export default direct;