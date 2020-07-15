import React from 'react'
import styled from 'styled-components';
import Footer from "../../components/Footer";

const StyledAboutContainer = styled.div`
    height: 75vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p{
    display: inline-block;
    width: 20%;
    font-size: 1.05rem;
    margin-left: 10%;
    text-align: initial;
    line-height: 29px;
    }
`;

function About() {
    return (
        <>
        <StyledAboutContainer>
           <p>"A veces me parece que todos estamos poseidos por un impulso que nos lleva a buscar lo imposible.
               La realidad que tenemos ante nosotros, el mundo tridimensional que nos redea es demasiado común,
               demasiado deslucido, demaciado ordinario para nosotros.
               Anhelamos lo anormal o sobrenatural, lo que no existe, un milagro: ¡Como si la realidad de cada dia
               no fuese lo bastante enigmatica!"
           </p>
        </StyledAboutContainer>
        <Footer back = "/home"/>
        </>
    )
}

export default About
