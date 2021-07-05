import styled from "styled-components";

const StyledLogin = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  background: linear-gradient(
    to top left,
    var(--primaryConfirm),
    var(--primary)
  );
  h2 {
    font-size: 2rem;
    padding: 2%;
    color: var(--primary);
  }
  label {
    padding: 2%;
    margin: 2%;
  }
  form {
    position:absolute;
    margin: 0% 4% 5% 4%;
    background: white;
    height: 30rem;
    width: 25rem;
    border-radius: 5px;
    box-shadow: 0 0 25px 0 var(--gray);
    top:10rem;
  }

  .login_checkbox-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--gray);
  }
  .login-container {
  
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 2%;
    height: 100%;
    text-align: center;
  }
`;

export { StyledLogin };
