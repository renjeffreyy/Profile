import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
`;

const Input = styled.input`
  width: 70vw;
  align-content: center;
  padding: 10px;
  margin: 10px auto;
`;

const TextArea = styled.textarea`
  width: 70vw;
  margin: 10px auto;
`;

const Button = styled.button`
  width: 70vw;
  height: 40px;
  margin: 10px auto;
`;

const Contact = () => {
  return (
    <Container>
      <Form>
        <Input placeholder="Your name" type="text" />
        <Input placeholder="Subject" />
        <Input placeholder="Your email address" type="email" />
        <TextArea placeholder="Your message here" />
        <Button>Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
