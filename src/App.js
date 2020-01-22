import React, { useState } from 'react'
import UserTable from './tables/UserTable'
//Logo
// import logo from './logo.svg';


//This is a Simple component
const App = () => {
  //Array with Objects
  const usersData = [
    { id: 1, name: 'Rey',  username: 'Tata' },
    { id: 2, name: 'Vanessa',  username: 'Baboy' },
    { id: 3, name: 'Jenny',  username: 'Pikat'  },
  ]

  const [users, setUsers] = useState(usersData)
  
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* Simple Component */}
          <UserTable users={users}/>
          {/* Simple Component */}
        </div>
      </div>
    </div>
  )
}


//Class component

export default App;

