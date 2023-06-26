import React from 'react';
import Input from '../Input/Input';
import { isValidName } from '../../utils/validate';

const InputName = ({ name, setName, inputErrors, setInputErrors }) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    setInputErrors((prevErrors) => {
      const errors = { ...prevErrors };

      if (name === null || name === '') {
        errors.name = 'Name is required';
      } else if (!isValidName(name)) {
        errors.name = 'Invalid name';
      } else {
        delete errors.name;
      }

      return errors;
    });
  };

  return (
    <Input
      name='name'
      title="Name"
      placeholder="Your name"
      hintMessage={`Example: 'Al Ad-Din'`}
      value={name}
      onChange={handleNameChange}
      onBlur={handleNameBlur}
      showError={inputErrors.name}
      errorMessage={inputErrors.name}
      validate={isValidName} // Add the validate prop with the respective validation function
    />
  )
}

export default InputName;