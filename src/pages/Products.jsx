import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        {products.map((item, index) => {
          return (
            <Link to={`/products/${item.id}/details`} key={index}>
              <ul>
                <li>
                  <img src={item.url} alt="iphone" />
                </li>
                <StyledButton>Detail</StyledButton>
              </ul>
            </Link>
          );
        })}

        <StyledButton onClick={goToHome}>Go Back</StyledButton>
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  width: 700px;
  ul {
    justify-self: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 50px;
  }
  li {
    color: black;
    font-size: 20px;
    font-weight: 500;
  }
`;
const StyledButton = styled.button`
  border-radius: 20px;
  width: 200px;
  color: #eee7e7;
  background-color: #047a55;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
