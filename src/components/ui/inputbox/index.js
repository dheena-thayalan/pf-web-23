/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState }  from 'react';

const InputTextArea = ({
  label,
  mode,
  type,
  placeholder,
  value,
  onChange,
  rows,
  className,
  style,
  key,
  validation,
  ...restProps
}) => {

  const [error, setError] = useState('');

  const inputProps = {
    className: `form-control ${className || ''}`,
    placeholder,
    value,
    onChange,
    ...restProps,
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
  
    // Clear previous error
    setError('');
    validation(false);
  
    switch (type) {
      case 'email':
        // Basic email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
          setError('*Invalid email address');
          validation(true);
        }
        break;
      case 'number':
        // Basic number validation
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(inputValue)) {
          setError('*Invalid number');
          validation(true);
        }
        break;
      default:
        break;
    }
    onChange(e);
  };
  
  return (
    <div key={key||0}>
      <label>{label}</label>
      {mode === 'textarea' ? <>
      <textarea {...inputProps} rows={rows||1} style={{ resize: true, ...style }} onChange={handleInputChange} /> 
      {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
      </>: <>
       <input type={type || 'text'} {...inputProps} onChange={handleInputChange} />
        {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
      </>}
    </div>
  );
};

export default InputTextArea;
