import React from 'react';
import InputBox from './InputBox';
import DisplayBox from './DisplayBox';

const App = () => {
  const [value, setValue] = React.useState('');
  return (
    <main className="app-container">
      <InputBox
        label="Test Input"
        value={value}
        setValue={setValue}
        placeholder="Change me!"
      />
      <DisplayBox
        label="Test Output"
        value={value}
      />
    </main>
  );
};

export default App;
