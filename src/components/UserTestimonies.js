import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, CardBody, Button, CardTitle, CardText, CardImg,
} from 'reactstrap';

const items = [
  {
id:1,
  src:  <Card body className="text-center">
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src="/assets/images/u1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Veronica Sims</CardTitle>
          <CardText>"The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement."</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>,
      src2: <Card body className="text-center">
      <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src="/assets/images/u2.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Our Sellers</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Card>,
       altText: 'Slide 1',
       
  },
  {
    id:2,
    src:  <Card body className="text-center">
    <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src="/assets/images/u3.jpg" alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">Our Sellers</CardTitle>
      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      <CardText>
        <small className="text-muted">Last updated 3 mins ago</small>
      </CardText>
    </CardBody>
  </Card>,
  src2: <Card body className="text-center">
  <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src="/assets/images/u4.jpg" alt="Card image cap" />
  <CardBody>
    <CardTitle tag="h5">Our Sellers</CardTitle>
    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
    <CardText>
      <small className="text-muted">Member since 2020 Marc</small>
    </CardText>
  </CardBody>
</Card>,
   altText: 'Slide 1',
   
},
  
];

const UserTestimonies = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <div className='d-flex'>{item.src}{item.src2}</div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous"  onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default UserTestimonies;
