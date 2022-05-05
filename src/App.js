import React, { useState } from 'react';
import './App.css';
import BackgroundAnimate from './Components/BackgroundAnimate';
import InputField from './Components/InputField';
import ResultField from './Components/ResultField';

function App() {

  const [inputValues, setInputValues] = useState("");
  return (
    <div className="container">
      <InputField setInputValues={setInputValues}/>
      <BackgroundAnimate/>
      <ResultField inputValues={inputValues}/>
    </div>
  );
}

export default App;
