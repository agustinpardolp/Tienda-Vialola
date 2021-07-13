import React from "react";
import CardGrid from "../../../../components/CardGrid";
import Card from "../../../../components/Card";
import { StyledHomeProducts } from "./styled-components";

export default function HomeProducts({ shopProducts }) {
  return (
    <StyledHomeProducts>
      <CardGrid row={1} col={4} width="90vw"  gap="1%">
        {shopProducts &&
          shopProducts.map((productShop) => {
            return (
              <Card
                element={productShop}
                key={productShop.id}
                category={productShop.category.name}
                backgroundSize="contain"
                height="45vh"
              />
            );
          })}
      </CardGrid>
    </StyledHomeProducts>
  );
}
