import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';

export const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(password);
    try {
      const response = await Axios.post('http://localhost:8000/', {
        email: email,
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
      <h2>SignUp</h2>
      <TextField 
        type='text'
        variant='outlined'
        size='small'
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        fullWidth
        margin='normal'
        />
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
        Signup
      </Button>
    </Container>
  );
};

export default SignUpPage;
