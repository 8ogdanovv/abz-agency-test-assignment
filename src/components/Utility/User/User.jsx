import React, { useState } from 'react';
import './User.css';
import defaultImage from '../../../assets/defaulUser.svg';
import Tooltip from '../Tooltip/Tooltip';
import { capitalize } from '../../../utils/capitalize';

const User = ({ user }) => {
  const { name, email, position, phone, photo } = user;

  const [imageSrc, setImageSrc] = useState(photo);

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  const containerStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateRows: '3',
    justifyContent: 'center',
    padding: '20px',
  };

  const capitalizedName = capitalize(name);

  return (
    <div className='user user-card-grid' style={containerStyle}>
      <p>
        <img src={imageSrc} alt="" className='user-photo' onError={handleImageError} />
      </p>
      <Tooltip tooltip={capitalizedName}>
        <p className='p1 --text-overflowed'>{capitalizedName}</p>
      </Tooltip>
      <Tooltip tooltip={position}>
        <p className='p1 --text-overflowed'>{position}</p>
      </Tooltip>
      <Tooltip tooltip={email}>
        <p className='p1 --text-overflowed'>{email}</p>
      </Tooltip>
      <Tooltip tooltip={phone}>
        <p className='p1 --text-overflowed'>{phone}</p>
      </Tooltip>
    </div>
  );
};

export default React.memo(User);
