import React from "react";
import styled from "styled-components";

import CardGrid from "../../../../components/CardGrid";
import Card from "../../../../components/Card";

const StyledHomeProducts = styled.div`
  display: flex;
  justify-content: center;
`;

export default function HomeProducts({ shopProducts }) {
  return (
    <StyledHomeProducts>
      <CardGrid row={1} col={4} width='70vw' heigth='50vh' gap='1%'>
        {shopProducts &&
          shopProducts.map((productShop) => {
            return (
              <Card
                element={productShop}
                key={productShop.id}
                category={productShop.category.name}
              />
            );
          })}
      </CardGrid>
    </StyledHomeProducts>
  );
}
