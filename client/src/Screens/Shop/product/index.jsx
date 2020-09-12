import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Magnifier from "react-magnifier";
import { Button } from "semantic-ui-react";
import TransitionWrapper from "../../../components/transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { receiveCreatedCart } from "../../../redux/cart/actions/cart-actions";
import { fetchProductById } from "../../../redux/product/actions/product-actions";
import Spinner from "../../../components/Modals&Spinners/spinner";
import ImageGroup from "../../../components/ImageGroup";
import {useCart} from "../../../hooks/index";

const StyledImg = styled.img`
  display: inline-block !important;
  width: auto;
  height: 100%;
  justify-self: end;
  margin-right: 4%;
  object-fit: contain;
  height: 100%;
  align-self: center;
  img {
    height: 100%;
    width: auto;
  }
`;

const StyledArtworkContainer = styled.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInfo = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  height: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figcaption {
    display: grid;
    align-items: center;
    text-align: justify;
  }
  li {
    list-style: none;
    margin-bottom: 5%;
    text-transform: capitalize;
  }

  h4 {
    text-transform: capitalize;
  }
`;

const StyledImageContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 75vh;
  align-items: center;
`;

const StyledZoomIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 40%;
  top: 30%;
  font-size: 2rem;
  color: var(--darkGrey);
`;

const StyledImagesContainer = styled.div`
  width: 100%;
  height: 24%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Product = ({
  product,
  fetchProductById,
  receiveCreatedCart,
  status,
  match,
  productsToCart,
}) => {
  let { params } = match;
  let {setToCart} = useCart(productsToCart, receiveCreatedCart)
  const [selectedImage, setSelectedImage] = useState();
  const [imgInfo, setImgInfo] = useState({
    description: "",
    serie: "",
    category: "",
    stock: 0,
  });

  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    fetchProductById(params.productId);
    return () => {
      setSelectedImage({});
    };
  }, [params.productId, fetchProductById, setSelectedImage]);

  const handleChangeImage = (selectedArtwork) => {
    setSelectedImage(selectedArtwork.img);
    setImgInfo({
      ...imgInfo,
      name: selectedArtwork.name,
      description: selectedArtwork.description,
      serie: selectedArtwork.serie.name,
      category: selectedArtwork.category.name,
      stock: selectedArtwork.stock,
    });
  };

 
  const handleZoom = () => {
    setZoom(!zoom);
  };
  const baseUrl = "/images/img-artwork/paints";
  return (
    <>
      {status !== "LOADED" ? (
        <Spinner></Spinner>
      ) : (
        <>
          <StyledArtworkContainer>
            <StyledImageContainer>
              {zoom ? (
                <>
                  <TransitionWrapper>
                    <StyledImg
                      as={Magnifier}
                      width={"auto"}
                      height={"100%"}
                      mgWidth={150}
                      mgHeight={150}
                      mgShape={"square"}
                      src={`/images/img-products/${product.section.name}/${product.img1}`}
                    />
                  </TransitionWrapper>
                  <StyledZoomIcon
                    icon={faSearchPlus}
                    size="1x"
                    onClick={handleZoom}
                  />
                </>
              ) : (
                <>
                  <TransitionWrapper>
                    <StyledImg
                      src={`/images/img-products/${product.section.name}/${product.img1}`}
                    />
                  </TransitionWrapper>

                  <StyledZoomIcon
                    icon={faSearchPlus}
                    size="1x"
                    style={{ fontSize: "20px", color: "var(--darkGrey)" }}
                    onClick={handleZoom}
                  />
                </>
              )}

              <StyledInfo>
                <div>
                  <Link to={`/shop/prints`}>back</Link>
                </div>
                <figcaption>
                  <ul>
                    <li>
                      <h4> {product.name.toUpperCase()}</h4>
                    </li>
                    <li>
                      <h4>Description: </h4>
                      {`${product.description || product.description}`}
                    </li>
                    <Button onClick={() => setToCart(product)}>
                      Add to cart
                    </Button>
                  </ul>
                  <p>Frame is not included. All prints signed and numbered</p>
                </figcaption>
              </StyledInfo>
            </StyledImageContainer>
          </StyledArtworkContainer>
          <ImageGroup element={product} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    product: { data: product, status },
    cart: { data: productsToCart },
  } = state;

  return {
    product,
    status,
    productsToCart,
  };
};

export default connect(mapStateToProps, {
  fetchProductById,
  receiveCreatedCart,
})(Product);
