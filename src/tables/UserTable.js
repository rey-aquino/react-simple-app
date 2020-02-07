import React from 'react'
              //define props
const UserTable = props => (


<table class="table table-dark table-responsive">
  <thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">Address</th>
    <th scope="col">Class Type</th>
    <th scope="col">Date Start</th>
    <th scope="col">Name of Class</th>
    <th scope="col">Location</th>
    <th scope="col">Week Day</th>
    <th scope="col">Start Time</th>
    <th scope="col">End Time</th>
    <th scope="col">Duration</th>
    <th scope="col">Actions</th>
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
              <button class="btn btn-sm btn-success">Present</button>
              <button class="btn btn-sm btn-danger">Absent</button>
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


