import styled, { keyframes } from "styled-components";
import { BaseAnimation } from "../../utils/baseStyleAnimations";

const FadeInAnimation = keyframes`

  from { opacity: 0; }
  to { opacity: 1; }
`;

const TwisterAnimation = keyframes`

  from { transform:rotate(0deg) }
  to { transform:rotate(360deg); }
`;

const TranslateAnimation = keyframes`

from { transform:translateY(-200px) }
to { transform:translateY(0px) }
`;

export const FadeIn = styled(BaseAnimation)`
  /* regulo la transicion, mas rapido, opaco o no etc */
  transition: 2s;
  animation-duration: ${(props) => (props.duration ? props.duration : "0.3s")};
  animation-name: ${FadeInAnimation}; /* seteo sobre el efecto seleccionado el nombre
  de la animacion */
`;

export const UpperTranslate = styled(BaseAnimation)`
  animation-name: ${TranslateAnimation};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Twister = styled(BaseAnimation)`
  transition: 2s;
  animation-name: ${TwisterAnimation};
`;

export const OverlayAnimation = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0);
  right: 0%;
  position: relative;
  z-index: 10000;
  &:hover {
  }
  div {
    opacity: 0;
    transition: 0.4s ease-in-out;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 4%;
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

const sideBaseAnimation = keyframes`

from { transform:translateX(250px) }
to { transform:translateX(-10px) }
`;

export const SideAnimation = styled(BaseAnimation)`
  animation-name: ${sideBaseAnimation}, ${FadeInAnimation}; /*animacion lateral para el toast */
`;
