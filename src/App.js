import React, { useState } from 'react'
import StudentsTable from './tables/StudentsTable'
import StudentInfoForm from './forms/StudentInfoForm'
import ScreenReportTable from './tables/ScreenReportTable'

const App = () => {
  
  const usersData = [
          { 
                  id: 1, 
                name: 'Rey Aquino', 
                 age: 22, 
             address: 'Tacloban City', 
           classType: 'Sample Class Type',
           dateStart: '2020-01-27',

           className: 'Capstone Project II',
            location: 'CompLab 7',
             weekDay: 'TFri',
           startTime: '1:00 PM',
             endTime: '2:30 PM',
            duration: '1:30',
          },
  ];

  //Filter
  

  //Filter

  const [users, setUsers] = useState(usersData)

  

  //take user object as a parameter and add to the users array of objects.
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  //Delete method
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div class="container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Add Student</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Calendar & Attendance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Screen Report</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        {/* Add Student */}
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <StudentInfoForm addUser={addUser} />
        
        </div>
        {/* Calendar and Attendance */}
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <h3> Attendance Table</h3>
            <StudentsTable users={users} deleteUser={deleteUser} />
          <h3>Calendar</h3>
        </div>
        {/* Screen Report */}
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <h3>Screen Report</h3>
          <input type="text" placeholder="Search"/>
          <ScreenReportTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>

  )
}

export default App

// 5:08 AM 1/26/2020