import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyCart = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/products");
  };
  return (
    <Container>
      <p>
        Next, let’s add functionality so that when our screen gets smaller, the
        links will disappear, showing only our hamburger menu. To do that, let’s
        add a media query to our ButtonLink styles in our Navstyles.tsx:
      </p>
      <StyledButton onClick={goToProducts}>Go Back</StyledButton>
    </Container>
  );
};

export default MyCart;

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
