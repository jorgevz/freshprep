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
      <h3>Choose your meal every week</h3>
      <h2>Here at FreshPrep you have the meal variety you need for your busy week</h2>
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
      <h4>Second slide label</h4>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
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
      <h4>Third slide label</h4>
      <h2>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h2>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
</div> 


<br/>

<div id='second-div'>


<br/>
<Form inline>
<h3 id='eat-fresh'>Eat fresh with us !</h3>
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