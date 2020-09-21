import React from 'react';
import {Button} from 'react-bootstrap';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        }
    }

    increment() {
    
        };
    
    




render(){

return(
    <div>
    <br/>
    <br/>
    <Button onClick={this.increment}>add</Button>
    <h2>{this.state.count}</h2>
    </div>
)


}
    
}
export default Counter;