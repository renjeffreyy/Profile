import React from 'react';
import styled, { keyframes } from 'styled-components';

import verified from '../../assets/verified.png';

const fadeIn = keyframes`
from{
opacity:0
}

to{
opacity:0
}
`;

const ComponentContainer = styled.div`
  display: flex;
  margin: 15px 15px;
  animation-name: ${fadeIn};
  animation-duration: ${(props) => props.duration};
  /* animation-delay: ${(props) => props.delay}; */

  opacity: 1;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const TextingProfileImg = styled.img`
  position: absolute;
  width: auto;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Handle = styled.p`
  display: inline;
  margin: 0px;
  color: gray;
`;

const TextContainer = styled.div`
  margin: 0px 15px;
  width: 70%;
  vertical-align: baseline;
`;

const MsgText = styled.p`
  font-size: 1.5rem;
  margin: 0px;
`;

const NameText = styled(Handle)`
  font-weight: bold;
  color: black;
`;

const CheckMark = styled.img`
  height: 1rem;
  transform: translatey(+20%);
`;

const NameContainer = styled.div`
  display: inline;
`;

const TextMessages = (props) => {
  return (
    <ComponentContainer delay={props.delay} duration={props.duration}>
      <ImgContainer>
        <TextingProfileImg src={props.imgSrc} />
      </ImgContainer>
      <TextContainer>
        <NameContainer>
          <NameText>{props.nameText}</NameText>
          <CheckMark src={verified} />
          <Handle>{props.handle}</Handle>
        </NameContainer>
        <MsgText>{props.msg}</MsgText>
      </TextContainer>
    </ComponentContainer>
  );
};

export default TextMessages;
