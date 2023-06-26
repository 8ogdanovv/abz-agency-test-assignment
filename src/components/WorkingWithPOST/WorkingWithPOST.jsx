import React, { useEffect, useState, useRef } from 'react';
import './WorkingWithPOST.css';
import InputName from '../InputName/InputName';
import InputEmail from '../InputEmail/InputEmail';
import InputPhone from '../InputPhone/InputPhone';
import SelectPosition from '../SelectPosition/SelectPosition';
import Upload from '../Upload/Upload';
import Button from '../Button/Button';

const WorkingWithPOST = ({ success, setSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [token, setToken] = useState('');

  const formRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return; // Prevent multiple submissions

    setIsSending(true);

    const formData = new FormData(formRef.current);
    formData.set('photo', photo); // Replace the photo field value with the uploaded file

    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('phone'));
    console.log(formData.get('position_id'));
    console.log(formData.get('photo'));

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: {
        'Token': token,
      },
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data.success) {
          resetForm();
          setSuccess(true);
        } else {
          // Process server errors
          console.log(formData);
        }
        setIsSending(false);
      })
      .catch(function(error) {
        // Process network errors
        setIsSending(false);
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSelectedPosition(0);
    setPhoto(null);
    setInputErrors({});
  };

  useEffect(() => {
    setIsFormValid(false);
  }, []);

  useEffect(() => {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      selectedPosition === 0 ||
      photo === null
    ) {
      setIsFormValid(false);
    } else if (Object.keys(inputErrors).length === 0) {
      setIsFormValid(true);
    }

    var formData = new FormData();
    formData.append('position_id', selectedPosition);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

  }, [name, email, phone, selectedPosition, photo, inputErrors]);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setToken(data.token);
      })
      .catch(function(error) {
        // Process network errors
      });

    console.log(token);
  }, []);

  return (
    <div className="post-user block">
      <p className="h1">Working with POST request</p>

      <form
        onSubmit={handleSubmit}
        className="flex-col-g50"
        ref={formRef}
        encType="multipart/form-data"
      >
        <InputName
          name={name}
          setName={setName}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        <InputEmail
          email={email}
          setEmail={setEmail}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        <InputPhone
          phone={phone}
          setPhone={setPhone}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        <SelectPosition
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        <Upload
          photo={photo}
          setPhoto={setPhoto}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        {isSending ? (
          <p>Sending...</p>
        ) : (
          <Button
            title="Sign up"
            handleClick={handleSubmit}
            disabled={!isFormValid}
          />
        )}
      </form>
    </div>
  );
};

export default WorkingWithPOST;
