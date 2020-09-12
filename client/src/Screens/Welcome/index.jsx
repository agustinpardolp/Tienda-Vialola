import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import Spinner from "../../components/Modals&Spinners/spinner";

const StyledWelcomeContainer = styled.div`
  background-size: cover;
  height: 100vh;
  width: 100%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat fixed center;`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: ${(props) => `${props.pageTransition}`};
  text-align: center;
  transition-delay: 300ms;
`;
const StyledWelcomeButton = styled(Link)`
  position: absolute;
  color: var(--mainColorFont);
  font-size: 1.5rem;
  bottom: 15%;
  justify-self: center;
`;
const initialImage = "slide11";

const Welcome = (props) => {
  let {
    location: { pathname },
  } = props;

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

const mapStateToProps = (state, ownProps) => {
  const {
    home: { initialEffect, homeImage },
  } = state;
  return {
    initialEffect, //se recive delay de transition o no, para evitar retardo en carga inicial de imagen
    homeImage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchloggedUser: () => dispatch(fetchloggedUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
