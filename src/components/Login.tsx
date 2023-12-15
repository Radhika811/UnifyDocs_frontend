// LoginPage.js
import React from "react";
import { Button } from "@nextui-org/react";
import "./Login.css"; 

export default function LoginPage() {
  function handleClick() {
    const authUrl = "http://127.0.0.1:8000/oauth/authorize";
    window.location.href = authUrl;
  }

  return (
    <div className="login-container">
      <Button color="primary" onClick={handleClick} className="login-button">
        Login with Channel-i
      </Button>
    </div>
  );
}
