import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Magnifier from "react-magnifier";

import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchArtworksBySerie } from "../../redux/artworks/actions/artworks-actions";
import Card from "../../components/Card";

import {
  StyledImageContainer,
  StyledZoomIcon,
  StyledArtworkContainer,
  StyledImg,
  StyledSeriesGrid,
  StyledImageSelectorContainer,
} from "./styled-components";
import ArtworkInfo from "./components/ArtworkInfo";
import ArtworkBreadcrum from "./components/ArtworkBreadcumb";
import { handleBreadcrum } from "./constants";

function Artwork({ artworksBySerie, match, fetchArtworksBySerie, history }) {
  let { params } = match;

  const [selectedImage, setSelectedImage] = useState();
  const [imgInfo, setImgInfo] = useState({
    description: "",
    serie: "",
    category: "",
    stock: 0,
  });
  console.log(history);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    fetchArtworksBySerie(params.serie, params.categoryName);
    return () => {
      setSelectedImage({});
    };
  }, [fetchArtworksBySerie, params.serie, params.category]);

  const handleChangeImage = useCallback((selectedArtwork) => {
    console.log(selectedArtwork)
    setSelectedImage(selectedArtwork.img);
    setImgInfo({
      ...imgInfo,
      name: selectedArtwork.name,
      description: selectedArtwork.description,
      serie: selectedArtwork.serie.name,
      category: selectedArtwork.category.name,
      stock: selectedArtwork.stock,
      price: selectedArtwork.price,
      priceReproduction: selectedArtwork.priceReproduction,
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
            <StyledImageSelectorContainer>
              <ArtworkBreadcrum
                items={handleBreadcrum(
                  params.category,
                  `/gallery`,
                  params.serie,
                  `/gallery/${params.category}`
                )}
                history={history}
              />
              <StyledSeriesGrid>
                {artworksBySerie.length &&
                  artworksBySerie.map((element) => {
                    return (
                      <Card
                        key={element.id}
                        element={element}
                        handleChangeImage={handleChangeImage}
                        category={element.category.name}
                        height="7rem"
                        fontSize="0.7rem"
                      ></Card>
                    );
                  })}
              </StyledSeriesGrid>
              <ArtworkInfo
                imgInfo={imgInfo}
                artworksBySerie={artworksBySerie}
                history={history}
              />
            </StyledImageSelectorContainer>
            <StyledImageContainer>
              <StyledImg
                src={`/images/img-artwork/${artworksBySerie[0].category.name}/${
                  selectedImage || artworksBySerie[0].img
                }`}
              />

              {/* <StyledZoomIcon
                    icon={faSearchPlus}
                    size="1x"
                    style={{ fontSize: "20px", color: "var(--mineShaft)" }}
                    onClick={handleZoom}
                  /> */}
            </StyledImageContainer>
          </StyledArtworkContainer>
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

