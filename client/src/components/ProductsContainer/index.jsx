import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useModal from "react-hooks-use-modal";
import {FadeIn} from '../ImageSlider/style';
import ModalViewer from "../Modals&Spinners/modalViewer";
import { connect } from "react-redux";
import {
  Button,
  Dropdown,
  Menu,
  Modal,
  Image,
  Header,
} from "semantic-ui-react";
// import { Button, Menu, MenuItem } from "@material-ui/core/";
import styled from "styled-components";
import Spinner from "../Modals&Spinners/spinner";
import { OverlayAnimation } from "../../utils/baseStyleAnimations";
import { fetchProducts } from "../../redux/products/actions/products-actions";
import Footer from "../FooterContainer/";
import { NAVBAR } from "../../constants";
import { spawn } from "redux-saga/effects";
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
  background: ${(props) =>
    `url("/images/img-products/${props.img}") no-repeat center;`};
  background-size: cover;
  background-position: center;
  background-color: white;
  background-size: cover;
  cursor: pointer;
  display: flex;
  -webkit-box-shadow: 0 0 5px #000;
  box-shadow: 0 0 5px #000;
`;

const ProductsMainContainer = styled.div`
  display: grid;
  height: 52vh;
  grid-template-columns: 100%;
  margin-top: 5%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
`;

const Styledmage = styled.div`
  background: ${(props) =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  background-size: contain;
  align-self: center;
  height: 85%;
  width: 50%;

  display: flex;
  align-content: center;
  justify-content: flex-end;
  overflow: scroll;
`;

const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: auto;
  padding: 3%;
  height: inherit;
`;

const StyledPhotoDiv = styled.div`
  margin: 1%;
  background: ${(props) =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  background-size: cover;
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
  ul {
    list-style: none;
  }
`;

const StyledMainDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubMenuContainer = styled.div`
  justify-content: space-evenly;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 10%;

  h3 {
    color: ${(props) =>
      props.format
        ? "var(--activeColorFont)!important"
        : "var(--darkGrey) !important"};
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
`;

const OptionsMenu = styled.div`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid #efeeee;
  /* li {
    margin: 2%;
    text-decoration: none !important;
    color: ${(props) =>
      props.format
        ? "var(--activeColorFont)!important"
        : "var(--darkGrey) !important"};
    font-size: ${(props) => (props.format ? "26px" : "20px")};
    li:hover {
      color: grey !important;
      transition: all 0.4s ease 0s;
    }
  } */
`;

const StyledButtons = styled(Dropdown)`
  font-family: var(--fontVar) !important;
  font-size: 1.2rem !important;
  text-transform: capitalize !important;
  margin-right: 4% !important;
  text-decoration: none !important;
  color: ${(props) =>
    props.format
      ? "var(--activeColorFont)!important"
      : "var(--darkGrey) !important"};
  font-size: ${(props) => (props.format ? "26px" : "20px")};
  &:hover {
    color: grey !important;
    transition: all 0.4s ease 0s;
  }
`;

const StylePhotoPreview = styled.div`
  height: 700px;
  width: 700px;
  background: ${(props) =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  object-fit: contain;
  background-size: contain;
`;

const StyledModalContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  opacity: 0.8;
`;

const StyledModal = styled(Modal)``;

function Products(props) {
  const {
    match: {
      params: { name: pathName },
    },
  } = props;

  const [currentImage, setCurrentImage] = useState({});
  const [cart, setCart] = useState([]);
  const [photo, setPhoto] = useState(props.products[0]);
  // const [products, setProducts] = useState(props.products);
  const [menu, setOpenMenu] = useState(false);
  // const [Modal, open, close, isOpen] = useModal("root", {
  //   preventScroll: true,
  // });

  useEffect(() => {
    props.fetchProducts(pathName);
    // setProducts(props.products);
    menuOptionHandler(props.productsCategories);
  }, []);

  const addToCart = (product) => {
    if (!cart.length) {
      var newCart = {
        product: product,
        quantity: 1,
        totalPrice: product.price,
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
            totalPrice: (cart[i].totalPrice += product.price),
          };
          exist = false;
          cart[i] = newCartIncrement;
        }
      }
      if (exist) {
        var newCart = {
          product: product,
          quantity: 1,
          totalPrice: product.price,
        };
        let newCartList = [...cart, ...[newCart]];
        setCart(newCartList);
      }
    }

    props.receiveCreatedCart(cart);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedCategory, setselectedCategory] = useState();
  const openLightbox = (image, category) => {
    setIsModalOpen(true);

    setSelectedImage(image);
    setselectedCategory(category);
  };

  const onSelectPhoto = (product) => {
    setPhoto(product);
  };
  const openSubmenu = () => {
    setOpenMenu(true);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  const menuOptionHandler = (productsCategories) => {
    if (productsCategories.length) {
      let selectedSeries =
        productsCategories &&
        productsCategories.filter(
          (productCategory) => productCategory.name === pathName
        );
      const [objet] = selectedSeries;
      let { series } = objet;
      return series;
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("event", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setOpenModal(false);
  // };
  const toggleModal = (product) => {
  
    setCurrentImage(product)
    setIsModalOpen(!isModalOpen);
  };
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  return (
    <>
      <SubMenuContainer>
        <h3>{pathName}</h3>
        <OptionsMenu>
          {NAVBAR.SUBMENU &&
            NAVBAR.SUBMENU.map((option) => {
              return (
                <>
                  {option.NAME === "Series" ? (
                    <StyledButtons item text={option.NAME}>
                      <Dropdown.Menu>
                        {props.productsCategories && props.productsCategories.length ? (
                          menuOptionHandler(props.productsCategories).map(
                            (menuElement) => {
                              return (
                                <Dropdown.Item onClick={closeMenu}>
                                  {menuElement.name}
                                </Dropdown.Item>
                              );
                            }
                          )
                        ) : (
                          <Dropdown.Item onClick={closeMenu}>
                            {" "}
                            All
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </StyledButtons>
                  ) : (
                    <StyledButtons
                      item
                      text={option.NAME}
                      icon={null}
                    ></StyledButtons>
                  )}
                </>
              );
            })}
        </OptionsMenu>
      </SubMenuContainer>
      {props.products && props.products.length ? (
        <StyledPhotoGrid>
          {props.products.map((product, i) => {
            return (
              <>
                <StyledPhotoDiv
                  key={product.id}
                  img={product.img}
                  category={product.category.name}
                  onClick={(e) => toggleModal(product)}
                ></StyledPhotoDiv>
              </>
              //   <StyledModal size='small' trigger= {<StyledPhotoDiv
              //   key={product.id}
              //   img={product.img}
              //   category={product.category.name}
              //   onClick={(e) => openLightbox(product.img, product.category.name)}
              //   ></StyledPhotoDiv>}>
              //   <Modal.Header>{product.category.name}</Modal.Header>
              //   <Modal.Content image>
              //     <Image
              //       wrapped
              //       size="big"
              //       src={`/images/img-products/${product.category.name}/${product.img}`}
              //     />
              //     <Modal.Description>
              //     <Header>{product.name}</Header>
              //       <p>
              //         {product.description}
              //       </p>
              //         <p>Serie: {product.serie.name}</p>
              //     </Modal.Description>
              //   </Modal.Content>
              // </StyledModal>
            );
          })}
          <FadeIn duration="2s" delay="0.5s">
          <ModalViewer
            width= "60%"
            height="80%"
            color='ligthWhite'
            backgroundClose={true}
            toogleFunction={toggleModal}
            show = {isModalOpen}
            imageData={currentImage}
          ></ModalViewer>
          </FadeIn>
        </StyledPhotoGrid>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    products: { data: products, status },
    productsCategories: { data: productsCategories },
  } = state;
  console.log(productsCategories, "products");
  return {
    products,
    productsCategories,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  // receiveCreatedCart
})(Products);

// <SubMenuContainer>
// <h3>{pathName}</h3>
// <OptionsMenu>
//   {NAVBAR.SUBMENU &&
//     NAVBAR.SUBMENU.map((option) => {
//       return (
//         <>
//      <StyledButton
//       aria-controls="simple-menu"
//       aria-haspopup="true"
//       onClick={handleClick}
//       variant="text"
//       disableFocusRipple={true}
//     >
//       {option.NAME}
//     </StyledButton>
//           {option.NAME === "Series"?
//           <StyledMenu
//           anchorEl={anchorEl}
//           elevation={0}
//           getContentAnchorEl={null}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "center",
//           }}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           >
//             {menuOptionHandler(props.productsCategories).length
//               ? menuOptionHandler(props.productsCategories).map(
//                   (menuElement) => {

//                     return (
//                       <MenuItem onClick={closeMenu}>
//                         {menuElement.name}
//                       </MenuItem>
//                     );
//                   }
//                 )
//               : <MenuItem onClick={closeMenu}>
//                 All
//             </MenuItem>}
//           </StyledMenu>:null
//     }
//         </>
//       );
//     })}
// </OptionsMenu>
// </SubMenuContainer>
// {props.products && props.products.length ? (

// <StyledPhotoGrid>
//   {props.products.map((product, i) => {
//     return (
//       <StyledPhotoDiv
//         key={product.id}
//         img={product.img}
//         category={product.category.name}
//         onClick={() => openLightbox(i)}
//       ></StyledPhotoDiv>
//     );
//   })}

//   <Modal>
//     <StyledModalContainer>
//       <StylePhotoPreview
//         img={props.products[currentImage].img}
//         category={props.products[currentImage].category.name}
//         onClick={close}
//       ></StylePhotoPreview>
//       <Button>See more...</Button>
//     </StyledModalContainer>
//   </Modal>
// </StyledPhotoGrid>
// ) : (

// <Spinner></Spinner>
// )}
