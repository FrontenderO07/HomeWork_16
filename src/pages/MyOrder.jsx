import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyOrder = () => {
  const navigate = useNavigate();

  const goToMyCart = () => {
    navigate("/myCart");
  };
  return (
    <Container>
      <p>
        Next, we want to make the hamburger menu functional so that the link
        appears when we click the button. To do that, we’ll need the React
        usestate, useEffect, and useLocation Hooks. We’ll use useState to
        represent the state of the button, while the useEffect and useLocation
        Hooks will update the state whenever it changes. Let’s import the Hooks:
      </p>
      <StyledButton onClick={goToMyCart}>Go Back</StyledButton>
    </Container>
  );
};

export default MyOrder;

const Container = styled.div`
  align-self: center;
  width: 700px;
  border: 2px solid black;
  padding: 20px;
  margin-top: 50px;
  p {
    color: black;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

const StyledButton = styled.button`
  border-radius: 20px;
  color: #eee7e7;
  background-color: #047a55;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
