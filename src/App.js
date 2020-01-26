import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  
  const usersData = [];

    //Insert Arrays for Sample data
    // { id: 1, name: 'Rey Aquino', age: 22, address: 'Tacloban City', classType: 'Sample Class Type' },

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div class="container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Add Student</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Calendar and Attendance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Screen Report</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        {/* Add Student */}
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
            <div className="flex-row">
              <div className="flex-large">
                <AddUserForm addUser={addUser} />
              </div>
            </div>
        
        </div>
        {/* Calendar and Attendance */}
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          Calendar and Attendance

            <div className="flex-large">
              <UserTable users={users} />
            </div>
          </div>
        {/* Screen Report */}
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          This is for Screen Report
        </div>
      </div>
    </div>


  )
}

export default App

// 5:08 AM 1/26/2020