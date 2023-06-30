import React, { useState } from 'react';
import './User.css';
import defaultImage from '../../../assets/defaulUser.svg';
import Tooltip from '../../Utility/Tooltip/Tooltip';

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

  return (
    <div className='user user-card-grid' style={containerStyle}>
      <p>
        <img src={imageSrc} alt="" className='user-photo' onError={handleImageError} />
      </p>
      <Tooltip tooltip={name}>
        <p className='text-body overflow'>{name}</p>
      </Tooltip>
      <Tooltip tooltip={position}>
        <p className='text-body overflow'>{position}</p>
      </Tooltip>
      <Tooltip tooltip={email}>
        <p className='text-body overflow'>{email}</p>
      </Tooltip>
      <Tooltip tooltip={phone}>
        <p className='text-body overflow'>{phone}</p>
      </Tooltip>
    </div>
  );
};

export default React.memo(User);
