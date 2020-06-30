import styled, { keyframes } from "styled-components";

export const BaseAnimation = styled.div`
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ${(props) => props.timingFunction};
  animation-delay: ${(props) => props.delay};
  animation-iteration-count: ${(props) => props.iterationCount};
  animation-direction: ${(props) => props.direction};
  animation-fill-mode: ${(props) => props.fillMode};
  animation-play-state: ${(props) => props.playState};
  display: ${(props) => props.display};
`;

BaseAnimation.defaultProps = {
  duration: "1s",
  timingFunction: "ease",
  delay: "0s",
  iterationCount: "1",
  direction: "normal",
  fillMode: "both",
  playState: "running",
  display: "block",
};

export const OverlayAnimation = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};

  height: 100%;
  background: white;
  color: black;
  opacity: 0;
  margin-left: ${(props) => (props.margin ? "auto" : 0)};
  margin-right: ${(props) => (props.margin ? "auto" : 0)};
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    text-decoration: none !important;
  }
`;
