import { createSlice } from "@reduxjs/toolkit";
import { User } from "@nextui-org/react";

interface currentUser{
  username : String
  userid : String
  authtoken : String
}

const initialState: currentUser = {
  username : "",
  userid : "",
  authtoken : "",
}   

export const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers: {
      setUserData : (state, action) => {
              state.authtoken = action.payload.authtoken;
              state.userid = action.payload.userid;
              state.username = action.payload.username;
      }
  }
})

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;


// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isLoggedIn: false,
//   },
//   reducers: {
//     login(state, action) {
//       state.isLoggedIn = true;
//     },
//     logout(state, action) {
//       state.isLoggedIn = false;
//     }
//   }
// })

// export default authSlice.reducer