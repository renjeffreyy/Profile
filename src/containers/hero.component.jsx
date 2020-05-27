import React from 'react';
import styled, { keyframes } from 'styled-components';

const croppedImg = 'https://i.imgur.com/geHQJWZ.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const showBackground = keyframes`
from:{
  opacity:0;
}
to{
  opacity:0;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-attachment: fixed;
  background-image: url(${croppedImg});
  background-size: cover;
`;

const TextContainer = styled.div`
  z-index: 10;
  width: 100%;
  grid-row: 3/4;
  grid-column: 1/5;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const Title = styled.p`
  font-size: 4rem;
  margin: 0;
  text-align: center;
  color: white;

  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

const SubTitle = styled(Title)`
  font-size: 2rem;
  transform: translateY(-10px);
`;

const text = (
  <TextContainer>
    <Title>Jeffrey Ren</Title>
    <SubTitle>Full Stack Developer</SubTitle>
  </TextContainer>
);

const Hero = (props) => {
  const { loading } = props.loading;
  return (
    <Container>
      <Overlay>{!loading ? text : <div></div>}</Overlay>
    </Container>
  );
};

export default Hero;
