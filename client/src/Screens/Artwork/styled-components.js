
import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";
import ModalImage from "react-modal-image";

const StyledImg = styled(ModalImage)`
  display: inline-block !important;
  width: auto;
  height: 75vh;
  justify-self: flex-start;
  object-fit: contain;
  align-self: center;
  position: relative;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    width: 100%;
    height: 100%;
  }

  @media ${DEVICES_MAX_WIDTH.mobileL} {
    padding: 1rem 1rem 0 1rem;
  }
`;

const StyledArtworkContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 2%;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: 1fr;
    &:nth-of-type(2) {
      order: 1;
    }
  }
`;

const StyledImageContainer = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 30px;
  justify-content: flex-start;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(2) {
      grid-row-start: 1;
      justify-content: center;
    }
  }
`;

const StyledSeriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 6px;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const StyledImageSelectorContainer = styled.div`
  height: 100%;
  padding: 3rem 3rem 0 3rem;

  @media ${DEVICES_MAX_WIDTH.laptopL} {
    padding: 1rem 1rem 0 1rem;
  }
`;

const StyledBreadcrumb = styled.div`
  text-align: initial;

  @media ${DEVICES_MAX_WIDTH.laptop} {
    text-align: ${(props) => (props.position ? props.position : "initial")};
  }
`;
const StyledBreadcrumbSection = styled.span`
  color: var(--mineShaft);
  cursor: pointer;
  margin: 3px;
  text-transform: uppercase;
  &:hover {
    color: var(--doveGray);
  }
  &:not(:last-child) {
    &::after {
      content: "/";
      margin: 3px;
    }
  }
`;
const StyledInfo = styled.div`
  margin: 10px;
  text-align: right;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    text-align: center;
  }
`;

const StyledList = styled.div`
  font-weight: 700;
  list-style: none;
  @media ${DEVICES_MAX_WIDTH.mobileL} {
    margin-bottom: 10px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: block;
    justify-content: center;
  }
`;

const StyledLink = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

export {
  StyledImageContainer,
  StyledArtworkContainer,
  StyledInfo,
  StyledImg,
  StyledSeriesGrid,
  StyledImageSelectorContainer,
  StyledBreadcrumb,
  StyledBreadcrumbSection,
  StyledList,
  StyledContainer,
  StyledLink,
};
