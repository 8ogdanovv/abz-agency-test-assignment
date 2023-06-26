import React from 'react';
import Input from '../Input/Input';
import { isValidEmail } from '../../utils/validate';

const InputEmail = ({ email, setEmail, inputErrors, setInputErrors }) => {

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setInputErrors((prevErrors) => {
      const errors = { ...prevErrors };

      if (email === null || email === '') {
        errors.email = 'Email is required';
      } else if (!isValidEmail(email)) {
        errors.email = 'Invalid email address';
      } else {
        delete errors.email;
      }

      return errors;
    });
  };

  return (
    <Input
      name='email'
      title="Email"
      placeholder="Email"
      hintMessage="email@example.com"
      value={email}
      onChange={handleEmailChange}
      onBlur={handleEmailBlur}
      showError={inputErrors.email}
      errorMessage={inputErrors.email}
      validate={isValidEmail} // Add the validate prop with the respective validation function
    />
  )
}

export default InputEmail;