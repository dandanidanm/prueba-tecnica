import React from 'react';

const InputNumber = ({label, id, handleChange, name, type, value}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type={type || 'text'}
      id={id}
      name={name || id}
      onChange={handleChange}
      value={0 || value}
  
    />
  </>
);

export default InputNumber;