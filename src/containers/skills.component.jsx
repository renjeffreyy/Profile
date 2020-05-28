import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f7ede2;
`;

const Heading = styled.p`
  margin: 0;
`;

const SkillText = styled.p``;

const SkillContainer = styled.div`
  width: 50%;
`;

const Skills = () => {
  return (
    <Container>
      <Heading>Languages</Heading>
      <SkillContainer>
        <SkillText>JavaScript, CSS/SASS, HTML 5</SkillText>
      </SkillContainer>
      <Heading>Front End</Heading>
      <SkillContainer>
        <SkillText>React.js, Redux</SkillText>
      </SkillContainer>
      <Heading>Back End</Heading>
      <SkillContainer>
        <SkillText>Node.js, Express.js</SkillText>
      </SkillContainer>
      <Heading>Databases</Heading>
      <SkillContainer>MySQL, MangoDB</SkillContainer>
      <Heading>Design</Heading>
      <SkillText>Figma, Photoshop, Illustrator, Premier</SkillText>
    </Container>
  );
};
export default Skills;
