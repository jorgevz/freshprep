import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import weeklyprep from '../images/weeklyprep.jpg';
import chef from '../images/chef.jpg'
import delivery from '../images/delivery.jpg';
import mission from '../images/mission.jpg';



function Home (){
return(
<div>

<Carousel>
  <Carousel.Item className="text">
    <img
    className="slide-images"
      src={weeklyprep}
      alt= "first slide"
      class = "col-sm-12" id='img1' />
      
    <Carousel.Caption id="carousel">
      <h4>Choose your meals every week</h4>
      <h3>Here at FreshPrep you have the variety you need for your busy week</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
    className="slide-images"
      src={chef}
      alt="second slide"
      class = "col-sm-12"
     id='img2'
    />

    
    <Carousel.Caption id="carousel1">
      <h4>Our Top-Notch Chefs cook & Prep</h4>
      <h3>Our chefs are experts with organic food, your organic meals are a guarantee here at FreshPrep.</h3>
    </Carousel.Caption>
    

  </Carousel.Item>
  <Carousel.Item>
    <img
    className="slide-images"
      src={delivery}
      alt="Third slide"
      class = "col-sm-12"
      id='img3'
    />

    <Carousel.Caption  id="carousel2">
      <h4>We Prep & Deliver, you eat</h4>
      <h3>From the comfort of your home obtain your healthy meals.No commitment, cancel anytime.</h3>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>



<div id='second-div'>


<Form inline id='form1'>
<h3 id='eat-fresh'></h3>
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


<Jumbotron id='jumbotron'>
  <h1>Our mission</h1>
  <p>
    At FreshPrep we believe in eating natural, and that everyone should afford it ! 
    that is why we are on a mission to feeding you naturally at low cost effectively.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

</div>

</div>








);
}

export default Home;