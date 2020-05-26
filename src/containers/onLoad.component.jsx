import React from 'react';
import styled from 'styled-components';

///components
import TextMessages from '../components/textMessages/textMessages.component';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const elon = 'https://i.imgur.com/UK03t2l.jpg';
const bill = 'https://i.imgur.com/G9bG0XV.jpg';

const OnLoad = () => {
  return (
    <Container>
      <TextMessages
        delay="0s"
        nameText="Elon Musk"
        handle="@elonmusk"
        imgSrc={elon}
        msg="Did you see Jeff's website lol?"
        duration="1s"
      />
      <TextMessages
        delay="1.5s"
        nameText="Bill Gates"
        handle="@BillGates"
        msg="Website?????"
        imgSrc={bill}
        duration="2.5s"
      />
      <TextMessages
        delay="2.5s"
        nameText="Elon Musk"
        handle="@elonmusk"
        msg="Yea he made a whole website about himself lol"
        imgSrc={elon}
        duration="3.5s"
      />
      <TextMessages
        delay="3s"
        nameText="Bill Gates"
        msg="Woah he is so cool! I want to be just like him when I grow up!"
        imgSrc={bill}
        handle="@BillGates"
        duration="5s"
      />
      <TextMessages
        delay="4s"
        nameText="Bill Gates"
        handle="@BillGates"
        msg="😍😍😍😍😍😍"
        imgSrc={bill}
        duration="7s"
      />
    </Container>
  );
};

export default OnLoad;
