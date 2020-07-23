import React from "react";
import styled from "styled-components";
import StyledCard from "../../../../components/Card";
import { Card, Icon, Image } from "semantic-ui-react";

const StyledHomeProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50vh;
  margin-left: 10%;
  margin-right: 10%;
  margin-top:3%;
  .card {
    justify-self: center;
  }
`;

export default function HomeProducts({ shopProducts }) {
  return (
    <StyledHomeProducts>
      {shopProducts &&
        shopProducts.map((productShop) => {
          return (
            <Card>
              <StyledCard element={productShop} category={"paints"} />
              <Card.Content>
                <Card.Header>{productShop.name}</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          );
        })}
    </StyledHomeProducts>
  );
}
