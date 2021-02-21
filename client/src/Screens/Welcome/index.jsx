import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ImageSlider from "../../components/ImageSlider";
import Spinner from "../../components/Modals&Spinners/spinner";

import { StyledWelcomeButton, StyledWelcomeContainer } from "./styled-components";

const Welcome = () => {


  const initialImage = "slide11";

  const images = [
    { NAME: "slide8" },
    { NAME: "slide5" },
    { NAME: "slide15" },
    { NAME: "slide6" },
    { NAME: "slide3" },
    { NAME: "slide10" },
    { NAME: "slide13" },
    { NAME: "slide11" },
    { NAME: "slide12" },
    { NAME: "slide4" },
  ];

  const [imageData, setImageData] = useState({
    homeImage: initialImage,
    heigth: 0,
    initialEffect: "all 1.8s",
  });
  useEffect(() => {
    setImageData({
      homeImage: "slide12",
      heigth: 0,
      initialEffect: "all 1.8s",
    });
  }, []);

  const getImageSlider = (image) => {
    setImageData({
      ...imageData,
      homeImage: image,
    });
  };

  return (
    <>
      {!imageData.homeImage ? (
        <Spinner></Spinner>
      ) : (
        <StyledWelcomeContainer
          img={imageData.homeImage}
          pageTransition={imageData.initialEffect}
        >
          <ImageSlider getImageSlider={getImageSlider} IMAGES={images} />
          <StyledWelcomeButton to={"/home"}>Welcome</StyledWelcomeButton>
        </StyledWelcomeContainer>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    home: { initialEffect, homeImage },
  } = state;
  return {
    initialEffect, 
    homeImage,
  };
};

export default connect(mapStateToProps, null)(Welcome);
