import { Button } from "@material-ui/core";
import React from "react";
import "../../componentsCss/Pages/Login.css";
import { auth, provider } from "../connectdb/firebase";
import { actionTypes } from "../contextReact/reducerContext/reducer";
import { useStateValue } from "../contextReact/StateProvider";
//FIX: https://www.youtube.com/watch?v=B-kxUMHBxNo&t=66s
//NOTE: 3:17:11

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //console.log("login", result.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log("login-error", error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
