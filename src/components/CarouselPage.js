import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './style.css'
const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="width">
            <MDBView src='../images/fish.jpg'>
              
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" className="width">
            <MDBView>
              <img
                className="d-block w-100"
                src="../images/pilau.jpg" 
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className="width">
            <MDBView>
              <img
                className="d-block w-100"
                src="../images/beef.jpg" 
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;