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
const FadeInAnimation = keyframes`

  from { opacity: 0; }
  to { opacity: 1; }
`;

const upperBaseAnimation = keyframes`

from { transform:translateY(-200px) }
to { transform:translateY(10px) }
`;

const sideBaseAnimation = keyframes`

from { transform:translateX(250px) }
to { transform:translateX(-10px) }
`;

export const FadeIn = styled(BaseAnimation)`
  /* regulo la transicion, mas rapido, opaco o no etc */
  transition: 2s;
  animation-duration: 0.3s;
  animation-name: ${FadeInAnimation}; /* seteo sobre el efecto seleccionado el nombre
  de la animacion */
`;

export const UpperAnimation = styled(BaseAnimation)`
  animation-name: ${upperBaseAnimation}; /*animacion de arriba abajo */
`;
export const SideAnimation = styled(BaseAnimation)`
  animation-name: ${sideBaseAnimation}, ${FadeInAnimation}; /*animacion lateral para el toast */
`;
