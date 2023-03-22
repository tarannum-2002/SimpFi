import React from "react";
import * as Components from "./Components";
import { useState } from "react";
// import { useHistory } from 'react-router-dom'

function App() {
  const [username, setName] = useState("");

  const [password, setPassword] = useState("");
  // const history = useHistory()

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      localStorage.setItem("token", data.user);
      // alert("token"+ data.user);
      alert("Login successful "+ data.user);
      window.location.href = '/BusinessInfo'

    } else {
      alert("Please check your username and password");
    }
   

  }

  return (
    <Components.Container>
      <Components.SignInContainer>
        <Components.Form onSubmit={loginUser}>
          <h1 className="signup-title">Log in</h1>
          <Components.Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button
            type="submit"
            value="Login"
            className="login-button"
          >
            Log In
          </Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer>
        <Components.Overlay>
          <Components.LeftOverlayPanel>
            <h1 className="leftoverlay-title">Welcome Back!</h1>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
          </Components.LeftOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default App;
