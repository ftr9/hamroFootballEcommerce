import { useEffect, useState, useCallback } from 'react';

const useShipAddressFormState = () => {
  const [name, setName] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, SetLocation] = useState('');

  const setFormErrorFromProperty = useCallback((prop, message, status) => {
    const newFormState = { ...formError };
    newFormState[prop].hasError = status;
    newFormState[prop].errorMessage = message;
    setFormError(newFormState);
  }, []);

  const hasAnyFormError = () => {
    if (
      Object.values(formError)
        .map(el => el.hasError)
        .some(hasError => hasError === true)
    ) {
      return true;
    }
    return false;
  };

  const [formError, setFormError] = useState({
    name: {
      hasError: false,
      errorMessage: '',
    },
    confirmationEmail: {
      hasError: false,
      errorMessage: '',
    },
    phoneNumber: {
      hasError: false,
      errorMessage: '',
    },
    location: {
      hasError: false,
      errorMessage: '',
    },
  });

  useEffect(() => {
    if (!name) {
      setFormErrorFromProperty('name', '*Name is required', true);
      return;
    }
    setFormErrorFromProperty('name', '', false);
  }, [name, setFormErrorFromProperty]);

  useEffect(() => {
    if (!confirmationEmail) {
      setFormErrorFromProperty(
        'confirmationEmail',
        '*Confirmation Email is required',
        true
      );
      return;
    }
    if (!confirmationEmail.includes('@')) {
      setFormErrorFromProperty(
        'confirmationEmail',
        '*Please Enter Valid Email',
        true
      );
      return;
    }
    setFormErrorFromProperty('confirmationEmail', '', false);
  }, [confirmationEmail, setFormErrorFromProperty]);

  useEffect(() => {
    if (!phoneNumber) {
      setFormErrorFromProperty('phoneNumber', '*PhoneNumber is required', true);
      return;
    }

    if (!/^(\+977)?[9][6-9]\d{8}$/.test(phoneNumber)) {
      setFormErrorFromProperty(
        'phoneNumber',
        '*Please Enter Valid phone number',
        true
      );
      return;
    }

    setFormErrorFromProperty('phoneNumber', '', false);
  }, [phoneNumber, setFormErrorFromProperty]);

  useEffect(() => {
    if (!location) {
      setFormErrorFromProperty('location', '* Location is required', true);
      return;
    }
    setFormErrorFromProperty('location', '', false);
  }, [location, setFormErrorFromProperty]);

  return {
    name,
    setName,
    confirmationEmail,
    setConfirmationEmail,
    phoneNumber,
    setPhoneNumber,
    location,
    SetLocation,
    formError,
    setFormError,
    hasAnyFormError,
  };
};

export default useShipAddressFormState;
