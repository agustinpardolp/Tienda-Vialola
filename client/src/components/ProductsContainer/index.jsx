import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Spinner from "../Modals&Spinners/spinner"
import { fetchProducts } from "../../redux/products/actions/products-actions";
import Footer from "../FooterContainer/";
// import { receiveCreatedCart } from "../../redux/cart/actions/cart-actions";


const Container = styled.div`
  width: 250px;
  height: 300px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  margin-bottom: 4%;
  background: ${props =>
    `url("/images/img-products/${props.img}") no-repeat center;`};
  background-size: cover;
  background-position: center;
  background-color: black;
  background-size: cover;
  cursor: pointer;
  display: flex;
  -webkit-box-shadow: 0 0 5px #000;
  box-shadow: 0 0 5px #000;
`;

  const ProductsMainContainer = styled.div`
    display: grid;
    height: 52vh;
    grid-template-columns: 30% 50%;
    margin-top: 5%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
  `;

  const Styledmage = styled.div`
  background: ${props =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  background-size: contain;
  align-self:center;
  height: 85%;
  width: 50%;

    display:flex;
    align-content:center;
    justify-content:flex-end;
  `;

  const StyledPhotoGrid = styled.div`
  display:grid;
  grid-template-columns:25% 25% 25% 25% ;
  grid-template-rows:25% 25% 25% 25% ;
  padding:3%;
  `;

  const StyledPhotoDiv = styled.div`
  margin:1%;
  background: ${props =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  transition-duration: 2s;
     &:hover {
      transform: scale(1.1, 1.1);
  } 
  `;

  const StyledInfo = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    ul{
      list-style:none;
    }
  `;

  const StyledMainDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  `;

  const StyledButton = styled(Link)`
    
  `;

function Products(props) {
  const {
    match: {
      params: { name: pathName }
    }
  } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [photo, setPhoto] = useState (props.products[0])
  
  useEffect(() => {
    const abortController = new AbortController()
    props.fetchProducts(pathName);
    // return () => {
    //   abortController.abort()
    // }
  }, []);
  

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const addToCart = product => {
    if (!cart.length) {
      var newCart = {
        product: product,
        quantity: 1,
        totalPrice: product.price
      };
      setCart([newCart]);
    }

    if (cart.length > 0) {
      let exist = true;
      for (let i = 0; i < cart.length; i++) {
        let { id } = cart[i].product;
        if (id == product.id) {
          let newCartIncrement = {
            product: product,
            quantity: (cart[i].quantity += 1),
            totalPrice: (cart[i].totalPrice += product.price)
          };
          exist = false;
          cart[i] = newCartIncrement;
        }
      }
      if (exist) {
        var newCart = {
          product: product,
          quantity: 1,
          totalPrice: product.price
        };
        let newCartList = [...cart, ...[newCart]];
        setCart(newCartList);
      }
    }

    props.receiveCreatedCart(cart);
  };
  const onSelectPhoto = (product)=>{
     setPhoto(product)
  }

  return (
    
    <>  
    {console.log("products: ",props.products, "photo", photo)}
       {props.products && props.products.length ?
       
    <ProductsMainContainer>
      <StyledPhotoGrid>
      {props.products.length &&
        props.products.map(product=>{
          return (
            <StyledPhotoDiv key= {product.id} img={product.img} category = {product.category.name} 
            onClick ={()=>{onSelectPhoto(product)}}>

            </StyledPhotoDiv>
          )
        }
        
        )}
      </StyledPhotoGrid>
       
      {/* <Gallery photos={img} onClick={openLightbox} /> */}
      <StyledMainDiv>
      <Styledmage  img={photo?photo.img:props.products[0].img} category = {photo?photo.category.name:props.products[0].category.name}>
      </Styledmage>
      <StyledInfo>
          <ul>
            <li><h3>{photo?photo.name:props.products[0].name}</h3></li>
            <li>{photo?photo.description:props.products[0].description}</li>
          </ul>
        </StyledInfo>
      </StyledMainDiv>
     
    </ProductsMainContainer>:<Spinner></Spinner>
  }
  <Footer back = "/gallery"/>
  </>
  );
}
const mapStateToProps = (state, ownProps) => {
  const {
    products: { data: products, status },
    productsCategories: { data: productsCategories },
  } = state;
  return {
    products,
    productsCategories
  };
};

export default connect(mapStateToProps, { fetchProducts, 
  // receiveCreatedCart  

})(
  Products
);
