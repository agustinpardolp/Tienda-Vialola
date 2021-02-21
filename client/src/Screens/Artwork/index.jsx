import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Magnifier from "react-magnifier";

import Slider from "../../components/Slider";
import Spinner from "../../components/Modals&Spinners/spinner";
import TransitionWrapper from "../../components/transition";
import { fetchArtworksBySerie } from "../../redux/artworks/actions/artworks-actions";

import ArtworkInfo from "./ArtworkInfo";
import {
  StyledImageContainer,
  StyledZoomIcon,
  StyledArtworkContainer,
  StyledImg,
} from "./styled-components";

function Artwork({ artworksBySerie, match, fetchArtworksBySerie }) {
  let { params } = match;

  const [selectedImage, setSelectedImage] = useState();
  const [imgInfo, setImgInfo] = useState({
    description: "",
    serie: "",
    category: "",
    stock: 0,
  });

  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    fetchArtworksBySerie(params.serie, params.categoryName);
    return () => {
      setSelectedImage({});
    };
  }, [fetchArtworksBySerie, params.serie, params.category]);

  const handleChangeImage = useCallback((selectedArtwork) => {
    setSelectedImage(selectedArtwork.img);
    setImgInfo({
      ...imgInfo,
      name: selectedArtwork.name,
      description: selectedArtwork.description,
      serie: selectedArtwork.serie.name,
      category: selectedArtwork.category.name,
      stock: selectedArtwork.stock,
    });
  }, []);

  const handleZoom = useCallback(() => {
    setZoom(!zoom);
  }, [zoom]);

  return (
    <>
      {!artworksBySerie.length ? (
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
                      src={`/images/img-artwork/${
                        artworksBySerie[0].category.name
                      }/${selectedImage || artworksBySerie[0].img}`}
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
                      src={`/images/img-artwork/${
                        artworksBySerie[0].category.name
                      }/${selectedImage || artworksBySerie[0].img}`}
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
              <ArtworkInfo
                imgInfo={imgInfo}
                artworksBySerie={artworksBySerie}
              />
            </StyledImageContainer>
          </StyledArtworkContainer>
          <Slider
            elements={artworksBySerie}
            handleChangeImage={handleChangeImage}
            fontSize={"0.8rem"}
            noTitle={true}
          />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const {
    artworksBySerie: { data: artworksBySerie },
    artworks: { data: artworks, status },
  } = state;

  return {
    artworksBySerie,
    artworks,
    status,
  };
};

export default connect(mapStateToProps, { fetchArtworksBySerie })(Artwork);
