import React from 'react'

function InputBox(props) {
  return (
    <div>
      <label>comments:</label>
          <textarea>{props.data}</textarea>
 
    </div>
  )
}

export default InputBox
