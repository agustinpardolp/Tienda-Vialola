import React, { useState } from "react";
import { Slide, Fade } from "react-slideshow-image";
import TransitionWrapper from "../../components/transition";
import { images } from "../../screens/Home/constants";

import { StyledCarouseleContainer } from "./styled-components";

export default function CarouselSlider({ children }) {
  const [autoplay, setAutoplay] = useState(true);
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };
  return (
    // <div>
    //   <div className="slide-container">
    //     <Slide autoplay={autoplay}>
    //       {images.map((imageUrl) => (
    //         <Fade>
    //           <div className="each-fade">
    //             <div>
    //               <img
    //                 src={`${process.env.PUBLIC_URL}/images/img-background/${imageUrl.NAME}.jpg`}
    //               />
    //             </div>
    //             <p>First Slide</p>
    //           </div>
    //         </Fade>
    //       ))}
    //     </Slide>
    //   </div>
    // </div>
    <TransitionWrapper>
      <StyledCarouseleContainer>
        {children}
      </StyledCarouseleContainer>
    </TransitionWrapper>
  );
}
