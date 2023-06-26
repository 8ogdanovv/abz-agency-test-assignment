import React, { useEffect, useState } from 'react';
import './SelectPosition.css';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

const SelectPosition = ({ selectedPosition, onChange, showError, errorMessage }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPositions(data.positions);
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  };

  return (
    <div className="position-block">
      <p>Select your position:</p>
      {positions.map((position) => (
        <div key={position.id} className="position">
          <input
            type="radio"
            id={`position_${position.id}`}
            name="position"
            value={position.name}
            checked={selectedPosition === position.name}
            onChange={() => onChange(position.name)}
            required // Add the required attribute
          />
          <label htmlFor={`position_${position.id}`}>{position.name}</label>
        </div>
      ))}
      {showError && <p className="error">{errorMessage}</p>}
      {!showError && <p className="error">&nbsp;</p>}
    </div>
  );
};

export default SelectPosition;
