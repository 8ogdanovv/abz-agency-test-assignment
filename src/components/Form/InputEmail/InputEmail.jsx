import React, { useCallback } from 'react';
import Input from '../Input/Input';
import { isValidEmail } from '../../../utils/validate';

const InputEmail = ({ email, setEmail, inputErrors, setInputErrors }) => {
  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value.toLowerCase());
  }, [setEmail]);

  const handleEmailBlur = useCallback(() => {
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
  }, [email, setInputErrors]);

  return (
    <Input
      name="email"
      title="Email"
      placeholder="Email"
      hintMessage="email@example.com"
      value={email}
      onChange={handleEmailChange}
      onBlur={handleEmailBlur}
      showError={inputErrors.email}
      errorMessage={inputErrors.email}
      validate={isValidEmail}
    />
  );
};

export default React.memo(InputEmail);
