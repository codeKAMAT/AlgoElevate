import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'; // Firebase setup
import loginImage from '../assets/algoelevate-login-image.svg'; // Import your image

import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to handle form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user)); // Store user in Redux state
      navigate('/'); // Redirect to homepage after successful login
    } catch (error) {
      console.error('Error with Google Sign-In:', error);
    }
  };

  // Handle Login with Username/Password
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear previous error

    // Check for valid email format
    if (!username.includes('@') || !username.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Sign in with email and password
      const result = await signInWithEmailAndPassword(auth, username, password);
      dispatch(setUser(result.user)); // Store user in Redux state
      navigate('/'); // Redirect to homepage after successful login
    } catch (error: any) {
      // Check specific Firebase errors
      switch (error.code) {
        case 'auth/user-not-found':
          setError('User not found. Please check your credentials.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format.');
          break;
        default:
          setError('Login failed. Please try again.');
      }
      console.error('Error with Username/Password Sign-In:', error);
    }
  };

  // Handle Sign Up Navigation
  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the Signup page
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: "100vw" }}>
      {/* Left Section (Image) */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${loginImage})`,
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
          Sign in
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
            Sign In
          </Button>

          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={handleGoogleSignIn}
            sx={{ mt: 2, mb: 2 }}
          >
            Sign in with Google
          </Button>

          {/* Sign Up Button */}
          <Button
            fullWidth
            variant="text"
            onClick={handleSignUp}
            sx={{ mt: 2 }}
          >
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
