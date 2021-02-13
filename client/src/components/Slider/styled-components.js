import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICES_MIN_WIDTH, DEVICES_MAX_WIDTH } from "../../constants";
import { Icon } from "semantic-ui-react";

const ElementSlider = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.col.length}, ${(12 * 8) / props.col.length}%)`};
  grid-gap: ${(props) => `${(10 * 7) / props.col.length}px`};
  height: 150px;
  justify-content: center;
  width: ${(props) => props.col && (props.col.length * 90) / 8};
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `${10}% ${(80 * props.col.length) / 8}% ${10}%`};
  justify-content: center;
  margin-top: 2%;
  margin-right: 4%;
  margin-left: 4%;
  width: 80%;
`;

const StyledSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButtonContainer = styled.div`
  align-self: center;
`;

const StyledCarContainer = styled.div`
  width: 150px;
`;

export {
  ElementSlider,
  StyledDiv,
  StyledSlideContainer,
  StyledButtonContainer,
  StyledCarContainer
};
