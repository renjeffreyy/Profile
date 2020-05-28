import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f7ede2;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  margin: 19px;
`;
const Title = styled.p`
  font-size: 3rem;
  margin: 30px 19px;
`;

const About = () => {
  return (
    <Container>
      <Title>Why Jeff?</Title>
      <Text>
        One of my biggest regrets in college is not majoring in computer science
        or a computer related field. Teaching myself to code is me making it up
        to myself. Coding is the hardest thing I have ever done and definitely
        the most rewarding. After all the hours I’ve poured into learning to
        code I have finally become...decent? Wait what. Is that how it works?{' '}
      </Text>
      <Text>
        With code I have the power to make deep impacts on a global scale.
        Hopefully I can do something like that one day. If not, at least I get
        to build cool stuff and impress my friends and family.{' '}
      </Text>
      <Text>
        When I’m not glued to the screen working on coding projects, I like to
        spend my time glued to the screen watching shows and playing video
        games. I’m a big anime fan and my favorite game to play is league of
        legends! I LOVE laughing and making people laugh.{' '}
      </Text>
    </Container>
  );
};
export default About;
