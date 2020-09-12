import React from 'react';
import logo from '../images/Fresh-Co.svg';
import {Carousel} from 'react-bootstrap';


function Home (){
return(
<div>
<Carousel>
  <Carousel.Item>
    <img
      src="https://i.pinimg.com/originals/b0/3a/f9/b03af9e72d17b8a6498c806f7e5acca9.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src="https://umbrella.data.naturalint.com/production/articles/uploads/photo/4c587556-d05d-4361-b3fd-6b144a03ed0b%20(1).20190116113344.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cookingclassy.com/wp-content/uploads/2019/05/acai-bowl-23.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
);
}

export default Home;