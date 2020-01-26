import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { 
                             id: null,
                           name: '', 
                            age: '', 
                        address: '', 
                      classType: '', 
                      dateStart: '',

                      className: '',
                       location: '',
                        weekDay: '',
                      startTime: '',
                        endTime: '',
                       duration: '',
                    }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.age || !user.address || !user.classType || !user.dateStart
            || !user.className || !user.location || !user.weekDay || !user.startTime || !user.endTime || !user.duration) 
        return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <div class="row">
        <div class="col-md-4">
          <h3>Student Information</h3>
          <label>Name</label>
          <input class="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} required autoFocus/>
          <label>Age</label>
          <input class="form-control" type="number" name="age" value={user.age} onChange={handleInputChange} required/>
          <label>Address</label>
          <input class="form-control" type="text" name="address" value={user.address} onChange={handleInputChange} required/>
          <label>Class Type:</label>
          <input class="form-control" type="text" name="classType" value={user.classType} onChange={handleInputChange} required/>
          <label>Date Start</label>
          <input class="form-control" type="date" name="dateStart" value={user.dateStart} onChange={handleInputChange} required/>
        </div>

        <div class="col-md-4">
          <h3>Class Information</h3>
          <label>Class Name</label>
          <input class="form-control" type="text" name="className" value={user.className} onChange={handleInputChange} required/>
          <label>Location</label>
          <input class="form-control" type="text" name="location" value={user.location} onChange={handleInputChange} required/>
          <label>Day of the Week</label>
          <input class="form-control" type="text" name="weekDay" value={user.weekDay} onChange={handleInputChange} required/>
          <label>Start Time</label>
          <input class="form-control" type="text" name="startTime" value={user.startTime} onChange={handleInputChange} required/>
          <label>End Time</label>
          <input class="form-control" type="text" name="endTime" value={user.endTime} onChange={handleInputChange} required/>
          <label>Duration</label>
          <input class="form-control" type="text" name="duration" value={user.duration} onChange={handleInputChange} required/>
        </div>
      </div>
      <button>Add Student</button>
    </form>
  )
}

export default AddUserForm