// authReducer.ts
interface AuthState {
    isLoggedIn: boolean;
    username?: string;
  }
  
  const initialState: AuthState = {
    isLoggedIn: false,
  };
  
  const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isLoggedIn: true,
          username: action.payload.username,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  