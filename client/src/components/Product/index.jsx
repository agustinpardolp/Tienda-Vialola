import React, { useState, useCallback, useEffect } from "react";
import Slider from "../Slider";
import { connect } from "react-redux";
import styled from "styled-components";
import Breadcrumb from "../Breadcrumb";
import ModalViewer from "../Modals&Spinners/modalViewer";
import SerieCards from "../Series/serieCards";
import { fetchProductsBySerie } from "../../redux/product/actions/product-actions";
import Spinner from "../Modals&Spinners/spinner";

const StyleDiv = styled.div`
  padding: 100px;
  img {
    margin: auto;
    width: 50%;
  }
`;

const StyledImg = styled.img`
  display: inline-block !important;
  /* max-width: 80%; */
  /* max-height: 70%; */
  width: auto;
  height: auto;
  justify-self: end;
  margin-right: 8%;
  object-fit: contain;
  height: 100%;
  align-self: center;
`;

const StyledProductContainer = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInfo = styled.div`
  li {
    list-style: none;
    margin-bottom: 5%;
    text-transform: capitalize;
  }
  figcaption {
    text-align: initial;
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

const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: repeat(3, 0.5fr);
  padding: 3%;
  height: inherit;
`;

const StyledBackButton = styled.span`
  background: blue;
`;

function Product(props) {
  let {
    match: { params },
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [imgInfo, setImgInfo] = useState({
    description: "",
    serie: "",
    category: "",
    stock: 0,
  });
  useEffect(() => {
    props.fetchProductsBySerie(params.serie);
    return () => {
      setSelectedImage({});
    };
  }, []);

  // const toggleModal = (product) => {
  //   setCurrentImage(product);
  //   setIsModalOpen(!isModalOpen);
  // };

  const handleChangeImage = (selectedProduct) => {
    console.log(selectedProduct);
    setSelectedImage(selectedProduct.img);
    setImgInfo({
      ...imgInfo,
      name: selectedProduct.name,
      description: selectedProduct.description,
      serie: selectedProduct.serie.name,
      category: selectedProduct.category.name,
      stock: selectedProduct.stock,
    });
  };
  const baseUrl = "/images/img-products/paints";
  return (
    <>
      {!props.data.length ? (
        <Spinner></Spinner>
      ) : (
        <>
          <StyledProductContainer>
            <StyledImageContainer>
              <StyledImg
                src={`/images/img-products/${props.data[0].category.name}/${
                  selectedImage || props.data[0].img
                }`}
              />
              <StyledInfo>
                <figcaption>
                  <ul>
                    <li>
                      <h4>Title: </h4>
                      {`${imgInfo.name || props.data[0].name}`}
                    </li>
                    <li>
                      <h4>Category: </h4>
                      {`${imgInfo.category || props.data[0].category.name}`}
                    </li>
                    <li>
                      <h4>Serie: </h4>
                      {`${imgInfo.serie || props.data[0].serie.name}`}
                      <br></br>
                      Private Colletion
                    </li>
                    <li>
                      <h4>Description: </h4>
                      {`${imgInfo.description || props.data[0].description}`}
                    </li>
                  </ul>
                  <p>Prints available, please send a coment</p>
                </figcaption>
                {/* <StyledBackButton>Back</StyledBackButton> */}
              </StyledInfo>
            </StyledImageContainer>
          </StyledProductContainer>

          <Slider products={props.data} handleChangeImage={handleChangeImage} />

          {/* <StyledPhotoGrid>
            {props.data.length &&
              props.data.map((product) => {
                return (
                  <SerieCards
                    serie={product}
                    handleChangeImage={handleChangeImage}
                    key={product.id}
                  />
                );
              })}
          </StyledPhotoGrid> */}
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    product: { data },
    products: { data: products, status },
  } = state;

  return {
    data,
    products,
    status,
  };
};

export default connect(mapStateToProps, { fetchProductsBySerie })(Product);
