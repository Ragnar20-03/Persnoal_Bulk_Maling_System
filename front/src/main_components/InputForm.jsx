import React from 'react'

function InputForm() {
  return (
    <div>
        <form >
        <div>
          <label htmlFor="rollNumber">Roll Number:</label>
          <input type="text" id="rollNumber" name="rollNumber"  />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"   />
        </div>
        <div>
          <label htmlFor="bigText">Big Text:</label>
          <textarea id="bigText" name="bigText" ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default InputForm