// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any | null; // Define your user model
}

// Load the initial user from localStorage if it exists
const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Save user to localStorage
    },
    logout(state) {
        state.user = null; // Reset user on logout
      },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem('user'); // Remove user from localStorage on logout
    },
  },
});

export const { setUser,logout, clearUser } = authSlice.actions;

export default authSlice.reducer;
