import React, {Component } from "react";
import { connect} from "react-redux";
import { Route, Switch, __RouterContext } from "react-router-dom";
import styled from 'styled-components';
// import { fetchloggedUser } from "../../redux/actions/user-actions";
import NavBarContainer from "../NavBarContainer/navBar";
import {ImageSlider} from "../ImageSlider";
import InitialPage from "../InitialPage/initialPage";
import ProductsContainer from "../ProductsContainer/";
import Login from "../LoginContainer";
import ProductCategories from "../ProductCategories";
import ProductContainer from "../ProductContainer"
import Cart from "../CartContainer";
import About from "../AboutContainer";
import Contact from "../ContactContainer";
import {BACKGROUND_IMAGES } from "../../constants";
// import Footer from "../FooterContainer"

const StyledMain = styled.div`

  background-size: cover;
  height: 100vh;
  width: 100%;
  background: ${props =>  `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat fixed center;`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: ${props =>  `${props.pageTransition}`};
  text-align: center;
  overflow: hidden !important;
 
`;
const images =[
{ NAME: "slide8" },
{ NAME: "slide5"},
{ NAME: "slide15" },
{ NAME: "slide6" },
{ NAME: "slide3" },
{ NAME: "slide10" },
{ NAME: "slide13" },
{ NAME: "slide11" },
{ NAME: "slide12" },
{ NAME: "slide4" },
];

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      homeImage :"",
      heigth: 0,
      initialEffect:"all 1.8s"
    }
  }
  
locationSelector = (location)=>{
  switch (location) {
    case "/home":

      return this.state.homeImage;
    case "/about":
      return BACKGROUND_IMAGES.ABOUT;
    case "/contact":
      return BACKGROUND_IMAGES.CONTACT;
    default:
      return BACKGROUND_IMAGES.DEFAULT;
  }
}
componentDidMount() {
  this.setState({
    homeImage :"slide14",
      heigth: 0,
      initialEffect:"all 1.8s"
  })
}

getImageSlider = (image)=>{

this.setState({
  homeImage: image
})

}

setInitialEffect = () =>{

}

  render() {
    return (
      <>
      {/* eslint-disable-next-line no-restricted-globals */}
        {location.pathname === "/" ? (
          <Route exact path="/" component={InitialPage} />
        ) : (
           //eslint-disable-next-line no-restricted-globals 
          <StyledMain  img ={this.locationSelector(location.pathname)}
          pageTransition ={this.state.initialEffect} 
          >
            {/* eslint-disable-next-line no-restricted-globals */}
               {location.pathname == "/home" ?
            <ImageSlider getImageSlider = {this.getImageSlider} IMAGES ={images}/>
            :null
             } 
            <Route component={NavBarContainer} />
             <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cart" component={Cart} /> Contact
                <Route exact path="/contact" component={Contact} /> 
                <Route exact path="/about" component={About} /> 
                <Route exact path="/gallery/:name" component={ProductsContainer} /> 
                <Route exact path="/gallery" component={ProductCategories} />
                <Route path="/gallery/:name/:id" component={ProductContainer} /> 
            </Switch> 
              {/* eslint-disable-next-line no-restricted-globals */}
            {/* {location.pathname == "/home" ?
            null:<Route component={Footer} />
            } */}
          </StyledMain>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { home: { initialEffect, homeImage }} = state;
  console.log("homeImage", homeImage)
  return {
    initialEffect, //se recive delay de transition o no, para evitar retardo en carga inicial de imagen
    homeImage  //se 
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // fetchloggedUser: () => dispatch(fetchloggedUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
