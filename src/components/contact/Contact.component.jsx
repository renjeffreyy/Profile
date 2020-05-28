import React, { useState } from 'react';
import styled from 'styled-components';

//styling
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7ede2;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  height: 60%;
`;

const Input = styled.input`
  width: 70vw;
  margin: auto;
  height: 40px;
  padding: 0;
  border-width: 1px;
  font-family: Helvetica;
  font-size: 1.1rem;
`;

const TextArea = styled.textarea`
  width: 70vw;
  margin: auto;
  height: 100px;
  padding: 0;
  border-width: 1px;
  grid-row: 5/7;
  font-family: Helvetica;
  font-size: 1.1rem;
`;

const Button = styled.button`
  width: 70vw;
  height: 40px;
  margin: 10px auto;
  padding: 0;
  border-width: 1px;
`;

const Title = styled.p`
  display: block;
  font-size: 3rem;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const { name, subject, email, message } = formData;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert('submitted');
    console.log(formData);
    // need to write on submit
  };

  return (
    <Container>
      <Form onSubmit={(event) => onSubmit(event)}>
        <Title>Let's Talk!</Title>
        <Input
          placeholder="Your name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => onChange(event)}
          required
        />
        <Input
          placeholder="Subject"
          type="text"
          name="subject"
          value={subject}
          onChange={(event) => onChange(event)}
          required
        />
        <Input
          placeholder="Your email address"
          type="email"
          name="email"
          value={email}
          onChange={(event) => onChange(event)}
          required
        />
        <TextArea
          placeholder="Your message here"
          name="message"
          onChange={(event) => onChange(event)}
          value={message}
          required
        />
        <Button>Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
