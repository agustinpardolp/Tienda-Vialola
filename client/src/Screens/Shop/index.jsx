import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Dividers from "../../components/Divider";
import { PATHS } from "../../routes/constants";
import { FadeIn } from "../../utils/baseStyleAnimations";
import {
  StyledMain,
  StyledShopImage,
  StyledContainer,
  StyledTextContainer,
} from "./styled-components";

const Shop = () => {
  return (
    <FadeIn duration="1s">
      <StyledMain>
        <StyledContainer>
          <Dividers
            titleElements={[
              {
                name: "Shop",
                id: 1,
              },
            ]}
          />
          <StyledShopImage>
            <StyledTextContainer>
              <h2>
                <FormattedMessage id="shop.title" />
              </h2>
              <p>
                <FormattedMessage
                  id="shop.paragraph"
                  values={{
                    link: (
                      <Link to={PATHS.contact}>
                        <FormattedMessage id="shop.here" />
                      </Link>
                    ),
                  }}
                />
              </p>
            </StyledTextContainer>
          </StyledShopImage>
        </StyledContainer>
      </StyledMain>
    </FadeIn>
  );
};
export default Shop;
