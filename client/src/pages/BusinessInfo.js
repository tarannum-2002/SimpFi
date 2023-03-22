import React from "react";
import * as Components from "./Components";
import { useState } from "react";

function App() {
  //  const [signIn, toggle] = React.useState(true);
  // const history = useHistory()
  const [username, setName] = useState("");
  const [businessName, setBName] = useState("");

  

  // const history = useHistory()
  async function BusinessSearch(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/BusinessInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        businessName,
       
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert(" entered");
    }
    else{
      alert(data.error)
    }
  }

  

  return (
    <Components.Container>
      <Components.Form onSubmit={BusinessSearch}>
        <h1 className="signup-title">Search your Business Search </h1>
        
        <Components.Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        <Components.Input
          type="text"
          placeholder="business Name"
          value={businessName}
          onChange={(e) => setBName(e.target.value)}
        />
       

        <Components.Button type="submit" value="BusinessInfo">
          Enter
        </Components.Button>
      </Components.Form>
    </Components.Container>
  );
}

export default App;
