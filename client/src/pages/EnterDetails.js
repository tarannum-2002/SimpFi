import React from "react";
import * as Components from "./Components";
import { useState } from "react";

function App() {
  //  const [signIn, toggle] = React.useState(true);
  // const history = useHistory()

  const [username, setName] = useState("");

  const [MoneySpent, setMoney] = useState("");
  const [Description, setDesc] = useState("");

  // const history = useHistory()
  async function EnterDetails(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/EnterDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        MoneySpent,
        Description,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Details entered");
    }
  }

  // return (
  //     <div>
  //     <h2> Budgeting Web App</h2>
  //     <form action="">
  //     <div>
  //             <label htmlFor=""></label>
  //             <input type="Username" onChange = { this.getValue } name='Username'/>
  //         </div>
  //         <div>
  //             <label htmlFor=""></label>
  //             <input type="MoneySpent" onChange = { this.getValue } name='MoneySpent'/>
  //         </div>
  //         <div>
  //             <label htmlFor=""></label>
  //             <input type="Description" onChange = { this.getValue } name='Description'/>
  //         </div>
  //         <button onClick = {this.handleSubmit }>Submit</button>
  //     </form>
  //     </div>
  //    );
  //   }
  // }

  return (
    <Components.Container>
      <Components.Form onSubmit={EnterDetails}>
        <h1 className="signup-title">Enter Details</h1>
        <Components.Input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <Components.Input
          type="number"
          placeholder="Money Spent"
          value={MoneySpent}
          onChange={(e) => setMoney(e.target.value)}
        />
        <Components.Input
          type="text"
          placeholder="Description"
          value={Description}
          onChange={(e) => setDesc(e.target.value)}
        />

        <Components.Button type="submit" value="EnterDetails">
          Enter
        </Components.Button>
      </Components.Form>
    </Components.Container>
  );
}

export default App;
