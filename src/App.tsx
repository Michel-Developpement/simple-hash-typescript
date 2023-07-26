import { ChangeEvent, useState } from "react";
import "./styles.css";

function simpleHash(input: string) {
  let hash = 0;

  for (let i = 0; i < input.length; i++) {
    hash += input.charCodeAt(i);
  }
  hash = hash * hash;
  return hash.toString();
}

export default function App() {
  const [result, setResult] = useState<string | null>(null);
  const [toHash, setToHash] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToHash(e.currentTarget.value);
  };
  const handleHash = () => {
    //e.preventDefault()
    setResult(toHash ? simpleHash(toHash) : null);
  };
  const handleReset = () => {
    setResult(null);
    setToHash(null);
  };
  return (
    <div className="App">
      <p>Texte à hasher</p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleHash}>hasher</button>
      <br />
      password : {toHash}
      <br />
      hash : {result && result}
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
