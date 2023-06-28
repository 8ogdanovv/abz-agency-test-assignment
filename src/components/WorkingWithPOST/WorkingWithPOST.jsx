import React, { useEffect, useState, useRef } from 'react';
import './WorkingWithPOST.css';
import InputName from '../InputName/InputName';
import InputEmail from '../InputEmail/InputEmail';
import InputPhone from '../InputPhone/InputPhone';
import SelectPosition from '../SelectPosition/SelectPosition';
import Upload from '../Upload/Upload';
import Button from '../Button/Button';
import ServerError from '../ServerError/ServerError';
import getPhotoUrlByUserId from '../../api/getPhotoUrlByUserId';
import Preloader from '../Preloader/Preloader';

const WorkingWithPOST = ({ setSuccess, fetchedData, setFetchedData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [token, setToken] = useState('');
  const [positions, setPositions] = useState([]);
  const [serverError, setServerError] = useState('');

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return; // Prevent multiple submissions

    setIsSending(true);

    const formData = new FormData(formRef.current);
    formData.set('photo', photo); // Replace the photo field value with the uploaded file

    try {
      const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: {
          'Token': token,
        },
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        const photoUrl = await getPhotoUrlByUserId(data.user_id); // Fetch the photo URL asynchronously

        const user = {
          email,
          id: data.user_id,
          name,
          phone,
          photo: photoUrl, // Use the fetched photo URL
          position: positions.find((position) => position.id === selectedPosition)?.name || '',
          position_id: selectedPosition,
          registration_timestamp: Date.now(),
        };

        setFetchedData([user, ...fetchedData]);
        resetForm();
      } else {
        // Process server errors
        setServerError(data.message);
      }

      setIsSending(false);
    } catch (error) {
      // Process network errors
      setIsSending(false);
      setServerError('Network error occurred. Please try again.');
    }
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

    if (
      name !== '' &&
      email !== '' &&
      phone !== '' &&
      selectedPosition === 0 &&
      photo !== null
    ) {
      setInputErrors((prevErrors) => {
        const errors = { ...prevErrors };
        errors.selectedPosition = 'Position is required'

        return errors;
      });
    };

    var formData = new FormData();
    formData.append('position_id', selectedPosition);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, phone, selectedPosition, photo]);

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
        setServerError('Network error occurred. Please try again.');
      });
  }, []);

  return (
    <div className="post-user block" id="sign-up-page">
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
          positions={positions}
          setPositions={setPositions}
        />
        <Upload
          photo={photo}
          setPhoto={setPhoto}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        {isSending ? (
          <Preloader />
        ) : (
          <Button
            title="Sign up"
            handleClick={handleSubmit}
            disabled={!isFormValid}
          />
        )}
      </form>

      {serverError !== '' && (
        <ServerError
          serverError={serverError}
          setServerError={setServerError}
          timeOut={5555}
        />
      )}
    </div>
  );
};

export default React.memo(WorkingWithPOST);
