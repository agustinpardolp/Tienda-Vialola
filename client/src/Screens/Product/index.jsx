import React, { useState, useCallback, useEffect } from "react";
import Slider from "../../components/Slider";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Magnifier from "react-magnifier";
import { fetchProductsBySerie } from "../../redux/product/actions/product-actions";
import Spinner from "../../components/Modals&Spinners/spinner";

const StyledImg = styled(Magnifier)`
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

const StyledProductContainer = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInfo = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  height: 100%;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a{
    color:
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
                width={"auto"}
                height={"100%"}
                mgWidth={150}
                mgHeight={150}
              />
              <StyledInfo>
                <div>
                  <Link to={`/gallery/${props.data[0].category.name}`}>back</Link>
                </div>
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
          <Slider products={props.data} handleChangeImage={handleChangeImage} fontSize={"0.8rem"} />
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
