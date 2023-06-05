import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Container, TextField, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const response = await Axios.post('http://localhost:8000/', {
        username: username,
        password: password
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container
      maxWidth='sm'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
      }}
    >
      <h2>Login</h2>
      <TextField
        type='text'
        variant='outlined'
        size='small'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin='normal'
      />
      <TextField
        type='password'
        variant='outlined'
        size='small'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin='normal'
      />
      <Button
        type='submit'
        onClick={handleClick}
        variant='contained'
        color='primary'
        fullWidth
        style={{ marginTop: '20px', focused: true }}
      >
        Login
      </Button>
      <Link component={RouterLink} to='/signup' variant='body2' style={{marginTop:"10px"}}>
        Don't have an account? Sign up
      </Link>
    </Container>
  );
};

export default SignInPage;
