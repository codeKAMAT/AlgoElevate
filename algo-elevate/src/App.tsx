// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Classroom from './pages/Classroom';
import CoachBooking from './pages/CoachBooking';
import Resume from './pages/Resume';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from './features/auth/authSlice'; // Import setUser and clearUser actions
import { auth } from './firebase'; // Firebase auth object
import { onAuthStateChanged } from 'firebase/auth';
import Layout from './components/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Listen to Firebase Auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user)); // Set user in Redux if logged in
      } else {
        dispatch(clearUser()); // Clear user from Redux if logged out
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout >
                <Home />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/classroom"
          element={
            <PrivateRoute>
              <Layout>
                <Classroom />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/coach-booking"
          element={
            <PrivateRoute>
              <Layout>
                <CoachBooking />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/resume"
          element={
            <PrivateRoute>
              <Layout>
                <Resume />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
