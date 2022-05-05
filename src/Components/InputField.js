import React, {useState} from "react";

const InputField = ({ setInputValues }) => {

    const [value, setValue] = useState("");

    const handleOnclick = () => {
        setInputValues(value);
        setValue("");
    }
  return (
    <div className="input-header">
      <h1>
        URL <span className="span-header-text">Shortener</span>
      </h1>
      <div className="input-field-container">
        <input
          type="text"
          placeholder="Paste URL Here..."
          className="input-field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleOnclick} className="btnShorten">Shorten</button>
      </div>
    </div>
  );
};

export default InputField;
