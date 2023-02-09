import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <img
        alt="apple"
        src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R304.png?resize=672:378&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
      />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
