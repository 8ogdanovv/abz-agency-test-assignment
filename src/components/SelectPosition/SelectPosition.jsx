import React, { useEffect, useState } from 'react';
import './SelectPosition.css';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

const SelectPosition = ({ selectedPosition, setSelectedPosition, inputErrors, setInputErrors }) => {
  const [positions, setPositions] = useState([]);

  const handleSelectChange = (position) => {
    setSelectedPosition(position);

    setInputErrors((prevErrors) => {
      const errors = { ...prevErrors };
      delete errors.selectedPosition;
      return errors;
    });
  };

  const showError = inputErrors.selectedPosition;

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
            name="position_id"
            value={position.id}
            checked={selectedPosition === position.id}
            onChange={() => handleSelectChange(+position.id)}
            required // Add the required attribute
          />
          <label htmlFor={`position_${position.id}`}>{position.name}</label>
        </div>
      ))}
      {showError && <p className="error">{showError}</p>}
      {!showError && <p className="error">&nbsp;</p>}
    </div>
  );
};

export default SelectPosition;
