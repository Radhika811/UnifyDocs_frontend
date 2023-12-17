// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userid: string | null;
  username: string | null;
  auth_token: string | null;
  // Add other user-related fields as needed
}

const initialState: UserState = {
  userid: null,
  username: null,
  auth_token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    // Add other actions as needed
  },
});

export const { setUserData } = userSlice.actions;
const userReducer = userSlice.reducer
export default userReducer;
