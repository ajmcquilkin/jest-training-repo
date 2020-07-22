import React from 'react';

interface DisplayBoxProps {
  label: string;
  value: string;
}

const DisplayBox = ({ label, value }: DisplayBoxProps) => (
  <p className="displaybox-container">
    {`${label}: "${value}"`}
  </p>
);

export default DisplayBox;
