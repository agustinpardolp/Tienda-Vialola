import styled from "styled-components";
import { rowHandler } from "./index";
import { DEVICES_MAX_WIDTH, MEDIA_SIZES } from "../../constants";

const StyledPhotoGrid = styled.div`
  display: grid;
  grid-gap: ${(props) => (props.gap ? props.gap : "0.5%")};
  grid-template-columns: ${(props) =>
    props.col ? `repeat(${props.col}, 1fr)}` : "repeat(5, 0.5fr)"};
  padding: 3%;
  height: ${(props) => (props.heigth ? `${props.heigth}` : "100%")};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};

  @media ${DEVICES_MAX_WIDTH.tablet} {
    display: block;
    grid-template-columns: repeat(2, 0.5fr);
    height: 100%;
    width: 100%;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: repeat(2, 50%);
    /* grid-template-rows: ${(props) =>
      props.elementsLength &&
      `repeat(
        ${rowHandler(MEDIA_SIZES.laptop, 2, props.elementsLength)},
        100%
      )`}; */
  }
  @media ${DEVICES_MAX_WIDTH.mobileL} {
    display: block;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${DEVICES_MAX_WIDTH.mobileM} {
    display: block;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${DEVICES_MAX_WIDTH.mobileS} {
    display: block;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledPhotoGrid };
