import React from "react";
import * as Components from './Components';
import { useState } from 'react'



function App() {
    //  const [signIn, toggle] = React.useState(true);
    // const history = useHistory()

	const [businessName, setName] = useState('')
  const [password, setPassword] = useState('')

    

    // const history = useHistory()
    async function RegisterBusiness(event){
        event.preventDefault()

		const response = await fetch('http://localhost:8000/api/RegisterBusiness', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				businessName,
                password
                }),
		})

		const data = await response.json()

		if (data.status === 'ok') {
	         alert("Business registered")
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

return(
    <Components.Container>
        
            <Components.Form onSubmit={RegisterBusiness}>
                <Components.Title>Create Account</Components.Title>
                <Components.Input type='text' placeholder='Name' value={businessName} onChange={(e) => setName(e.target.value)}/>
                <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <Components.Button type="submit" value="RegisterBusiness" >Register Business</Components.Button>
            </Components.Form>
       


    </Components.Container>
)

}


 export default App ;