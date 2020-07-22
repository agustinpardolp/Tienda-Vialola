import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Magnifier from "react-magnifier";
import Slider from "../../components/Slider";
import TransitionWrapper from "../../components/transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { fetchArtworksBySerie } from "../../redux/artworks/actions/artworks-actions";
import Spinner from "../../components/Modals&Spinners/spinner";

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
  margin-top: 3%;
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
  top: 20%;
  font-size: 2rem;
  color: var(--darkGrey);
`;

function Artwork(props) {
  let {
    match: { params },
  } = props;

  const [selectedImage, setSelectedImage] = useState();
  const [imgInfo, setImgInfo] = useState({
    description: "",
    serie: "",
    category: "",
    stock: 0,
  });

  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    props.fetchArtworksBySerie(params.serie);
    return () => {
      setSelectedImage({});
    };
  }, []);

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
  const baseUrl = "/images/img-products/paints";
  return (
    <>
      {!props.data.length ? (
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
                      src={`/images/img-products/${
                        props.data[0].category.name
                      }/${selectedImage || props.data[0].img}`}
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
                      src={`/images/img-products/${
                        props.data[0].category.name
                      }/${selectedImage || props.data[0].img}`}
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
                  <Link to={`/gallery/${props.data[0].category.name}`}>
                    back
                  </Link>
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
          </StyledArtworkContainer>
          <Slider
            elements={props.data}
            handleChangeImage={handleChangeImage}
            fontSize={"0.8rem"}
          />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    artworksBySerie: { data },
   artworks: { data:artworks, status },
  } = state;

  return {
    data,
   artworks,
    status,
  };
};

export default connect(mapStateToProps, { fetchArtworksBySerie })(Artwork);
