import React from 'react';

interface InputBoxProps {
  label: string;
  value: string;
  setValue: Function;
  placeholder: string;
}

const InputBox = ({
  label, value, setValue, placeholder,
}: InputBoxProps) => (
  <label className="inputbox-container">
    {label}
    :
    <input
      type="text"
      value={value}
      onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
      placeholder={placeholder}
    />
  </label>
);

export default InputBox;
