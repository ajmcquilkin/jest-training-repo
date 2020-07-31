import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import InputBox from './InputBox';
import DisplayBox from './DisplayBox';

describe('Input Box', () => {
  const testLabel = 'Test Label';
  const testValue = 'Test Value';
  const setValue = jest.fn();
  const testPlaceholder = 'Test Placeholder';

  it('renders passed values correctly', () => {
    render(
      <InputBox
        label={testLabel}
        value={testValue}
        setValue={() => {}}
        placeholder={testPlaceholder}
      />,
    );

    expect(screen.getByLabelText(testLabel)).toBeInTheDocument(); // Label is valid
    expect(screen.getByRole('textbox')).toHaveValue(testValue); // Value is valid
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', testPlaceholder); // Placeholder is valid
  });

  it('calls setValue function correctly', () => {
    render(
      <InputBox
        label=""
        value=""
        setValue={setValue}
        placeholder=""
      />,
    );

    const updatedTestValue = 'New Test Value';
    userEvent.type(screen.getByRole('textbox'), updatedTestValue);

    expect(setValue.mock.calls.length).toBe(updatedTestValue.length); // Function is called the correct number of times
    expect(setValue.mock.calls.join(''))
      .toBe(updatedTestValue); // Function called on each letter (controlled component)
  });
});

describe('Display Box', () => {
  // Write a "renders passed values correctly" test for the DisplayBox component
  const testLabel = 'Test Label';
  const testValue = 'Test Value';

  render(
    <DisplayBox
      label={testLabel}
      value={testValue}
    />,
  );

  expect(screen.getByText(new RegExp(testLabel, 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(testValue, 'i'))).toBeInTheDocument();
});
