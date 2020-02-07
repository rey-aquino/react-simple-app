import React from 'react'
              //define props
const ScreenReportTable = props => (
<div>
{/* <form>
<div class="row">
    <div class="col-md-4">
    <label>Search by Name</label>
    <input class="form-control" type="text" placeholder="Search"/>
    </div>
    <div class="col-md-4">
    <label>From</label>
    <input class="form-control" type="date" placeholder="From"/>
    </div>
    <div class="col-md-4">
    <label>To</label>
    <input class="form-control" type="date" placeholder="To"/>
    </div>
</div>
</form> */}
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
    <th scope="col">Actions</th>
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
              <button onClick={() => props.deleteUser(student.id)} class="btn btn-danger">Delete</button>
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

export default ScreenReportTable