import { useState } from 'react';

const useShipAddressFormState = () => {
  const [name, setName] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, SetLocation] = useState('');

  return {
    name,
    setName,
    confirmationEmail,
    setConfirmationEmail,
    phoneNumber,
    setPhoneNumber,
    location,
    SetLocation,
  };
};

export default useShipAddressFormState;
