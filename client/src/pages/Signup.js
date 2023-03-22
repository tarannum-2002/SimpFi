import React from "react";
import * as Components from "./Components";
import { useState } from "react";
// import { useHistory } from 'react-router-dom'

function App() {
  //  const [signIn, toggle] = React.useState(true);
  // const history = useHistory()

  const [username, setName] = useState("");
  const [businessName, setBusiness] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory()
  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        businessName,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("user created");
      window.location.href = '/Login'
    }
  }
  return (
    <Components.Container>
      <Components.SignUpContainer>
        <Components.Form onSubmit={registerUser}>
          <h1 className="signup-title">Create Account</h1>
          <Components.Input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <Components.Input
            type="text"
            placeholder="BusinessName"
            value={businessName}
            onChange={(e) => setBusiness(e.target.value)}
          />

          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button type="submit" value="Signup">
            Sign Up
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.OverlayContainer>
        <Components.Overlay>
          <Components.LeftOverlayPanel>
            <h1 className="leftoverlay-title">Hello, Friend!</h1>
            <Components.Paragraph>
              Enter personal details and start your journey with us
            </Components.Paragraph>
          </Components.LeftOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default App;
