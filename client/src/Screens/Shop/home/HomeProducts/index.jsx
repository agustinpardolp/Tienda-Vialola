import React from "react";
import styled from "styled-components";
import StyledCard from "../../../../components/Card";
import { Card, Icon, Image } from "semantic-ui-react";

const StyledHomeProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 50vh;
  margin-left: 10%;
  margin-right: 10%;
  margin-top:3%;
  height: 60vh;
  .card {
    justify-self: center;
    margin:14px 14px;
  }
`;

export default function HomeProducts({ shopProducts }) {
  return (
    <StyledHomeProducts>
      {shopProducts &&
        shopProducts.map((productShop) => {
          return (
            <Card>
              <StyledCard element={productShop}/>
              <Card.Content>
                <Card.Header>{productShop.name}</Card.Header>
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
    </StyledHomeProducts>
  );
}
