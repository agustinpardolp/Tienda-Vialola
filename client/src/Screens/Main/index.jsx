import React, { useEffect, useState, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, __RouterContext, Redirect } from "react-router-dom";

// import { fetchloggedUser } from "../../redux/actions/user-actions";
import { BACKGROUND_IMAGES } from "../../constants";
import NavBar from "../../components/NavBar";
import ImageSlider from "../../components/ImageSlider";
import Login from "../Login";
import Gallery from "../Gallery";
import Product from "../Artwork";
import Cart from "../Cart";
import About from "../About";
import Contact from "../Contact";
import Spinner from "../../components/Modals&Spinners/spinner";
import { StyledMain } from "./styledComponents";
// import Footer from "../FooterContainer"
const Products = React.lazy(() => import("../Series"));

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

const Main = (props) => {
  let {
    location: { pathname },
  } = props;

  const [imageData, setImageData] = useState({
    homeImage: "",
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

  const locationSelector = (location) => {
    switch (location) {
      case "/home":
        return imageData.homeImage;
      case "/about":
        return BACKGROUND_IMAGES.ABOUT;
      case "/contact":
        return BACKGROUND_IMAGES.CONTACT;
      default:
        return BACKGROUND_IMAGES.DEFAULT;
      // return
    }
  };

  const getImageSlider = (image) => {
    setImageData({
      ...imageData,
      homeImage: image,
    });
  };

  return (
    <>
      <StyledMain
        img={locationSelector(pathname)}
        pageTransition={imageData.initialEffect}
      >
        {pathname === "/home" ? (
          <ImageSlider getImageSlider={getImageSlider} IMAGES={images} />
        ) : null}
        <Route component={NavBar} />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/gallery/:name/:serie" component={Product} />
          <Suspense fallback={<Spinner active></Spinner>}>
            <Route path="/gallery/:name" component={Products} />
          </Suspense>
        </Switch>
        <Redirect from="/" to="/home" />
      </StyledMain>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
