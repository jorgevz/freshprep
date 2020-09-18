import React from 'react';
import mission from '../images/mission.jpg';

function Thankyou(){
return(
<div className='jumbotronstyling'>
<br/>
<br/>
<br/>
<br/>
<h2 className>Thank you for your purchase</h2>
<p>Your satisfaction is our best reward.</p>
<img src={mission} class = "col-sm-12" height='580px'/>
</div>
)
}
export default Thankyou;