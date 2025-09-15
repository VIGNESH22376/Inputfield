import { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container mt-5">
      <h1 className="mb-4">InputField Demo</h1>
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        helperText="Type your name"
        clearable
      />
      <p className="mt-2">Value: {inputValue}</p>
    </div>
  );
}

export default App;
