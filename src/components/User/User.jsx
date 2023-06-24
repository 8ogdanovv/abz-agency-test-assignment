import React, { useEffect, useState } from 'react';
import defaultPhoto from '../../assets/defaulUser.svg';
import './User.css';

const TEMP = {
  "id": 16580,
  "name": "asdasd",
  "email": "g@gmail.com",
  "phone": "+380507381111",
  "position": "Content manager",
  "position_id": 2,
  "registration_timestamp": 1687505535,
  "photo": "https://frontend-test-assignment-api.abz.agency/images/users/64954a7f46da916580.jpg"
};

const User = ({ user = TEMP }) => {
  const [photoToDisplay, setPhotoToDisplay] = useState(defaultPhoto);

  const { email, position, phone, photo } = user;

  useEffect(() => {
    setPhotoToDisplay(photo);
  }, []);
  const containerStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateRows: '3',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div className='user user-card-grid' style={containerStyle} >
      <p><img src={photoToDisplay} alt="user photo" /></p>
      <p className='p1 overflow'>{ position }</p>
      <p className='p1 overflow'>{ email }</p>
      <p className='p1 overflow'>{ phone }</p>
    </div>
  );
}

export default User