import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card, CardBody, CardTitle, CardText, CardImg, Row, Col
} from 'reactstrap';
import postStore from "../stores/postStore";
import { getAproperty, getProperties } from "../actions/postActions";
import Gallery from 'react-grid-gallery';
import Container from 'reactstrap/lib/Container';
import SimilarHomeList from '../components/SimilarHomeList'
import ContactForm from '../components/ContactForm'
import Ratings from "../components/Ratings"

import p1 from '../assets/images/properties/p1.jpg'
import p2 from '../assets/images/properties/p2.jpg'
import p3 from '../assets/images/properties/p3.jpg'
import p4 from '../assets/images/properties/p4.jpg'
//console.log("image", p1)
const images = [
  {
    src: p1.toString(),
    thumbnail: p1.toString(),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    enableImageSelection: false,
    isSelected: false,
    caption: "Beautiful family House"
  },
  {
    src: p2.toString(),
    thumbnail: p2.toString(),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    enableImageSelection: false,
    isSelected: false,
    caption: "Beautiful family House"
  },
  {
    src: p3.toString(),
    thumbnail:p3.toString(),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    enableImageSelection: false,
    isSelected: false,
    caption: "Beautiful family House"
  },

  {
    src: p4.toString(),
    thumbnail: p4.toString(),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    enableImageSelection: false,
    isSelected: false,
    caption: "Beautiful family House"
  },

]
const items = [
  {
    id: 1,
    src: <Card body className="text-center m-2">
      <CardImg top width="100%" src={p1} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">3 Bedroom Family house</CardTitle>
        <CardText>Built 2016, remodeled, kitchen and bathroom.</CardText>
        <CardText>
          <small className="text-muted">23 Days on the market</small>
        </CardText>
      </CardBody>
    </Card>,

    altText: 'Slide 1',
    caption: 'slide1'
  },
  {
    id: 2,
    src: <Card body className="text-center m-2">
      <CardImg top width="100%" src={p2} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Spacious Bathroom</CardTitle>
        <CardText> Bathroom with handcraft tiles and customized shower.</CardText>
        <CardText>
          <small className="text-muted">Remodeled in 2019</small>
        </CardText>
      </CardBody>
    </Card>,

    altText: 'Slide 1',
    caption: 'slide1'
  },
  {
    id: 3,
    src: <Card body className="text-center m-2">
      <CardImg top width="100%" src={p3} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Executive style bedroom</CardTitle>
        <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
        <CardText>
          <small className="text-muted">Member since 2010</small>
        </CardText>
      </CardBody>
    </Card>,

    altText: 'Slide 1',
    caption: 'slide1'
  },
  {
    id: 4,
    src: <Card body className="text-center m-2">
      <CardImg top width="100%" src={p4} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Livingroom with full of sunshine</CardTitle>
        <CardText>The best service ever. I can directly talk to my buyer and make a fast and reasonable agreement.</CardText>
        <CardText>
          <small className="text-muted">Member since 2010</small>
        </CardText>
      </CardBody>
    </Card>,

    altText: 'Slide 1',
    caption: 'slide1'
  }

];

const PropertyPage = ({ match }) => {

  const id = match.params.id
  const [content, setContent] = useState('')
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [propertyData, setPropertyData] = useState(postStore.getProperties())

  useEffect(() => {

    postStore.addChangeListener(onChange)

    getAproperty(id)
    postStore.addChangeListener(onChange);

    if (postStore.getProperties().length === 0) getProperties();
    return () => postStore.removeChangeListener(onChange);

  }, [])


  function onChange() {
    setContent(postStore.getAproperty(id));
    setPropertyData(postStore.getProperties());
  }
  //console.log("COntent", content.property.data.description)
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
        <div className='d-none d-sm-flex'>{item.src}</div>


      </CarouselItem>
    );
  });

  return (

    <Container className='mt-5'>
     
      <div className='sectionTitle mt-5'><p style={{marginTop:'6rem'}}>Property</p></div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <Row>
        <Col>
          {content && <div>{content.property.data.description}</div>}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='sectionTitle mt-5'><p>Gallery</p></div>
          <Gallery images={images} />
        </Col>
      </Row>

      <div className='sectionTitle mt-5'><p>The Neighborhood</p></div>
      <Row>
        <Col xs={12}>

          <iframe title='map' className='iFrame' id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

          </iframe>
        </Col>
        <Col xs={12} >
          <h5 className='sectionTitle mt-5'>Similar homes in the area</h5>
          <SimilarHomeList propertyData={propertyData} />

        </Col>
      </Row>
      <Row>
        <Col>
          <Ratings />
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
export default PropertyPage;
