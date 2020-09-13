import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import weeklyprep from '../images/weeklyprep.jpg';
import chef from '../images/chef.jpg'
import delivery from '../images/delivery.jpg';


function Home (){
return(
<div>

<div>
<Carousel>
  <Carousel.Item className="text">
    <img
    className="slide-images"
      src={weeklyprep}
      alt= "first slide"
      class = "col-sm-12"  />
      
    <Carousel.Caption id="carousel">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
    className="slide-images"
      src={chef}
      alt="second slide"
      class = "col-sm-12"
     
    />

    <Carousel.Caption id="carousel1">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="slide-images"
      src={delivery}
      alt="Third slide"
      class = "col-sm-12"
    />

    <Carousel.Caption id="carousel2">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> 

<br/>
<br/>

<div id='second-div'>

<h3 id='eat-fresh'>Eat fresh with us !</h3>
<br/>
<Form inline>
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Email
  </Form.Label>
  <Form.Control
    className="mb-2 mr-sm-2"
    id="inlineFormInputName2"
    placeholder="Email"
  />

  <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
    
  </Form.Label>
  <InputGroup className="mb-2 mr-sm-2">
    <InputGroup.Prepend>
      <InputGroup.Text>Zip code</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="inlineFormInputGroupUsername2" placeholder="ex.10029" />
  </InputGroup>

  <Button type="submit" className="mb-2">
    Eat Natural ! 
  </Button>
</Form>

<br/>
<br/>

<div>

</div>

</div>
</div>






);
}

export default Home;