import React from 'react'
              //define props
const StudentsTable = props => (
<div>
{/* <form><input type="text" placeholder="Search"/></form> */}
<br/>
<table class="table table-hover table-responsive">
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
    <th scope="col">Status</th>
  </tr>
  </thead>
  <tbody>
      {props.users.length > 0 ? (
        props.users.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
            <td>{student.classType}</td>
            <td>{student.dateStart}</td>
            <td>{student.className}</td>
            <td>{student.location}</td>
            <td>{student.weekDay}</td>
            <td>{student.startTime}</td>
            <td>{student.endTime}</td>
            <td>{student.duration}</td>
            <td>              
              {/* <button onClick={() => props.deleteUser(student.id)} class="btn btn-danger">Delete</button> */}
              <button class="btn btn-sm btn-success" disabled>Present</button>
            </td>
          </tr>
        ))

      ) : (
        <tr>
          <td colSpan={12}>No Student</td>
        </tr>
      )}
    </tbody>
</table>


</div>
)

export default StudentsTable