import React from 'react';
import './InputField.css';

const InputField = ({ children }) => {
  return <div>{children}</div>;
};

InputField.Label = ({ title }) => {
  return <label>{title}</label>;
};
InputField.Input = ({ label, placeholder, register, validationOptions }) => {
  return (
    <input {...register(label, validationOptions)} placeholder={placeholder} />
  );
};
InputField.Error = ({ hasError, errorMessage }) => {
  return hasError && <p>{errorMessage}</p>;
};

export default InputField;
