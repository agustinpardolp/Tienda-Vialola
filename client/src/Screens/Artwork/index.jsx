import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchArtworksBySerie } from "../../redux/artworks/actions/artworks-actions";
import Card from "../../components/Card";

import {
  StyledImageContainer,
  StyledArtworkContainer,
  StyledImg,
  StyledSeriesGrid,
  StyledImageSelectorContainer,
} from "./styled-components";
import ArtworkInfo from "./components/ArtworkInfo";
import ArtworkBreadcrum from "./components/ArtworkBreadcumb";
import { handleBreadcrum } from "./constants";
import { PATHS } from "../../routes/constants";

function Artwork({ artworksBySerie, match, fetchArtworksBySerie, history }) {
  let { params } = match;

  const [selectedImage, setSelectedImage] = useState();
  const [imgInfo, setImgInfo] = useState({
    description: "",
    serie: "",
    category: "",
    stock: 0,
  });

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
      price: selectedArtwork.price,
      priceReproduction: selectedArtwork.priceReproduction,
      allowOriginal: selectedArtwork.allowOriginal,
      allowReproduction: selectedArtwork.allowReproduction,
    });
  }, []);

  return (
    <>
      {!artworksBySerie.length ? (
        <Spinner />
      ) : (
        <>
          <StyledArtworkContainer>
            <StyledImageSelectorContainer>
              <ArtworkBreadcrum
                items={handleBreadcrum(
                  PATHS.gallery,
                  params.serie,
                  `/gallery/${params.category}/`
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
                      />
                    );
                  })}
              </StyledSeriesGrid>
            </StyledImageSelectorContainer>
            <StyledImageContainer>
              <StyledImg
                small={`/images/img-artwork/${
                  artworksBySerie[0].category.name
                }/${selectedImage || artworksBySerie[0].img}`}
                large={`/images/img-artwork/${
                  artworksBySerie[0].category.name
                }/${selectedImage || artworksBySerie[0].img}`}
                hideDownload
              />
              <ArtworkInfo
                imgInfo={imgInfo.name ? imgInfo : artworksBySerie[0]}
                artworksBySerie={artworksBySerie}
                history={history}
              />
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
