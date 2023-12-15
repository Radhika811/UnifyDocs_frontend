import { log } from "console";

// authActions.ts
export const login = (username: string, password: string) => ({
    type: 'LOGIN',
    payload: { username, password },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
export default login