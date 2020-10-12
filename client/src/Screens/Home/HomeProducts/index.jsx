import React from "react";
import styled from "styled-components";
import StyledCard from "../../../components/Card";
import { Icon, Image } from "semantic-ui-react";
import CardGrid from "../../../components/CardGrid";
import Card from "../../../components/Card";

const StyledHomeProducts = styled.div``;

export default function HomeProducts({ shopProducts }) {
  return (
    <StyledHomeProducts>
      <CardGrid row={1} col={4}>
        {shopProducts &&
          shopProducts.map((productShop) => {
            return (
              <Card
                element={productShop}
                key={productShop.id}
                category={productShop.category.name}
                // path={`/gallery/${productShop.category.name}/${serie.name}`}
              />

              // <Card>
              //   <StyledCard element={productShop}/>
              //   <Card.Content>
              //     <Card.Header>{productShop.name}</Card.Header>
              //     <Card.Meta>
              //       <span className="date">Nueva coleccion</span>
              //     </Card.Meta>
              //     <Card.Description>
              //       Conoce mas clickeando aca!
              //     </Card.Description>
              //   </Card.Content>
              //   <Card.Content extra>
              //     <a>
              //       More...
              //     </a>
              //   </Card.Content>
              // </Card>
            );
          })}
      </CardGrid>
    </StyledHomeProducts>
  );
}
