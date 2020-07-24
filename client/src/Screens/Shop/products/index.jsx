import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardGrid from "../../../components/CardGrid";
import StyledCard from "../../../components/Card";
import { Card, Icon, Image } from "semantic-ui-react";
import { fetchArtworks } from "../../../redux/artworks/actions/artworks-actions";

const Products = ({ fetchArtworks, artworks, match }) => {
  const {
    params: { section: pathName },
  } = match;
  console.log(pathName)
  useEffect(() => {
      
    fetchArtworks(pathName);
  }, []);
  console.log("ARTWRKS", artworks)
  return (
    <CardGrid>
      {artworks.length &&
        artworks.map((artwork, i) => {
          return (
            <Card>
            <StyledCard element={artwork}/>
            <Card.Content>
              <Card.Header>{artwork.name}</Card.Header>
              <Card.Meta>
                <span className="date">Nueva coleccion</span>
              </Card.Meta>
              <Card.Description>
                Conoce mas clickeando aca!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                More...
              </a>
            </Card.Content>
          </Card>
          );
        })}
    </CardGrid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    artworks: { data: artworks, status },
  } = state;

  return {
    artworks,
  };
};

export default connect(mapStateToProps, {
  fetchArtworks,
})(Products);
