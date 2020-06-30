import styled, { keyframes } from 'styled-components';
import {BaseAnimation} from "../../utils/baseStyleAnimations"


const FadeInAnimation = keyframes`

  from { opacity: 0; }
  to { opacity: 1; }
`;

const TwisterAnimation = keyframes`

  from { transform:rotate(0deg) }
  to { transform:rotate(360deg); }
`;
// const FadeOutAnimation = keyframes`
// from { opacity: 1; }
// to { opacity: 0; }
// `;

const TranslateAnimation = keyframes`

from { transform:translateY(-200px) }
to { transform:translateY(10px) }
`;

export const FadeIn = styled(BaseAnimation)`
  /* regulo la transicion, mas rapido, opaco o no etc */
  transition:2s;
  animation-duration: .3s;
  animation-name: ${FadeInAnimation}; /* seteo sobre el efecto seleccionado el nombre
  de la animacion */
  
  `;

export const UpperTranslate = styled(BaseAnimation)`
  animation-name: ${TranslateAnimation};
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

export const Twister = styled(BaseAnimation)`
  transition:2s;
  animation-name: ${TwisterAnimation}
`;
