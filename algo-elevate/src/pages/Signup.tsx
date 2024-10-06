import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Firebase setup
import signupImage from '../assets/algoelevate-login-image.svg'; // Import your signup image

import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to handle form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Signup with Username/Password
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear previous error

    // Check for valid email format
    if (!username.includes('@') || !username.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Create user with email and password
      const result = await createUserWithEmailAndPassword(auth, username, password);
      dispatch(setUser(result.user)); // Store user in Redux state
      navigate('/'); // Redirect to homepage after successful signup
    } catch (error: any) {
      // Check specific Firebase errors
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email already in use. Please use a different email.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        default:
          setError('Signup failed. Please try again.');
      }
      console.error('Error with Signup:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Section (Image) */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${signupImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Right Section (Form) */}
      <Box
        component={Paper}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username or Email"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Set username state
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Set password state
            autoComplete="current-password"
          />

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Button
            fullWidth
            variant="text"
            onClick={() => navigate('/login')} // Redirect to Login page
            sx={{ mt: 2 }}
          >
            Already have an account? Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
