import React, { useEffect, useState, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, __RouterContext, Redirect } from "react-router-dom";

// import { fetchloggedUser } from "../../redux/actions/user-actions";
import { BACKGROUND_IMAGES } from "../../constants";
import NavBarContainer from "../NavBar/navBar";
import ImageSlider from "../ImageSlider";
import Login from "../Login";
import ProductCategories from "../Categories";
import ProductContainer from "../Product";
import Cart from "../CartContainer";
import About from "../AboutContainer";
import Contact from "../ContactContainer";
import Spinner from "../Modals&Spinners/spinner";
import {StyledMain} from "./styledComponents";

// import Footer from "../FooterContainer"
const ProductsContainer = React.lazy(() => import("../Series"));

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
      homeImage: "slide14",
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
        <Route component={NavBarContainer} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={ProductCategories} />
          <Route path="/gallery/:name/:serie" component={ProductContainer} />
          <Suspense fallback={<Spinner active></Spinner>}>
            <Route path="/gallery/:name" component={ProductsContainer} />
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
