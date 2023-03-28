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
        Nike, Inc. is an American multinational corporation that is engaged in
        the design, development, manufacturing, and worldwide marketing and
        sales of footwear, apparel, equipment, accessories, and services. The
        company is headquartered near Beaverton, Oregon, in the Portland
        metropolitan area. It is the world's largest supplier of athletic shoes
        and apparel and a major manufacturer of sports equipment, with revenue
        in excess of US$46 billion in its fiscal year 2022.
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
  background-color: teal;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
