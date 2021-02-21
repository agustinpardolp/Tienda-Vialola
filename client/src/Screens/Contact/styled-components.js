import styled from 'styled-components';

const StyledContactContainer= styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
height:75vh;
margin-right: 10%;
`;
const StyledMainContainer = styled.div`
    width: 25%;
    height: 60%;
    display: grid;
    grid-template-rows: 25% 30%; 
`;

const StyledDivSocial = styled.div`
    display: grid;
    grid-template-rows:  50% 22%;
    color: white;
    align-items: center;
    justify-content:flex-start;
    text-align: justify;
    font-size: 20px;
    span{
        display:flex;
    }
    h4{
        margin-left:8%;
        color: #ffdc8d;
    }
`;

export {
  StyledContactContainer,
  StyledDivSocial,
  StyledMainContainer
};
