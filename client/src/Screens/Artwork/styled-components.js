import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledImg = styled.img`
  display: inline-block !important;
  width: auto;
  height: 100%;
  justify-self: flex-start;
  margin-right: 4%;
  object-fit: contain;
  height: 100%;
  align-self: center;
  position: relative;

  img {
    height: 100%;
    width: auto;
  }
`;

const StyledArtworkContainer = styled.div`
  margin: 2%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
`;

const StyledInfo = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  height: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figcaption {
    display: grid;
    align-items: center;
    text-align: justify;
  }
  li {
    list-style: none;
    margin-bottom: 5%;
    text-transform: capitalize;
  }

  h4 {
    text-transform: capitalize;
  }
`;

const StyledImageContainer = styled.div`
  display: grid;
  grid-column-gap: 30px;
  justify-content: flex-start;
  grid-template-rows: 75vh;
  align-items: center;
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
  margin: 8rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`;
const StyledCategoryTittle = styled.div`
  text-decoration: none !important;
  transition: all 0.5s;
  position: absolute;
  color: var(--wildSand) !important;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  :hover {
    color: var(--wildSand);
    transition: all 0.4s ease 0s;
  }
`;
export {
  StyledImageContainer,
  StyledZoomIcon,
  StyledArtworkContainer,
  StyledInfo,
  StyledImg,
  StyledSeriesGrid,
  StyledCategoryTittle
};

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styled from "styled-components";

// const StyledImg = styled.img`
//   display: inline-block !important;
//   width: auto;
//   height: 100%;
//   justify-self: end;
//   margin-right: 4%;
//   object-fit: contain;
//   height: 100%;
//   align-self: center;
//   img {
//     height: 100%;
//     width: auto;
//   }
// `;

// const StyledArtworkContainer = styled.div`
//   margin-top: 2%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const StyledInfo = styled.div`
//   display: grid;
//   grid-template-rows: 10% 90%;
//   height: 100%;
//   div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   figcaption {
//     display: grid;
//     align-items: center;
//     text-align: justify;
//   }
//   li {
//     list-style: none;
//     margin-bottom: 5%;
//     text-transform: capitalize;
//   }

//   h4 {
//     text-transform: capitalize;
//   }
// `;

// const StyledImageContainer = styled.div`
//   width: 90%;
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   grid-template-rows: 75vh;
//   align-items: center;
// `;

// const StyledZoomIcon = styled(FontAwesomeIcon)`
//   position: absolute;
//   right: 40%;
//   top: 25%;
//   font-size: 2rem;
//   color: var(--mineShaft);
// `;
// export {
//   StyledImageContainer,
//   StyledZoomIcon,
//   StyledArtworkContainer,
//   StyledInfo,
//   StyledImg,
// };
