import React from 'react'
              //define props
const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>I.D</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Class Type</th>
        <th>Date Start</th>
        <th>Name of Class</th>
        <th>Location</th>
        <th>Week Day</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Duration</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(varname => (
          <tr key={varname.id}>
            <td>{varname.id}</td>
            <td>{varname.name}</td>
            <td>{varname.age}</td>
            <td>{varname.address}</td>
            <td>{varname.classType}</td>
            <td>{varname.dateStart}</td>
            <td>{varname.className}</td>
            <td>{varname.location}</td>
            <td>{varname.weekDay}</td>
            <td>{varname.startTime}</td>
            <td>{varname.endTime}</td>
            <td>{varname.duration}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))

      ) : (
        <tr>
          <td colSpan={12}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable


