import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {setUserData} from "../reducers/authReducer";
import { useDispatch } from "react-redux";

const CurrentUser = () => {
  // const [docList, setDocList] = useState([]);
  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");
  const username = params.get("username");
  const auth_token=params.get("auth_token");
  console.log("here")

  // Store userid and username in localStorage
  if (userid != null && username != null && auth_token != null) {
    console.log("here")
    localStorage.setItem("userid", userid);
    localStorage.setItem("username", username);
    localStorage.setItem("auth_token",auth_token)
    console.log("userid")
  }

  return (
    <>
     
     
    </>
  );
};

export default CurrentUser;