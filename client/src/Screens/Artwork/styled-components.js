import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledImg = styled.img`
  display: inline-block !important;
  width: auto;
  height: 100%;
  justify-self: flex-start;
  object-fit: contain;
  height: 100%;
  align-self: center;
  position: relative;

  img {
    height: 100%;
    width: auto;
  }

  @media ${DEVICES_MAX_WIDTH.laptopL} {
    justify-self: center;
    height: 100%;
    width: 100%;
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

const StyledInfo = styled.div`
  text-align: right;
`;

const StyledImageContainer = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 30px;
  grid-template-rows: 75vh;
  height: 100%;
  justify-content: flex-start;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(2) {
      grid-row-start: 1;
    }
  }
`;

const StyledZoomIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 40%;
  top: 25%;
  font-size: 2rem;
  color: var(--mineShaft);
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
  @media ${DEVICES_MAX_WIDTH.mobileL} {
    display: block;
  }
`;

const StyledLink = styled.span`
  margin-left: 10px;
`;

export {
  StyledImageContainer,
  StyledZoomIcon,
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
