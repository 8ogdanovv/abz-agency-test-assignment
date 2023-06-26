import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import Upload from '../Upload/Upload';
import Button from '../Button/Button';
import SelectPosition from '../SelectPosition/SelectPosition';
import './WorkingWithPOST.css';

const WorkingWithPOST = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Perform form submission logic here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Selected Position:', selectedPosition);
      console.log('Photo:', photo);

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setSelectedPosition('');
      setPhoto(null);
      setInputErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};

    if (name === null || name === '' || !isValidName(name)) {
      if (!isValidName(name)) {
        errors.name = 'Invalid name';
      }

      if (name === null || name === '') {
        errors.name = 'Name is required';
      }
    }

    if (email === null || email === '' || !isValidEmail(email)) {
      if (!isValidEmail(email)) {
        errors.email = 'Invalid email address';
      }

      if (email === null || email === '') {
        errors.email = 'Email is required';
      }
    }

    if (phone === null || phone === '') {
      errors.phone = 'Phone is required';
    } else if (!isValidPhone(phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!selectedPosition) {
      errors.selectedPosition = 'Position is required';
    }

    if (!photo || photo === null || !isValidPhoto(photo)) {
      if (!photo || photo === null) {
        errors.photo = 'Photo is required';
      }

      if (!isValidPhoto(photo)) {
        errors.photo = 'Photo should be 70 x 70 and up to 5 MB';
      }
    }

    setInputErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidName = (name) => {
    const nameRegex = /^([A-Za-z]{2,60})$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    // eslint-disable-next-line no-control-regex
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]{2,100}|"[\x01-\x09\x0b\x0c\x0e-\x7f]{1,100}")@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\+380[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const isValidPhoto = (photo) => {
    if (photo) {
      const fileType = photo.type;
      const fileSize = photo.size / 1024 / 1024; // in MB
      const validTypes = ['image/jpeg', 'image/jpg'];
      const validSize = 5; // in MB

      const image = new Image();
      image.src = URL.createObjectURL(photo);

      return (
        validTypes.includes(fileType) &&
        fileSize <= validSize &&
        image.width >= 70 &&
        image.height >= 70
      );
    }

    return false;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
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

  useEffect(() => {
    console.log(inputErrors);
  }, [inputErrors]);

  return (
    <div className="post-user block">
      <p className="h1">Working with POST request</p>

      <form onSubmit={handleSubmit} className='flex-col-g50'>
        <Input
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
        <Input
          title="Email"
          placeholder="Email"
          hintMessage="address@email.dom"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          showError={inputErrors.email}
          errorMessage={inputErrors.email}
          validate={isValidEmail} // Add the validate prop with the respective validation function
        />
        <Input
          title="Phone"
          placeholder="Phone"
          hintMessage="+38 (XXX) XXX-XX-XX"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          showError={inputErrors.phone}
          errorMessage={inputErrors.phone}
          validate={isValidPhone} // Add the validate prop with the respective validation function
        />
        <SelectPosition
          selectedPosition={selectedPosition}
          onChange={(position) => setSelectedPosition(position)}
          showError={inputErrors.selectedPosition}
          errorMessage={inputErrors.selectedPosition}
        />
        <Upload
          onUpload={setPhoto}
          showError={inputErrors.photo}
          errorMessage={inputErrors.photo}
        />
      </form>

      <Button title="Sign up" handleClick={handleSubmit} disabled={isLoading} />
    </div>
  );
};

export default WorkingWithPOST;
