import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import InputBox from '../app/components/InputBox';
import DisplayBox from '../app/components/DisplayBox';

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

    // Check that the element with the value of the textLabel variable is in the document

    // Check that the element with the role 'textbox' has the value of the testValue variable

    // Check that the element with the role 'textbox' has a 'placeholder' attribute
    // with a value equal to the testPlaceholder variable
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
    // Type the string held in the updatedTestVariable into the component with a role of 'textbox'

    // Check that the setValue function mock was called the correct number of times (once per letter)
    // Hint: use the length of the setValue.mock.calls variable

    // Check that the setValue function mock was called on each letter in the updatedTestVariable string
    // Hint: each call of the setValue function will only be called with one letter, try using [array].join('')
  });
});

describe('Display Box', () => {
  // Write a "renders passed values correctly" test for the DisplayBox component
  // Hint: you can search for a variable by entering "new RegExp(variableName, 'i')"
  const testLabel = 'Test Label';
  const testValue = 'Test Value';

  // TODO: finish this
});
