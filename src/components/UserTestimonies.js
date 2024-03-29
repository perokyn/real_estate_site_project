import React, { useState } from 'react';
import u1 from '../assets/images/u1.jpg'
import u2 from '../assets/images/u2.jpg'
import u3 from '../assets/images/u3.jpg'
import u4 from '../assets/images/u4.jpg'
import c1 from '../assets/images/cert.jpg'
import c2 from '../assets/images/cert2.jpg'
import c3 from '../assets/images/cert3.png'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card, CardBody,  CardTitle, CardText, CardImg,
} from 'reactstrap';

const items = [
  {
id:1,
  src:  <Card body className="text-center m-4 ">
         <div className="d-flex mx-4 text-right">
          <div >
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={u1} alt="Card image cap" />
        <CardTitle tag="h5">Veronica Sims</CardTitle>
        </div>
       <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c1} alt="Card image cap" />   
        <CardText > <small className="text-muted">Certifyed Agent</small></CardText>
        </div>
        <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c2} alt="Card image cap" />   
        <CardText > <small className="text-muted">Customer Engagement</small></CardText>
        </div>
        <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c3} alt="Card image cap" />   
        <CardText > <small className="text-muted">Official Sales</small></CardText>
        </div>
        </div>
        <CardBody>
       
          <CardText>"The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement."</CardText>
          <CardText>
            <small className="text-muted">Member since 2010</small>
          </CardText>
        </CardBody>
      </Card>,
      src2: <Card body className="text-center m-4">
        <div className="d-flex mx-4">
          <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={u2} alt="Card image cap" />
        <CardTitle tag="h5">John Wick</CardTitle>
        </div>
       <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c1} alt="Card image cap" />   
        <CardText > <small className="text-muted">Certifyed Agent</small></CardText>
        </div>
        <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c2} alt="Card image cap" />   
        <CardText > <small className="text-muted">Customer Engagement</small></CardText>
        </div>
        </div>
      
      <CardBody>
       
        <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
        <CardText>
          <small className="text-muted">Member since 2010</small>
        </CardText>
      </CardBody>
    </Card>,
       altText: 'Slide 1',
       caption:'slide1'
  },
  {
    id:2,
    src:  <Card body className="text-center m-4">
     <div className="d-flex mx-4">
          <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={u1} alt="Card image cap" />
        <CardTitle tag="h5">Liuna Steff</CardTitle>
        </div>
       <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c1} alt="Card image cap" />   
        <CardText > <small className="text-muted">Certifyed Agent</small></CardText>
        </div>
        <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c2} alt="Card image cap" />   
        <CardText > <small className="text-muted">Customer Engagement</small></CardText>
        </div>
        </div>
    <CardBody>

      <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
      <CardText>
        <small className="text-muted">Member since 2010</small>
      </CardText>
    </CardBody>
  </Card>,
  src2: <Card body className="text-center m-4">
   <div className="d-flex mx-4">
          <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={u4} alt="Card image cap" />
        <CardTitle tag="h5">July Mao</CardTitle>
        </div>
       <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c1} alt="Card image cap" />   
        <CardText > <small className="text-muted">Certifyed Agent</small></CardText>
        </div>
        <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c2} alt="Card image cap" />   
        <CardText > <small className="text-muted">Customer Engagement</small></CardText>
        </div>
        <div>
        <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={c3} alt="Card image cap" />   
        <CardText > <small className="text-muted">Official Sales</small></CardText>
        </div>
        </div>
  <CardBody>

    <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
    <CardText>
      <small className="text-muted">Member since 2020 Marc</small>
    </CardText>
  </CardBody>
</Card>,
   altText: 'Slide 1',
   caption:'slide1'  
},
{
  id:3,
  src:  <Card body className="text-center m-4">
  <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={u3} alt="Card image cap" />
  <CardBody>
    <CardTitle tag="h5">Camina Drummer</CardTitle>
    <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
    <CardText>
      <small className="text-muted">Member since 2010</small>
    </CardText>
  </CardBody>
</Card>,
src2: <Card body className="text-center m-4">
<CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={u4} alt="Card image cap" />
<CardBody>
  <CardTitle tag="h5">Mila Lia</CardTitle>
  <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
  <CardText>
    <small className="text-muted">Member since 2020 Marc</small>
  </CardText>
</CardBody>
</Card>,
 altText: 'Slide 1',
 caption:'slide1'
}
  
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
        <div className='d-none d-sm-flex'>{item.src}{item.src2}</div>
        <div className='d-flex d-sm-none'>{item.src}</div>
        
      </CarouselItem>
    );
  });

  return (

<div className='mx-4'>
<div className='sectionTitle'><p>Our Members</p></div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='mx-4'
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous"  onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default UserTestimonies;
