import React from 'react'
            //Define props
const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.users.length > 0 ? (
    props.users.map(qwe => (
      <tr key={qwe.id}>
        <td>{qwe.name}</td>
        <td>{qwe.username}</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>        
    ))
): (
    <tr>
      <td colSpan={3}>No users</td>
    </tr>
  )

}
    </tbody>
  </table>
)

export default UserTable


