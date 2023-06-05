import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory()


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:8000/signup', {
        email: email,
        username: username,
        password: password
      });
      console.log(response.data);
      if( response.status === 201){
        history.push('./')
      }
    } catch (error) {
      if (error.response && error.response.status === 409){
        setErrorMessage('Username already exists')
      } else {
        console.log(error);
        setErrorMessage('Failed create user')
      }
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
      {errorMessage && (
        <Typography variant="body1" style={{ color: 'red' }}>
          {errorMessage}
        </Typography>
      )}
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
