import React from 'react';
// import {Form, Button} from "react-bootstrap";
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
// const StyledForm = styled(Form)`
//     width:100%;
//     label{
//         color: black;
//     }
//     #formBasicEmail:placeholder-shown{
//         color:white !important;
//     }
    
// `;

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
// const StyledFormImput = styled(Form.Control)`
// background-color:rgba(255,255,255,0.5)!important;
// color:black !important;
// width:100%;
// `;
  
// const StyledButton = styled(Button)`
// background-color: #596f5d !important;
// border:none !important;
// `;


export default function Contact() {
    return (
        <StyledContactContainer>
        <StyledMainContainer>  
            {/* <StyledDivSocial>
                <span>Instagram: <h4> @dibujanta</h4></span>
                <span>Twitter: <h4>@loladibujanta</h4></span>
            </StyledDivSocial>
            <StyledForm>
            <Form.Group controlId="formBasicEmail">
            <StyledFormImput type="email" placeholder="Enter email*" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <StyledFormImput type="password" placeholder="Password*" />
            </Form.Group>
            <br/>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <StyledFormImput as="textarea" rows="5" />
            </Form.Group>
            <StyledButton type="submit">
            Submit
            </StyledButton>

        </StyledForm> */}
      </StyledMainContainer>  
    </StyledContactContainer>
    )
}
