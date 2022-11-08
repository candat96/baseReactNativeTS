
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
//   currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
//   currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      console.log("Dditj cuj mayf", action)
    },
    
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
// export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
// export const selectIsLogging = (state: RootState) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export  { authReducer };
