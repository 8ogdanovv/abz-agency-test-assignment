import React from 'react';
import Input from '../Input/Input';
import { isValidPhone } from '../../../utils/validate';

const InputPhone = ({ phone, setPhone, inputErrors, setInputErrors }) => {

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhoneBlur = () => {
    setInputErrors((prevErrors) => {
      const errors = { ...prevErrors };

      if (phone === null || phone === '') {
        errors.phone = 'Phone is required';
      } else if (!isValidPhone(phone)) {
        errors.phone = 'Invalid phone number';
      } else {
        delete errors.phone;
      }

      return errors;
    });
  };

  return (
    <Input
      name='phone'
      title="Phone"
      placeholder="Phone"
      hintMessage="+380XXXXXXXXX"
      value={phone}
      onChange={handlePhoneChange}
      onBlur={handlePhoneBlur}
      showError={inputErrors.phone}
      errorMessage={inputErrors.phone}
      validate={isValidPhone} // Add the validate prop with the respective validation function
    />
  )
}

export default InputPhone;