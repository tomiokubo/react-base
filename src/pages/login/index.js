import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyle';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BUTTON_CLICKED',
    });
  }
  return (
    <Container>
      <Title>Login</Title>
      <button type="button" onClick={handleClick}>
        Send
      </button>
    </Container>
  );
}
