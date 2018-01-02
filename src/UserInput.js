import React from 'react';

const style = {
  'borderColor': '#ccc',
  'padding': '0 5px',
  'height': '30px',
}

const UserInput = (props) => (
  <div>
    <input type="text" style={style} placeholder={props.username} onChange={props.changeUserName.bind(this)}/>
  </div>
)

export default UserInput