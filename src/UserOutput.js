import React from 'react';

const style = {
  'color': 'darkcyan'
}

const UserOutput = (props) => (
  <div>
    <p style={style}>{props.username}</p>
  </div>
);

export default UserOutput